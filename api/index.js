require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
let MongoClient = null;
try {
  MongoClient = require('mongodb').MongoClient;
} catch (e) {
  console.warn("MongoDB module load skipped (running in resilient static fallback mode):", e.message);
}
const path = require('path');
const createCMSRouter = require('./cms.js');

const app = express();
app.use(cors());
app.use(cookieParser());
app.use(express.json({ limit: '20mb' }));
app.use(express.urlencoded({ extended: true, limit: '20mb' }));

const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://rujisayakuekool_db_user:VcbVghvpeAqk9Qtp@rujik.ctjp2ul.mongodb.net/?retryWrites=true&w=majority&appName=rujik";
const DB_NAME = process.env.DB_NAME || 'portfolio_db';
const JWT_SECRET = process.env.JWT_SECRET || 'rujisaya-cms-secret-key-2026';
const ADMIN_USER = process.env.ADMIN_USERNAME || 'toeyruji';

let cachedClient = null;
let cachedDb = null;

async function getDB() {
  if (!MongoClient) return null;
  if (cachedDb) return cachedDb;
  if (!MONGODB_URI) return null;
  try {
    if (!cachedClient) {
      cachedClient = new MongoClient(MONGODB_URI, {
        maxPoolSize: 10,
        serverSelectionTimeoutMS: 5000
      });
      await cachedClient.connect();
    }
    cachedDb = cachedClient.db(DB_NAME);
    return cachedDb;
  } catch (err) {
    console.error("MongoDB Atlas connection error:", err.message);
    return null;
  }
}

function getFallbackData() {
  try {
    delete require.cache[require.resolve('../db/cmsInitialData.json')];
    return require('../db/cmsInitialData.json');
  } catch {
    try {
      delete require.cache[require.resolve('../db/seedFallback.json')];
      return require('../db/seedFallback.json');
    } catch {
      return { siteSettings: {}, hero: {}, about: {}, resume: {}, contact: {}, caseStudies: [], activities: [] };
    }
  }
}

function isRequestPreview(req) {
  if (req.query.preview !== 'true' && req.query.draft !== 'true') return false;
  const token = req.cookies?.admin_token || 
    (req.headers?.authorization?.startsWith('Bearer ') ? req.headers.authorization.split(' ')[1] : null) || 
    req.query.preview_token;
  if (!token) return false;
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    return decoded && decoded.username === ADMIN_USER;
  } catch {
    return false;
  }
}

const router = express.Router();

// Health check
router.get('/health', async (req, res) => {
  const db = await getDB();
  res.json({
    status: 'ok',
    database: db ? 'connected' : 'fallback-mode',
    timestamp: new Date()
  });
});

// Profile endpoint
router.get('/profile', async (req, res) => {
  try {
    const db = await getDB();
    if (db) {
      const profile = await db.collection('profile').findOne({});
      if (profile) return res.json(profile);
    }
    const fallback = getFallbackData();
    res.json(fallback.profile || fallback.about?.published || {});
  } catch (err) {
    console.error("Error in /profile:", err);
    res.json(getFallbackData().profile || {});
  }
});

// Projects / Case studies list with auto-sync and draft isolation
const handleGetProjects = async (req, res) => {
  const isPreview = isRequestPreview(req);
  try {
    const fallback = getFallbackData();
    const fallbackStudies = fallback.caseStudies || [];
    const db = await getDB();
    let list = null;

    if (db) {
      list = await db.collection('case_studies').find({}).toArray();
      const fallbackIds = new Set(fallbackStudies.map(s => s.id));
      const needsFullSync = (!list || list.length === 0);
      
      if (needsFullSync && fallbackStudies.length > 0) {
        await db.collection('case_studies').insertMany(
          fallbackStudies.map(s => {
            const { _id, ...rest } = s;
            return { ...rest, createdAt: new Date(), updatedAt: new Date() };
          })
        );
        list = await db.collection('case_studies').find({}).toArray();
      }
    }

    const sourceList = (list && list.length > 0) ? list : fallbackStudies;

    // Filter and format based on preview vs published
    if (isPreview) {
      // In preview mode: map each project to its draft state (or fallback to published)
      const draftList = sourceList.map(item => ({
        ...(item.draft || item),
        id: item.id,
        _isPreview: true
      }));
      return res.json(draftList);
    } else {
      // In public mode: strictly published projects only
      const publishedList = sourceList
        .filter(item => item.status !== 'draft')
        .map(item => {
          const { draft, _id, ...cleanPublished } = item;
          return cleanPublished;
        });
      return res.json(publishedList);
    }
  } catch (err) {
    console.error("Error in /case-studies:", err);
    res.json(getFallbackData().caseStudies || []);
  }
};

