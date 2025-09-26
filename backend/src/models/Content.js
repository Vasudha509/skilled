// filepath: d:\skilled\backend\src\models\Content.js
const mongoose = require('mongoose');

// Define the schema for learning resources.
const contentSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    topic: { type: String, required: true },
    difficulty: { type: String, enum: ['easy', 'medium', 'hard'], required: true },
    type: { type: String, enum: ['video', 'quiz', 'note'], required: true },
    url: { type: String, required: true }, // URL for the resource (e.g., video link or file path)
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Content', contentSchema);
