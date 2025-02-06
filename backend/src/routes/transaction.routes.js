const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transaction.controller');
const auth = require('../middleware/auth');

// Transaction routes
router.post('/create', auth, transactionController.createTransaction);
router.get('/user', auth, transactionController.getUserTransactions);

module.exports = router;