const handleGetSingleProject = async (req, res) => {
  const isPreview = isRequestPreview(req);
  try {
    const { id } = req.params;
    let item = null;

    try {
      const db = await getDB();
      if (db) {
        item = await db.collection('case_studies').findOne({ id });
      }
    } catch (dbErr) {
      console.warn("DB query failed, falling back to local seed:", dbErr.message);
    }

    if (!item) {
      const fallback = getFallbackData();
      item = (fallback.caseStudies || []).find(s => s.id === id || s.slug === id);
    }

    if (!item) {
      return res.status(404).json({ error: "Project not found" });
    }

    if (isPreview) {
      const draftData = item.draft || item;
      return res.json({ ...draftData, id: item.id, _isPreview: true });
    } else {
      if (item.status === 'draft') {
        return res.status(404).json({ error: "Project is in draft mode and not published." });
      }
      const { draft, _id, ...cleanPublished } = item;
      return res.json(cleanPublished);
    }
  } catch (err) {
    console.error("Error in /case-studies/:id:", err);
    res.status(500).json({ error: "Server error" });
  }
};

router.get('/case-studies', handleGetProjects);
router.get('/case-studies/:id', handleGetSingleProject);

router.get('/projects', (req, res, next) => {
  if (req.baseUrl !== '/api' && req.originalUrl.split('?')[0] === '/projects' && req.accepts('html') && !req.xhr && (!req.headers.accept || !req.headers.accept.includes('application/json'))) {
    return res.sendFile(path.join(__dirname, '..', 'public', 'projects.html'));
  }
  handleGetProjects(req, res);
});

router.get('/projects/:id', (req, res, next) => {
  if (req.baseUrl !== '/api' && req.accepts('html') && !req.xhr && (!req.headers.accept || !req.headers.accept.includes('application/json'))) {
    return res.sendFile(path.join(__dirname, '..', 'public', 'project-detail.html'));
  }
  handleGetSingleProject(req, res);
});

// Activities endpoint with auto-sync and preview support
router.get('/activities', async (req, res) => {
  const isPreview = isRequestPreview(req);
  try {
    const fallback = getFallbackData();
    const fallbackActivities = fallback.activities || [];
    const db = await getDB();
    let list = null;

    if (db) {
      list = await db.collection('activities').find({}).sort({ order: 1 }).toArray();
      if (!list || list.length === 0) {
        for (const act of fallbackActivities) {
          const { _id, ...rest } = act;
          await db.collection('activities').updateOne(
            { id: act.id },
            { $set: { ...rest, updatedAt: new Date() } },
            { upsert: true }
          );
        }
        list = await db.collection('activities').find({}).sort({ order: 1 }).toArray();
      }
    }

    const sourceList = (list && list.length > 0) ? list : fallbackActivities;

    if (isPreview) {
      const draftList = sourceList.map(a => ({
        ...(a.draft || a),
        _isPreview: true
      }));
      return res.json(draftList);
    } else {
      const publishedList = sourceList
        .filter(a => a.status !== 'draft')
        .map(a => {
          const { draft, _id, ...clean } = a;
          return clean;
        });
      return res.json(publishedList);
    }
  } catch (err) {
    console.error("Error in /activities:", err);
    res.json(getFallbackData().activities || []);
  }
});

// Submit contact form to MongoDB
router.post('/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ error: "Name, email, and message are required." });
    }

    const doc = {
      name: name.trim(),
      email: email.trim(),
      subject: (subject || 'General Inquiry').trim(),
      message: message.trim(),
      createdAt: new Date(),
      status: 'unread'
    };

    const db = await getDB();
    if (db) {
      const result = await db.collection('contacts').insertOne(doc);
      return res.status(201).json({
        success: true,
        message: "Thank you! Your message has been sent and stored in the database.",
        id: result.insertedId
      });
    }

    res.status(200).json({
      success: true,
      message: "Message received (offline mode)."
    });
  } catch (err) {
    console.error("Error in /contact:", err);
    res.status(500).json({ error: "Failed to send message. Please try again." });
  }
});

// Mount CMS routes
const cmsRouter = createCMSRouter(getDB);
app.use('/api', cmsRouter);
app.use('/', cmsRouter);

// Support both /api and root mounts for default router
app.use('/api', router);
app.use('/', router);

module.exports = app;
