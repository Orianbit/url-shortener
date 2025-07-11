const express = require('express');
const { connectDB } = require('./connect'); // Make sure it's connectDB
const urlRoutes = require('./route/url');   // Check if folder is route or routes
const URL = require('./model/url'); // Import the URL model

const app = express();
const port = process.env.PORT || 8001;

// ✅ Add JSON parser middleware
app.use(express.json());

// ✅ Setup routes
app.use('/url', urlRoutes);

app.get('/:shortUrl', async (req,res) => {
    const shortUrl=req.params.shortUrl;
    const entry = await URL.findOneAndUpdate({
        shortUrl
    },{$push:{
        visitHistory:{ timestamp: Date.now() },
    },
},
);
res.redirect(entry.originalUrl);
});


// ✅ Connect to MongoDB and start server
connectDB('mongodb://localhost:27017/url-shortener')
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });
