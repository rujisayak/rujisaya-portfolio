const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const JWT_SECRET = process.env.JWT_SECRET || 'rujisaya-cms-secret-key-2026';
const ADMIN_USER = process.env.ADMIN_USERNAME || 'toeyruji';
const ADMIN_PASS = process.env.ADMIN_PASSWORD || 'ToeyAdmin2026!';

const CMS_FALLBACK_PATH = path.join(__dirname, '../db/cmsInitialData.json');
const SEED_FALLBACK_PATH = path.join(__dirname, '../db/seedFallback.json');
const UPLOADS_DIR = path.join(__dirname, '../public/assets/uploads');

// Multer in-memory storage for handling media uploads up to 15MB
const storage = multer.memoryStorage();
const upload = multer({
  storage,
  limits: { fileSize: 15 * 1024 * 1024 } // 15MB
});

// In-memory rate limiting for login attempts
const loginAttempts = new Map(); // ip -> { count, lockedUntil }
function checkRateLimit(ip) {
  const now = Date.now();
  const record = loginAttempts.get(ip);
  if (!record) return { allowed: true };
  if (record.lockedUntil && now < record.lockedUntil) {
    const remainingMin = Math.ceil((record.lockedUntil - now) / 60000);
    return { allowed: false, remainingMin };
  }
  if (record.lockedUntil && now >= record.lockedUntil) {
    loginAttempts.delete(ip);
    return { allowed: true };
  }
  return { allowed: true };
}

function recordFailedLogin(ip) {
  const now = Date.now();
  const record = loginAttempts.get(ip) || { count: 0 };
  record.count += 1;
  if (record.count >= 5) {
    record.lockedUntil = now + 15 * 60 * 1000; // 15 minutes lockout
  }
  loginAttempts.set(ip, record);
}

function clearFailedLogin(ip) {
  loginAttempts.delete(ip);
}

// Fallback JSON IO helpers
function readCMSFallback() {
  try {
    delete require.cache[require.resolve(CMS_FALLBACK_PATH)];
    return JSON.parse(fs.readFileSync(CMS_FALLBACK_PATH, 'utf8'));
  } catch (err) {
    console.warn("Could not read cmsInitialData.json, returning default:", err.message);
    return {
      version: 1,
      siteSettings: { published: {}, draft: {} },
      hero: { published: {}, draft: {} },
      about: { published: {}, draft: {} },
      resume: { published: {}, draft: {} },
      contact: { published: {}, draft: {} },
      caseStudies: [],
      activities: [],
      mediaLibrary: [],
      revisions: []
    };
  }
}

function writeCMSFallback(data) {
  try {
    fs.writeFileSync(CMS_FALLBACK_PATH, JSON.stringify(data, null, 2), 'utf8');
    return true;
  } catch (err) {
    console.warn("Could not write to cmsInitialData.json (read-only filesystem):", err.message);
    return false;
  }
}

// Token extraction & authentication middleware
function extractToken(req) {
  if (req.cookies && req.cookies.admin_token) {
    return req.cookies.admin_token;
  }
  if (req.headers && req.headers.authorization) {
    const parts = req.headers.authorization.split(' ');
    if (parts.length === 2 && parts[0].toLowerCase() === 'bearer') {
      return parts[1];
    }
  }
  if (req.query && req.query.preview_token) {
    return req.query.preview_token;
  }
  return null;
}

function verifyToken(token) {
  if (!token) return null;
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (e) {
    return null;
  }
}

function requireAdmin(req, res, next) {
  const token = extractToken(req);
  const user = verifyToken(token);
  if (!user || user.username !== ADMIN_USER) {
    return res.status(401).json({ error: "Unauthorized. Please log in as administrator." });
  }
  req.user = user;
  req.isAdmin = true;
  next();
}

function optionalAuth(req, res, next) {
  const token = extractToken(req);
  const user = verifyToken(token);
  if (user && user.username === ADMIN_USER) {
    req.user = user;
    req.isAdmin = true;
  } else {
    req.isAdmin = false;
  }
  next();
}

