require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const { MongoClient, ObjectId } = require('mongodb');

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;
const DB_NAME = process.env.DB_NAME || 'portfolio_db';

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

let dbClient = null;
let db = null;

async function initDB() {
  if (!MONGODB_URI) {
    console.warn("No MONGODB_URI found, running in offline mode.");
    return;
  }
  try {
    dbClient = new MongoClient(MONGODB_URI);
    await dbClient.connect();
    db = dbClient.db(DB_NAME);
    console.log(`Connected to MongoDB Atlas [${DB_NAME}]`);
  } catch (err) {
    console.error("MongoDB connection error:", err.message);
  }
}

// Health check & status
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    database: db ? 'connected' : 'disconnected',
    timestamp: new Date()
  });
});

// Profile endpoint
app.get('/api/profile', async (req, res) => {
  try {
    if (db) {
      const profile = await db.collection('profile').findOne({});
      if (profile) return res.json(profile);
    }
    // Fallback if DB not reachable
    const fallbackProfile = require('./db/seedFallback.json').profile;
    res.json(fallbackProfile);
  } catch (err) {
    console.error("Error fetching profile:", err);
    res.status(500).json({ error: "Failed to fetch profile" });
  }
});

// Case studies endpoint
app.get('/api/case-studies', async (req, res) => {
  try {
    if (db) {
      const studies = await db.collection('case_studies').find({}).toArray();
      if (studies && studies.length > 0) return res.json(studies);
    }
    const fallbackStudies = require('./db/seedFallback.json').caseStudies;
    res.json(fallbackStudies);
  } catch (err) {
    console.error("Error fetching case studies:", err);
    res.status(500).json({ error: "Failed to fetch case studies" });
  }
});

// Single case study
app.get('/api/case-studies/:id', async (req, res) => {
  try {
    const { id } = req.params;
    if (db) {
      const study = await db.collection('case_studies').findOne({ id });
      if (study) return res.json(study);
    }
    const fallbackStudies = require('./db/seedFallback.json').caseStudies;
    const study = fallbackStudies.find(s => s.id === id);
    if (study) return res.json(study);
    res.status(404).json({ error: "Case study not found" });
  } catch (err) {
    console.error("Error fetching case study:", err);
    res.status(500).json({ error: "Failed to fetch case study" });
  }
});

// Submit contact inquiry to MongoDB
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ error: "Please fill in all required fields (name, email, message)." });
    }

    const contactDoc = {
      name: name.trim(),
      email: email.trim(),
      subject: (subject || 'General Inquiry').trim(),
      message: message.trim(),
      createdAt: new Date(),
      status: 'unread'
    };

    if (db) {
      const result = await db.collection('contacts').insertOne(contactDoc);
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
    console.error("Error saving contact message:", err);
    res.status(500).json({ error: "Failed to send message. Please try again." });
  }
});

// Serve frontend for all standard routes
app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, async () => {
  await initDB();
  console.log(`Portfolio server is running at http://localhost:${PORT}`);
});
