require("dotenv").config();

const express = require('express');
const { connectDB } = require('./connect');
const urlRoutes = require('./route/url');
const URL = require('./model/url');

const app = express();
const port = process.env.PORT || 8001;

app.use(express.json());

app.use('/url', urlRoutes);

app.get('/:shortUrl', async (req, res) => {
  const shortUrl = req.params.shortUrl;
  const entry = await URL.findOneAndUpdate(
    { shortUrl },
    { $push: { visitHistory: { timestamp: Date.now() } } }
  );

  if (!entry) return res.status(404).json({ error: "Short URL not found" });

  res.redirect(entry.originalUrl);
});

// ✅ Use env var for connection string
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
// This code sets up an Express server that connects to a MongoDB database and provides routes for URL shortening and redirection.
// It uses the Mongoose library to interact with the database and defines routes for creating short URLs