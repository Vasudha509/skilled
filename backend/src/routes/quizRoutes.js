// filepath: d:\skilled\backend\src\routes\quizRoutes.js
const express = require('express');
const {
    getAllQuizzes,
    createQuiz,
    updateQuiz,
    deleteQuiz,
} = require('../controllers/quizController');
const authMiddleware = require('../middleware/authMiddleware'); // Ensure this middleware is created

const router = express.Router();

// Fetch all quizzes
router.get('/', getAllQuizzes);

// Create a new quiz (admin only)
router.post('/', authMiddleware, createQuiz);

// Update a quiz (admin only)
router.put('/:id', authMiddleware, updateQuiz);

// Delete a quiz (admin only)
router.delete('/:id', authMiddleware, deleteQuiz);

module.exports = router;