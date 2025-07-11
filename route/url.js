const express = require('express');
const {
    handleRequest,
    handleGetAnalytics,
    handleRedirect
}=require('../controller/url');
// Import the controller function to handle the request
const router = express.Router();

router.post("/", handleRequest);

router.get('/analytics/:shortUrl',handleGetAnalytics);
router.get("/:shortUrl", handleRedirect);
module.exports = router;
// This code sets up an Express router to handle POST requests to the '/shorten' endpoint