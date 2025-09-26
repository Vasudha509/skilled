// filepath: d:\skilled\backend\src\routes\feedbackRoutes.js
const express = require('express');
const { submitFeedback, getAllFeedback } = require('../controllers/feedbackController');
const authMiddleware = require('../middleware/authMiddleware'); // Ensure this middleware is created

const router = express.Router();

// Submit feedback
router.post('/', authMiddleware, submitFeedback);

// Fetch all feedback (admin only)
router.get('/', authMiddleware, getAllFeedback);

module.exports = router;