require("dotenv").config();

const express = require('express');
const { connectDB } = require('./connect');
const urlRoutes = require('./route/url');
const URL = require('./model/url');

const app = express();
const port = process.env.PORT || 8001;

app.use(express.json());

// ✅ Friendly message for homepage
app.get('/', (req, res) => {
  res.send(`
    <h1>🔗 URL Shortener API</h1>
    <p>Use <code>POST /url</code> to create short URLs.</p>
    <p>See <a href="https://github.com/Orianbit/url-shortener">GitHub Repo</a> for documentation.</p>
  `);
});

// ✅ Short URL redirection
app.get('/:shortUrl', async (req, res) => {
  try {
    const shortUrl = req.params.shortUrl;
    const entry = await URL.findOneAndUpdate(
      { shortUrl },
      { $push: { visitHistory: { timestamp: Date.now() } } }
    );

    if (!entry) return res.status(404).json({ error: "Short URL not found" });

    res.redirect(entry.originalUrl);
  } catch (error) {
    console.error("Redirect error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// ✅ API routes
app.use('/url', urlRoutes);

// ✅ MongoDB connection and server start
connectDB(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });
