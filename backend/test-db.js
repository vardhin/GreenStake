const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('✅ Connected to MongoDB successfully!');
    
    // Optional: List all collections
    mongoose.connection.db.listCollections().toArray((err, collections) => {
      if (err) {
        console.log('Error getting collections:', err);
        return;
      }
      console.log('Available collections:', collections.map(c => c.name));
    });
  })
  .catch((error) => {
    console.error('❌ Error connecting to MongoDB:', error);
  });