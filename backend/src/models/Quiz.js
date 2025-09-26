// filepath: d:\skilled\backend\src\models\Quiz.js
const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    question: { type: String, required: true },
    options: [{ type: String, required: true }], // Array of options
    correctAnswer: { type: String, required: true }, // Correct answer
    difficulty: { type: String, enum: ['easy', 'medium', 'hard'], required: true },
});

const quizSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    topic: { type: String, required: true },
    questions: [questionSchema], // Array of questions
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Quiz', quizSchema);