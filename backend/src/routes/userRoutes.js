// filepath: d:\skilled\backend\src\routes\userRoutes.js
const express = require('express');
const { getProfile, updateProfile } = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware'); // Ensure this middleware is created

const router = express.Router();

// Fetch user profile
router.get('/profile', authMiddleware, getProfile);

// Update user profile
router.put('/profile', authMiddleware, updateProfile);

module.exports = router;