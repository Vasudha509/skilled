// Logic for manageing content (CRUD operations).
// filepath: d:\skilled\backend\src\controllers\contentController.js
const Content = require('../models/Content');
const recommendContent = require('../utils/recommendationEngine'); // Import recommendation utility

// Fetch all content
exports.getAllContent = async (req, res) => {
    try {
        const content = await Content.find();
        res.status(200).json(content);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Create new content
exports.createContent = async (req, res) => {
    try {
        const { title, description, topic, difficulty, type, url } = req.body;

        const newContent = new Content({ title, description, topic, difficulty, type, url });
        await newContent.save();

        res.status(201).json({ message: 'Content created successfully', content: newContent });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Update content
exports.updateContent = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedContent = await Content.findByIdAndUpdate(id, req.body, {
            new: true,
            runValidators: true,
        });

        if (!updatedContent) {
            return res.status(404).json({ message: 'Content not found' });
        }

        res.status(200).json({ message: 'Content updated successfully', content: updatedContent });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Delete content
exports.deleteContent = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedContent = await Content.findByIdAndDelete(id);

        if (!deletedContent) {
            return res.status(404).json({ message: 'Content not found' });
        }

        res.status(200).json({ message: 'Content deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Fetch recommended content for a user
exports.getRecommendedContent = async (req, res) => {
    try {
        const userSkills = req.body.userSkills; // Assume user's skills are sent in the request body
        const contentList = await Content.find();

        // Get recommended content
        const recommendations = recommendContent(userSkills, contentList);

        res.status(200).json({ message: 'Recommended content fetched successfully', recommendations });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};