// filepath: d:\skilled\backend\src\controllers\quizController.js
const Quiz = require('../models/Quiz');
const calculateScore = require('../utils/scoringEngine'); // Import scoring utility
const adjustDifficulty = require('../utils/adaptiveLearning'); // Import adaptive learning utility

// Fetch all quizzes
exports.getAllQuizzes = async (req, res) => {
    try {
        const quizzes = await Quiz.find();
        res.status(200).json(quizzes);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Fetch quizzes with adaptive difficulty
exports.getAdaptiveQuiz = async (req, res) => {
    try {
        const { performance } = req.body; // Assume performance data is sent in the request body

        // Adjust difficulty based on performance
        const difficulty = adjustDifficulty(performance);

        // Fetch quizzes with the adjusted difficulty
        const quizzes = await Quiz.find({ 'questions.difficulty': difficulty });

        res.status(200).json({ message: 'Adaptive quizzes fetched successfully', quizzes });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Create a new quiz
exports.createQuiz = async (req, res) => {
    try {
        const { title, description, topic, questions } = req.body;

        const newQuiz = new Quiz({ title, description, topic, questions });
        await newQuiz.save();

        res.status(201).json({ message: 'Quiz created successfully', quiz: newQuiz });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Update a quiz
exports.updateQuiz = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedQuiz = await Quiz.findByIdAndUpdate(id, req.body, {
            new: true,
            runValidators: true,
        });

        if (!updatedQuiz) {
            return res.status(404).json({ message: 'Quiz not found' });
        }

        res.status(200).json({ message: 'Quiz updated successfully', quiz: updatedQuiz });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Delete a quiz
exports.deleteQuiz = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedQuiz = await Quiz.findByIdAndDelete(id);

        if (!deletedQuiz) {
            return res.status(404).json({ message: 'Quiz not found' });
        }

        res.status(200).json({ message: 'Quiz deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Submit quiz answers and calculate score
exports.submitQuiz = async (req, res) => {
    try {
        const { quizId, answers } = req.body;

        // Fetch the quiz
        const quiz = await Quiz.findById(quizId);
        if (!quiz) {
            return res.status(404).json({ message: 'Quiz not found' });
        }

        // Calculate the score
        const result = calculateScore(quiz.questions, answers);

        res.status(200).json({ message: 'Quiz submitted successfully', result });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};