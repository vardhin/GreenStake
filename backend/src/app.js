require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const mongoose = require('mongoose');

// Add this debug log
console.log('Environment variables loaded:', {
    port: process.env.PORT,
    mongoUri: process.env.MONGODB_URI?.substring(0, 20) + '...', // Only show start of URI for security
    jwtSecret: process.env.JWT_SECRET ? 'Set' : 'Not set'
});

const app = express();

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Database connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Basic route
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// Routes
const userRoutes = require('./routes/user.routes');
const projectRoutes = require('./routes/project.routes');
const transactionRoutes = require('./routes/transaction.routes');

app.use('/api/users', userRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/transactions', transactionRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
