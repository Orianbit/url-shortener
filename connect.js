const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ Connected to MongoDB");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
}

module.exports = { connectDB };
// This code defines a function to connect to a MongoDB database using Mongoose.
// It uses an asynchronous function to handle the connection process and logs a message upon successful connection or an error if the connection fails.
// The function is exported for use in other parts of the application.