const mongoose = require('mongoose');
mongoose.set('strictQuery', true); // Set strictQuery to true for better query validation
async function connectDB(url) {
    return mongoose.connect(url);
}
module.exports={
    connectDB,
}