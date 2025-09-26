// filepath: d:\skilled\backend\src\models\Feedback.js
const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to the user
    feedbackText: { type: String, required: true }, // Feedback content
    sentiment: { type: String, enum: ['positive', 'neutral', 'negative'], default: 'neutral' }, // Sentiment analysis
    createdAt: { type: Date, default: Date.now }, // Timestamp
});

module.exports = mongoose.model('Feedback', feedbackSchema);