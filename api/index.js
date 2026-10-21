require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://rujisayakuekool_db_user:VcbVghvpeAqk9Qtp@rujik.ctjp2ul.mongodb.net/?retryWrites=true&w=majority&appName=rujik";
const DB_NAME = process.env.DB_NAME || 'portfolio_db';

let cachedClient = null;
let cachedDb = null;

async function getDB() {
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
    return require('../db/seedFallback.json');
  } catch {
    return { profile: {}, caseStudies: [] };
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
    res.json(fallback.profile);
  } catch (err) {
    console.error("Error in /profile:", err);
    res.json(getFallbackData().profile);
  }
});

// Projects / Case studies list with auto-sync
const handleGetProjects = async (req, res) => {
  try {
    const fallback = getFallbackData();
    const fallbackStudies = fallback.caseStudies || [];
    const db = await getDB();
    if (db) {
      let list = await db.collection('case_studies').find({}).toArray();
      const fallbackIds = new Set(fallbackStudies.map(s => s.id));
      const needsFullSync = list.length !== fallbackStudies.length || list.some(item => !fallbackIds.has(item.id));
      
      if (needsFullSync) {
        await db.collection('case_studies').deleteMany({});
        if (fallbackStudies.length > 0) {
          await db.collection('case_studies').insertMany(
            fallbackStudies.map(s => {
              const { _id, ...rest } = s;
              return { ...rest, createdAt: new Date(), updatedAt: new Date() };
            })
          );
        }
        list = await db.collection('case_studies').find({}).toArray();
      }
      if (list && list.length > 0) return res.json(list);
    }
    res.json(fallbackStudies);
  } catch (err) {
    console.error("Error in /case-studies:", err);
    res.json(getFallbackData().caseStudies);
  }
};

const handleGetSingleProject = async (req, res) => {
  try {
    const { id } = req.params;
    const db = await getDB();
    if (db) {
      const item = await db.collection('case_studies').findOne({ id });
      if (item) return res.json(item);
    }
    const fallback = getFallbackData();
    const item = fallback.caseStudies.find(s => s.id === id);
    if (item) return res.json(item);
    res.status(404).json({ error: "Project not found" });
  } catch (err) {
    console.error("Error in /case-studies/:id:", err);
    res.status(500).json({ error: "Server error" });
  }
};

router.get('/case-studies', handleGetProjects);
router.get('/projects', handleGetProjects);
router.get('/case-studies/:id', handleGetSingleProject);
router.get('/projects/:id', handleGetSingleProject);

// Activities endpoint with auto-sync
router.get('/activities', async (req, res) => {
  try {
    const fallback = getFallbackData();
    const fallbackActivities = fallback.activities || [];
    const db = await getDB();
    if (db) {
      let list = await db.collection('activities').find({}).sort({ order: 1 }).toArray();
      if (!list || list.length < fallbackActivities.length) {
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
      if (list && list.length > 0) return res.json(list);
    }
    res.json(fallbackActivities);
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

// Support both /api and root mounts
app.use('/api', router);
app.use('/', router);

module.exports = app;
