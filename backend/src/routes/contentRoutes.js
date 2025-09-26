// Define API endpoints for content management.

const express = require('express');
const {
    getAllContent,
    createContent,
    updateContent,
    deleteContent,
} = require('../controllers/contentController');
const authMiddleware = require('../middleware/authMiddleware'); // Ensure this middleware is created

const router = express.Router();

// Fetch all content
router.get('/', getAllContent);

// Create new content (admin only)
router.post('/', authMiddleware, createContent);

// Update content (admin only)
router.put('/:id', authMiddleware, updateContent);

// Delete content (admin only)
router.delete('/:id', authMiddleware, deleteContent);

module.exports = router;
