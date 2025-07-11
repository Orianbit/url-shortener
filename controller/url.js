const { nanoid } = require("nanoid");
const Url = require("../model/url");

// POST /url — Shorten URL
async function handleRequest(req, res) {
  try {
    const { url, expiresAt } = req.body;

    if (!url) {
      return res.status(400).json({ error: "Please provide a URL to shorten." });
    }

    const shortID = nanoid(8);

    await Url.create({
      shortUrl: shortID,
      originalUrl: url,
      visitHistory: [],
      expiresAt: expiresAt ? new Date(expiresAt) : undefined
    });

    return res.status(201).json({ id: shortID });

  } catch (error) {
    console.error("Error creating short URL:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

// GET /url/:shortUrl — Redirect logic with expiration
async function handleRedirect(req, res) {
  try {
    const { shortUrl } = req.params;

    const entry = await Url.findOne({ shortUrl });

    if (!entry) {
      return res.status(404).json({ error: "Short URL not found" });
    }

    // ✅ Expiration check
    if (entry.expiresAt && entry.expiresAt < new Date()) {
      return res.status(410).json({ error: "Short URL has expired" });
    }

    // Log visit
    entry.visitHistory.push({ timestamp: Date.now() });
    await entry.save();

    return res.redirect(entry.originalUrl);

  } catch (error) {
    console.error("Redirect error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

// GET /url/analytics/:shortUrl — View analytics
async function handleGetAnalytics(req, res) {
  try {
    const { shortUrl } = req.params;

    const result = await Url.findOne({ shortUrl });

    if (!result) {
      return res.status(404).json({ error: "Short URL not found" });
    }

    return res.json({
     totalClicks: result.visitHistory.length,
     analytics: result.visitHistory,
     createdAt: result.createdAt,
     expiresAt: result.expiresAt || null,
     isExpired: result.expiresAt ? result.expiresAt < new Date() : false
    });

  } catch (error) {
    console.error("Analytics error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

module.exports = {
  handleRequest,
  handleRedirect,
  handleGetAnalytics
};
