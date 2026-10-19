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

// Case studies list
router.get('/case-studies', async (req, res) => {
  try {
    const db = await getDB();
    if (db) {
      const list = await db.collection('case_studies').find({}).toArray();
      if (list && list.length > 0) return res.json(list);
    }
    const fallback = getFallbackData();
    res.json(fallback.caseStudies);
  } catch (err) {
    console.error("Error in /case-studies:", err);
    res.json(getFallbackData().caseStudies);
  }
});

// Single case study
router.get('/case-studies/:id', async (req, res) => {
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
    res.status(404).json({ error: "Case study not found" });
  } catch (err) {
    console.error("Error in /case-studies/:id:", err);
    res.status(500).json({ error: "Server error" });
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
