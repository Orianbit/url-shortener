const mongoose = require('mongoose');
const urlSchema = new mongoose.Schema({
  shortUrl: { type: String, required: true, unique: true },
  originalUrl: { type: String, required: true },
  visitHistory: [{timestamp:{type:Number}}],
  expiresAt:{type:Date}
},
{timestamps:true}
);

const Url = mongoose.model("Url", urlSchema); // Model was created
// The `visitHistory` field is an array that stores timestamps of visits
module.exports = Url;
// This code defines a Mongoose schema for a URL shortener application.
// The schema includes fields for the original URL, the shortened URL, and a timestamp for when