// Password matching helper (supports both bcrypt hash and plain text)
function verifyPassword(inputPassword, storedHashOrPlain) {
  if (!inputPassword || !storedHashOrPlain) return false;
  if (/^\$2[aby]\$\d{2}\$/.test(storedHashOrPlain)) {
    return bcrypt.compareSync(inputPassword, storedHashOrPlain);
  }
  return inputPassword === storedHashOrPlain;
}

module.exports = function createCMSRouter(getDB) {
  async function safeExecuteDB(fn) {
    try {
      const db = await getDB();
      if (!db) return null;
      return await fn(db);
    } catch (e) {
      console.warn("DB operation failed (" + e.message + "). Retrying with fresh connection...");
      try {
        const freshDb = await getDB(true);
        if (!freshDb) return null;
        return await fn(freshDb);
      } catch (retryErr) {
        console.error("DB operation retry failed:", retryErr.message);
        return null;
      }
    }
  }

  // ----------------------------------------------------
  // AUTHENTICATION ROUTES
  // ----------------------------------------------------

  // POST /admin/login
  router.post('/admin/login', (req, res) => {
    const ip = req.ip || req.connection.remoteAddress || 'unknown';
    const rateCheck = checkRateLimit(ip);
    if (!rateCheck.allowed) {
      return res.status(429).json({
        error: `Too many failed login attempts. Please try again in ${rateCheck.remainingMin} minutes.`
      });
    }

    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({ error: "Username and password are required." });
    }

    const isUserValid = username.trim() === ADMIN_USER;
    const isPassValid = verifyPassword(password.trim(), ADMIN_PASS);

    if (!isUserValid || !isPassValid) {
      recordFailedLogin(ip);
      return res.status(401).json({ error: "Invalid username or password." });
    }

    clearFailedLogin(ip);

    const token = jwt.sign(
      { username: ADMIN_USER, role: 'admin' },
      JWT_SECRET,
      { expiresIn: '7d' }
    );

    // Set secure HTTP-only cookie
    res.cookie('admin_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
    });

    res.json({
      success: true,
      token,
      user: { username: ADMIN_USER, role: 'admin' }
    });
  });

  // POST /admin/logout
  router.post('/admin/logout', (req, res) => {
    res.clearCookie('admin_token', { path: '/' });
    res.json({ success: true, message: "Logged out successfully." });
  });

  // GET /admin/me
  router.get('/admin/me', requireAdmin, (req, res) => {
    res.json({
      authenticated: true,
      user: { username: req.user.username, role: req.user.role }
    });
  });

  // ----------------------------------------------------
  // CONTENT MANAGEMENT (SiteSettings, Hero, About, Resume, Contact)
  // ----------------------------------------------------

  const VALID_SECTIONS = ['siteSettings', 'hero', 'about', 'resume', 'contact'];

  // GET /admin/content/:section
  router.get('/admin/content/:section', requireAdmin, async (req, res) => {
    const { section } = req.params;
    if (!VALID_SECTIONS.includes(section)) {
      return res.status(400).json({ error: `Invalid section: ${section}` });
    }

    try {
      const dbDoc = await safeExecuteDB(async (db) => {
        return await db.collection('cms_content').findOne({ _id: section });
      });

      if (dbDoc) {
        return res.json({
          section,
          published: dbDoc.published || {},
          draft: dbDoc.draft || dbDoc.published || {},
          version: dbDoc.version || 1,
          lastUpdated: dbDoc.lastUpdated || dbDoc.updatedAt || new Date()
        });
      }

      // Fallback
      const fallback = readCMSFallback();
      const secData = fallback[section] || { published: {}, draft: {} };
      res.json({
        section,
        published: secData.published || {},
        draft: secData.draft || secData.published || {},
        version: secData.version || fallback.version || 1,
        lastUpdated: fallback.lastUpdated || new Date()
      });
    } catch (err) {
      console.error(`Error in GET /admin/content/${section}:`, err);
      res.status(500).json({ error: "Failed to load section data." });
    }
  });

  // PUT /admin/content/:section (Draft Only - isolates draft from published!)
  router.put('/admin/content/:section', requireAdmin, async (req, res) => {
    const { section } = req.params;
    if (!VALID_SECTIONS.includes(section)) {
      return res.status(400).json({ error: `Invalid section: ${section}` });
    }

    const draftData = req.body;
    const now = new Date();

    try {
      await safeExecuteDB(async (db) => {
        await db.collection('cms_content').updateOne(
          { _id: section },
          {
            $set: {
              draft: draftData,
              updatedAt: now
            },
            $setOnInsert: {
              published: draftData,
              version: 1,
              createdAt: now
            }
          },
          { upsert: true }
        );
      });

      // Sync fallback file
      const fallback = readCMSFallback();
      if (!fallback[section]) fallback[section] = { published: {}, draft: {} };
      fallback[section].draft = draftData;
      fallback.lastUpdated = now.toISOString();
      writeCMSFallback(fallback);

      res.json({
        success: true,
        message: `Draft for ${section} saved successfully.`,
        draft: draftData
      });
    } catch (err) {
      console.error(`Error in PUT /admin/content/${section}:`, err);
      res.status(500).json({ error: "Failed to save draft." });
    }
  });

  // POST /admin/content/:section/publish (Copies draft to published & records revision)
  router.post('/admin/content/:section/publish', requireAdmin, async (req, res) => {
    const { section } = req.params;
    if (!VALID_SECTIONS.includes(section)) {
      return res.status(400).json({ error: `Invalid section: ${section}` });
    }

    const now = new Date();
    const note = req.body.note || `Published ${section} update`;
    const incomingContent = req.body.content || req.body.draftData;

    try {
      const dbDoc = await safeExecuteDB(async (db) => {
        return await db.collection('cms_content').findOne({ _id: section });
      });

      const fallback = readCMSFallback();
      const currentFallback = fallback[section] || { published: {}, draft: {} };

      const draftToPublish = incomingContent || dbDoc?.draft || currentFallback.draft;
      if (!draftToPublish) {
        return res.status(400).json({ error: "No draft content found to publish." });
      }

      const currentVersion = (dbDoc?.version || currentFallback.version || 1);
      const nextVersion = currentVersion + 1;

      // 1. Create Revision snapshot of previously published state
      const revisionRecord = {
        id: `rev_${section}_${Date.now()}`,
        section,
        version: currentVersion,
        snapshot: dbDoc?.published || currentFallback.published,
        author: req.user.username,
        note,
        publishedAt: now
      };

      await safeExecuteDB(async (db) => {
        await db.collection('revisions').insertOne(revisionRecord);
        await db.collection('cms_content').updateOne(
          { _id: section },
          {
            $set: {
              published: draftToPublish,
              draft: draftToPublish,
              version: nextVersion,
              updatedAt: now,
              lastPublishedAt: now
            }
          },
          { upsert: true }
        );
      });

      // Update fallback
      fallback[section] = {
        published: draftToPublish,
        draft: draftToPublish,
        version: nextVersion
      };
      if (!Array.isArray(fallback.revisions)) fallback.revisions = [];
      fallback.revisions.unshift(revisionRecord);
      if (fallback.revisions.length > 30) fallback.revisions = fallback.revisions.slice(0, 30);
      fallback.lastUpdated = now.toISOString();
      writeCMSFallback(fallback);

      res.json({
        success: true,
        message: `Section "${section}" published successfully as version ${nextVersion}.`,
        version: nextVersion,
        published: draftToPublish
      });
    } catch (err) {
      console.error(`Error publishing ${section}:`, err);
      res.status(500).json({ error: "Failed to publish section." });
    }
  });

  // GET /admin/revisions/:section
  router.get('/admin/revisions/:section', requireAdmin, async (req, res) => {
    const { section } = req.params;
    try {
      const dbRevs = await safeExecuteDB(async (db) => {
        return await db.collection('revisions')
          .find({ section })
          .sort({ publishedAt: -1 })
          .limit(20)
          .toArray();
      });

      if (dbRevs && dbRevs.length > 0) return res.json(dbRevs);

      const fallback = readCMSFallback();
      const revs = (fallback.revisions || []).filter(r => r.section === section);
      res.json(revs);
    } catch (err) {
      console.error(`Error in GET revisions for ${section}:`, err);
      res.status(500).json({ error: "Failed to load revisions." });
    }
  });

  // POST /admin/content/:section/rollback (1-Click safe rollback)
  router.post('/admin/content/:section/rollback', requireAdmin, async (req, res) => {
    const { section } = req.params;
    const { revisionId, version } = req.body;
    if (!revisionId && !version) {
      return res.status(400).json({ error: "revisionId or version is required for rollback." });
    }

    try {
      let targetRevision = await safeExecuteDB(async (db) => {
        const query = revisionId ? { id: revisionId } : { section, version: Number(version) };
        return await db.collection('revisions').findOne(query);
      });

      if (!targetRevision) {
        const fallback = readCMSFallback();
        targetRevision = (fallback.revisions || []).find(r => 
          (revisionId && r.id === revisionId) || (version && r.section === section && r.version === Number(version))
        );
      }

      if (!targetRevision || !targetRevision.snapshot) {
        return res.status(404).json({ error: "Target revision snapshot not found." });
      }

      const now = new Date();
      const restoredData = targetRevision.snapshot;

      const rollbackNote = `Rolled back to revision ${targetRevision.id || targetRevision.version}`;
      const rollbackRevRecord = {
        id: `rev_${section}_${Date.now()}`,
        section,
        version: (targetRevision.version || 1) + 1,
        snapshot: restoredData,
        author: req.user.username,
        note: rollbackNote,
        publishedAt: now
      };

      await safeExecuteDB(async (db) => {
        await db.collection('cms_content').updateOne(
          { _id: section },
          {
            $set: {
              published: restoredData,
              draft: restoredData,
              updatedAt: now,
              lastPublishedAt: now
            },
            $inc: { version: 1 }
          }
        );
        await db.collection('revisions').insertOne(rollbackRevRecord);
      });

      const fallback = readCMSFallback();
      fallback[section] = {
        published: restoredData,
        draft: restoredData,
        version: ((fallback[section]?.version || 1) + 1)
      };
      if (!Array.isArray(fallback.revisions)) fallback.revisions = [];
      fallback.revisions.unshift(rollbackRevRecord);
      fallback.lastUpdated = now.toISOString();
      writeCMSFallback(fallback);

      res.json({
        success: true,
        message: rollbackNote,
        restoredData
      });
    } catch (err) {
      console.error(`Error in rollback for ${section}:`, err);
      res.status(500).json({ error: "Failed to rollback section." });
    }
  });

  // ----------------------------------------------------
  // PUBLIC SECTION DATA ENDPOINT WITH PREVIEW SUPPORT
  // ----------------------------------------------------

  // GET /content/:section (Public reads published; ?preview=true + auth reads draft)
  router.get('/content/:section', optionalAuth, async (req, res) => {
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    const { section } = req.params;
    const isPreview = (req.query.preview === 'true' || req.query.draft === 'true') && req.isAdmin;

    try {
      const dbDoc = await safeExecuteDB(async (db) => {
        return await db.collection('cms_content').findOne({ _id: section });
      });

      if (dbDoc) {
        const content = isPreview ? (dbDoc.draft || dbDoc.published) : dbDoc.published;
        return res.json({
          section,
          isPreview,
          content: content || {}
        });
      }

      const fallback = readCMSFallback();
      const secData = fallback[section] || { published: {}, draft: {} };
      const content = isPreview ? (secData.draft || secData.published) : secData.published;
      res.json({
        section,
        isPreview,
        content: content || {}
      });
    } catch (err) {
      console.error(`Error in GET /content/${section}:`, err);
      res.status(500).json({ error: "Failed to load content." });
    }
  });

  // ----------------------------------------------------
  // PROJECTS / CASE STUDIES MANAGEMENT
  // ----------------------------------------------------

  // GET /admin/projects
  router.get('/admin/projects', requireAdmin, async (req, res) => {
    try {
      const dbList = await safeExecuteDB(async (db) => {
        return await db.collection('case_studies').find({}).sort({ projectNum: 1 }).toArray();
      });

      if (dbList && dbList.length > 0) return res.json(dbList);

      const fallback = readCMSFallback();
      res.json(fallback.caseStudies || []);
    } catch (err) {
      console.error("Error in GET /admin/projects:", err);
      res.status(500).json({ error: "Failed to load projects." });
    }
  });

  // POST /admin/projects (Create new project in draft status)
  router.post('/admin/projects', requireAdmin, async (req, res) => {
    try {
      const body = req.body;
      const slug = (body.id || body.slug || '').trim().toLowerCase().replace(/[^a-z0-9_-]/g, '-');
      if (!slug) {
        return res.status(400).json({ error: "Project ID / slug is required." });
      }

      const now = new Date();
      const newProject = {
        ...body,
        id: slug,
        slug,
        status: 'draft',
        draft: { ...body, id: slug, slug },
        createdAt: now,
        updatedAt: now
      };

      const existingInDB = await safeExecuteDB(async (db) => {
        return await db.collection('case_studies').findOne({ id: slug });
      });
      if (existingInDB) {
        return res.status(409).json({ error: `Project with ID "${slug}" already exists.` });
      }

      const fallback = readCMSFallback();
      if (!Array.isArray(fallback.caseStudies)) fallback.caseStudies = [];
      const idx = fallback.caseStudies.findIndex(p => p.id === slug);
      if (idx >= 0) {
        return res.status(409).json({ error: `Project with ID "${slug}" already exists.` });
      }

      await safeExecuteDB(async (db) => {
        await db.collection('case_studies').insertOne(newProject);
      });

      fallback.caseStudies.push(newProject);
      fallback.lastUpdated = now.toISOString();
      writeCMSFallback(fallback);

      res.status(201).json({
        success: true,
        message: `Project "${slug}" created as draft.`,
        project: newProject
      });
    } catch (err) {
      console.error("Error in POST /admin/projects:", err);
      res.status(500).json({ error: "Failed to create project." });
    }
  });

  // PUT /admin/projects/:id (Updates project draft only)
  router.put('/admin/projects/:id', requireAdmin, async (req, res) => {
    const { id } = req.params;
    const draftUpdate = req.body;
    const now = new Date();

    try {
      await safeExecuteDB(async (db) => {
        await db.collection('case_studies').updateOne(
          { id },
          {
            $set: {
              draft: draftUpdate,
              updatedAt: now
            }
          }
        );
      });

      const fallback = readCMSFallback();
      if (!Array.isArray(fallback.caseStudies)) fallback.caseStudies = [];
      const item = fallback.caseStudies.find(p => p.id === id);
      if (item) {
        item.draft = draftUpdate;
        item.updatedAt = now.toISOString();
        writeCMSFallback(fallback);
      }

      res.json({
        success: true,
        message: `Project draft for "${id}" saved successfully.`,
        draft: draftUpdate
      });
    } catch (err) {
      console.error(`Error in PUT /admin/projects/${id}:`, err);
      res.status(500).json({ error: "Failed to update project draft." });
    }
  });

  // POST /admin/projects/:id/publish (Promotes draft to published)
  router.post('/admin/projects/:id/publish', requireAdmin, async (req, res) => {
    const { id } = req.params;
    const now = new Date();

    try {
      let project = await safeExecuteDB(async (db) => {
        return await db.collection('case_studies').findOne({ id });
      });

      const fallback = readCMSFallback();
      if (!project) {
        project = (fallback.caseStudies || []).find(p => p.id === id);
      }

      if (!project) {
        return res.status(404).json({ error: `Project "${id}" not found.` });
      }

      const incomingData = req.body.projectData || req.body.project || req.body.draftData;
      const draftContent = incomingData || project.draft || project;

      // 1. Snapshot previous published state into revisions
      const revisionRecord = {
        id: `rev_proj_${id}_${Date.now()}`,
        section: `project_${id}`,
        snapshot: project,
        author: req.user.username,
        note: req.body.note || `Published project update for ${id}`,
        publishedAt: now
      };

      const updatedProject = {
        ...project,
        ...draftContent,
        id,
        status: 'published',
        draft: draftContent,
        updatedAt: now,
        publishedAt: now
      };

      await safeExecuteDB(async (db) => {
        await db.collection('revisions').insertOne(revisionRecord);
        await db.collection('case_studies').updateOne(
          { id },
          { $set: updatedProject },
          { upsert: true }
        );
      });

      // Sync fallback
      if (!Array.isArray(fallback.caseStudies)) fallback.caseStudies = [];
      const idx = fallback.caseStudies.findIndex(p => p.id === id);
      if (idx >= 0) {
        fallback.caseStudies[idx] = updatedProject;
      } else {
        fallback.caseStudies.push(updatedProject);
      }
      if (!Array.isArray(fallback.revisions)) fallback.revisions = [];
      fallback.revisions.unshift(revisionRecord);
      fallback.lastUpdated = now.toISOString();
      writeCMSFallback(fallback);

      // Also sync seedFallback.json
      try {
        const seed = JSON.parse(fs.readFileSync(SEED_FALLBACK_PATH, 'utf8'));
        const sIdx = (seed.caseStudies || []).findIndex(p => p.id === id);
        if (sIdx >= 0) {
          seed.caseStudies[sIdx] = { ...updatedProject };
        } else {
          seed.caseStudies.push({ ...updatedProject });
        }
        fs.writeFileSync(SEED_FALLBACK_PATH, JSON.stringify(seed, null, 2), 'utf8');
      } catch (seedErr) {
        console.warn("Could not sync seedFallback.json:", seedErr.message);
      }

      res.json({
        success: true,
        message: `Project "${id}" published successfully.`,
        project: updatedProject
      });
    } catch (err) {
      console.error(`Error in publish project ${id}:`, err);
      res.status(500).json({ error: "Failed to publish project." });
    }
  });

  // POST /admin/projects/:id/unpublish
  router.post('/admin/projects/:id/unpublish', requireAdmin, async (req, res) => {
    const { id } = req.params;
    const now = new Date();

    try {
      await safeExecuteDB(async (db) => {
        await db.collection('case_studies').updateOne(
          { id },
          { $set: { status: 'draft', updatedAt: now } }
        );
      });

      const fallback = readCMSFallback();
      const item = (fallback.caseStudies || []).find(p => p.id === id);
      if (item) {
        item.status = 'draft';
        item.updatedAt = now.toISOString();
        writeCMSFallback(fallback);
      }

      res.json({
        success: true,
        message: `Project "${id}" unpublished (status set to draft).`
      });
    } catch (err) {
      console.error(`Error unpublishing project ${id}:`, err);
      res.status(500).json({ error: "Failed to unpublish project." });
    }
  });

  // DELETE /admin/projects/:id
  router.delete('/admin/projects/:id', requireAdmin, async (req, res) => {
    const { id } = req.params;
    try {
      await safeExecuteDB(async (db) => {
        await db.collection('case_studies').deleteOne({ id });
      });

      const fallback = readCMSFallback();
      if (Array.isArray(fallback.caseStudies)) {
        fallback.caseStudies = fallback.caseStudies.filter(p => p.id !== id);
        writeCMSFallback(fallback);
      }

      res.json({
        success: true,
        message: `Project "${id}" removed.`
      });
    } catch (err) {
      console.error(`Error deleting project ${id}:`, err);
      res.status(500).json({ error: "Failed to delete project." });
    }
  });

  // ----------------------------------------------------
  // ACTIVITIES MANAGEMENT
  // ----------------------------------------------------

  // GET /admin/activities
  router.get('/admin/activities', requireAdmin, async (req, res) => {
    try {
      const dbList = await safeExecuteDB(async (db) => {
        return await db.collection('activities').find({}).sort({ order: 1 }).toArray();
      });

      if (dbList && dbList.length > 0) return res.json(dbList);

      const fallback = readCMSFallback();
      res.json(fallback.activities || []);
    } catch (err) {
      console.error("Error in GET /admin/activities:", err);
      res.status(500).json({ error: "Failed to load activities." });
    }
  });

  // PUT /admin/activities (Save draft list)
  router.put('/admin/activities', requireAdmin, async (req, res) => {
    const activitiesList = req.body;
    if (!Array.isArray(activitiesList)) {
      return res.status(400).json({ error: "Expected an array of activities." });
    }

    try {
      const now = new Date();
      await safeExecuteDB(async (db) => {
        for (const act of activitiesList) {
          await db.collection('activities').updateOne(
            { id: act.id },
            { $set: { draft: act, updatedAt: now } },
            { upsert: true }
          );
        }
      });

      const fallback = readCMSFallback();
      fallback.activities = activitiesList.map(act => ({
        ...act,
        draft: act
      }));
      fallback.lastUpdated = now.toISOString();
      writeCMSFallback(fallback);

      res.json({
        success: true,
        message: "Activities draft saved successfully."
      });
    } catch (err) {
      console.error("Error in PUT /admin/activities:", err);
      res.status(500).json({ error: "Failed to save activities draft." });
    }
  });

  // POST /admin/activities/publish
  router.post('/admin/activities/publish', requireAdmin, async (req, res) => {
    try {
      const now = new Date();
      const fallback = readCMSFallback();
      const activitiesToPublish = fallback.activities.map(act => {
        const content = act.draft || act;
        return {
          ...content,
          status: 'published',
          updatedAt: now
        };
      });

      await safeExecuteDB(async (db) => {
        for (const act of activitiesToPublish) {
          const { _id, ...rest } = act;
          await db.collection('activities').updateOne(
            { id: act.id },
            { $set: rest },
            { upsert: true }
          );
        }
      });

      fallback.activities = activitiesToPublish;
      fallback.lastUpdated = now.toISOString();
      writeCMSFallback(fallback);

      res.json({
        success: true,
        message: "Activities published successfully."
      });
    } catch (err) {
      console.error("Error in POST /admin/activities/publish:", err);
      res.status(500).json({ error: "Failed to publish activities." });
    }
  });

  // ----------------------------------------------------
  // MEDIA LIBRARY
  // ----------------------------------------------------

  // GET /admin/media
  router.get('/admin/media', requireAdmin, async (req, res) => {
    try {
      const dbItems = await safeExecuteDB(async (db) => {
        return await db.collection('media')
          .find({}, { projection: { data: 0 } })
          .sort({ uploadedAt: -1 })
          .toArray();
      });

      if (dbItems && dbItems.length > 0) return res.json(dbItems);

      const fallback = readCMSFallback();
      res.json(fallback.mediaLibrary || []);
    } catch (err) {
      console.error("Error in GET /admin/media:", err);
      res.status(500).json({ error: "Failed to load media." });
    }
  });

  // POST /admin/media/upload
  router.post('/admin/media/upload', requireAdmin, upload.single('file'), async (req, res) => {
    if (!req.file) {
      return res.status(400).json({ error: "No file was uploaded." });
    }

    try {
      const originalName = req.file.originalname.replace(/[^a-zA-Z0-9._-]/g, '_');
      const uniqueId = `media_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
      const filename = `${uniqueId}_${originalName}`;
      const url = `/api/media/${uniqueId}`;
      const now = new Date();

      const altTextEn = req.body.altText_en || originalName;
      const altTextTh = req.body.altText_th || originalName;

      // Dual-write: try to save to local uploads directory
      try {
        if (!fs.existsSync(UPLOADS_DIR)) {
          fs.mkdirSync(UPLOADS_DIR, { recursive: true });
        }
        fs.writeFileSync(path.join(UPLOADS_DIR, filename), req.file.buffer);
      } catch (fsErr) {
        console.warn("Local disk write skipped (read-only environment):", fsErr.message);
      }

      const mediaDoc = {
        id: uniqueId,
        filename,
        originalName,
        url,
        mimeType: req.file.mimetype,
        size: req.file.size,
        data: req.file.buffer,
        altText: {
          en: altTextEn,
          th: altTextTh
        },
        uploadedAt: now
      };

      await safeExecuteDB(async (db) => {
        await db.collection('media').insertOne(mediaDoc);
      });

      // Add to fallback JSON
      const fallback = readCMSFallback();
      if (!Array.isArray(fallback.mediaLibrary)) fallback.mediaLibrary = [];
      const { data: _ignored, ...mediaMeta } = mediaDoc;
      fallback.mediaLibrary.unshift(mediaMeta);
      writeCMSFallback(fallback);

      res.status(201).json({
        success: true,
        message: "Media uploaded successfully.",
        media: mediaMeta
      });
    } catch (err) {
      console.error("Error in media upload:", err);
      res.status(500).json({ error: "Failed to upload file." });
    }
  });

  // PUT /admin/media/:id
  router.put('/admin/media/:id', requireAdmin, async (req, res) => {
    const { id } = req.params;
    const { altText_en, altText_th } = req.body;

    try {
      await safeExecuteDB(async (db) => {
        await db.collection('media').updateOne(
          { id },
          {
            $set: {
              'altText.en': altText_en,
              'altText.th': altText_th,
              updatedAt: new Date()
            }
          }
        );
      });

      const fallback = readCMSFallback();
      const item = (fallback.mediaLibrary || []).find(m => m.id === id);
      if (item) {
        if (!item.altText) item.altText = {};
        if (altText_en !== undefined) item.altText.en = altText_en;
        if (altText_th !== undefined) item.altText.th = altText_th;
        writeCMSFallback(fallback);
      }

      res.json({ success: true, message: "Media metadata updated." });
    } catch (err) {
      console.error(`Error updating media ${id}:`, err);
      res.status(500).json({ error: "Failed to update media." });
    }
  });

  // DELETE /admin/media/:id
  router.delete('/admin/media/:id', requireAdmin, async (req, res) => {
    const { id } = req.params;
    try {
      await safeExecuteDB(async (db) => {
        await db.collection('media').deleteOne({ id });
      });

      const fallback = readCMSFallback();
      if (Array.isArray(fallback.mediaLibrary)) {
        fallback.mediaLibrary = fallback.mediaLibrary.filter(m => m.id !== id);
        writeCMSFallback(fallback);
      }

      res.json({ success: true, message: `Media "${id}" deleted.` });
    } catch (err) {
      console.error(`Error deleting media ${id}:`, err);
      res.status(500).json({ error: "Failed to delete media." });
    }
  });

  // GET /media/:id (Public streaming endpoint for uploaded assets)
  router.get('/media/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const doc = await safeExecuteDB(async (db) => {
        return await db.collection('media').findOne({ id });
      });

      if (doc && doc.data) {
        res.setHeader('Content-Type', doc.mimeType || 'application/octet-stream');
        res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
        return res.send(doc.data.buffer || doc.data);
      }

      // Check local filesystem
      if (fs.existsSync(UPLOADS_DIR)) {
        const matches = fs.readdirSync(UPLOADS_DIR).filter(f => f.startsWith(id));
        if (matches.length > 0) {
          return res.sendFile(path.join(UPLOADS_DIR, matches[0]));
        }
      }

      res.status(404).json({ error: "Media file not found." });
    } catch (err) {
      console.error(`Error serving media ${id}:`, err);
      res.status(500).json({ error: "Failed to serve media file." });
    }
  });

  // ----------------------------------------------------
  // EXPORT & SYNC SEED FALLBACK
  // ----------------------------------------------------

  // POST /admin/export-fallback (Synchronize local seed files with database)
  router.post('/admin/export-fallback', requireAdmin, async (req, res) => {
    try {
      const publishedProjects = await safeExecuteDB(async (db) => {
        return await db.collection('case_studies').find({}).toArray();
      }) || [];

      const publishedActivities = await safeExecuteDB(async (db) => {
        return await db.collection('activities').find({}).sort({ order: 1 }).toArray();
      }) || [];

      const fallback = readCMSFallback();
      if (publishedProjects.length > 0) {
        fallback.caseStudies = publishedProjects.map(p => {
          const { _id, ...rest } = p;
          return rest;
        });
      }
      if (publishedActivities.length > 0) {
        fallback.activities = publishedActivities.map(a => {
          const { _id, ...rest } = a;
          return rest;
        });
      }

      fallback.lastUpdated = new Date().toISOString();
      writeCMSFallback(fallback);

      // Also sync seedFallback.json
      try {
        const seed = JSON.parse(fs.readFileSync(SEED_FALLBACK_PATH, 'utf8'));
        if (publishedProjects.length > 0) {
          seed.caseStudies = fallback.caseStudies.map(p => {
            const { draft, ...clean } = p;
            return clean;
          });
        }
        if (publishedActivities.length > 0) {
          seed.activities = fallback.activities.map(a => {
            const { draft, ...clean } = a;
            return clean;
          });
        }
        fs.writeFileSync(SEED_FALLBACK_PATH, JSON.stringify(seed, null, 2), 'utf8');
      } catch (seedErr) {
        console.warn("Could not sync seedFallback.json:", seedErr.message);
      }

      res.json({
        success: true,
        message: "Fallback files (cmsInitialData.json & seedFallback.json) synchronized successfully.",
        projectsCount: fallback.caseStudies.length,
        activitiesCount: fallback.activities.length
      });
    } catch (err) {
      console.error("Error in /admin/export-fallback:", err);
      res.status(500).json({ error: "Failed to export fallback data." });
    }
  });

  return router;
};
