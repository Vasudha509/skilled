// filepath: d:\skilled\backend\src\controllers\feedbackController.js
const Feedback = require('../models/Feedback');

// Submit feedback
exports.submitFeedback = async (req, res) => {
    try {
        const { feedbackText, sentiment } = req.body;

        const newFeedback = new Feedback({
            user: req.user.id, // User ID from the auth middleware
            feedbackText,
            sentiment,
        });

        await newFeedback.save();

        res.status(201).json({ message: 'Feedback submitted successfully', feedback: newFeedback });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Fetch all feedback
exports.getAllFeedback = async (req, res) => {
    try {
        const feedback = await Feedback.find().populate('user', 'name email'); // Populate user details
        res.status(200).json(feedback);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};