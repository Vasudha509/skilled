const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const contentRoutes = require('./routes/contentRoutes');
const quizRoutes = require('./routes/quizRoutes');
const feedbackRoutes = require('./routes/feedbackRoutes'); // Import feedback routes
const errorHandler = require('./middleware/errorHandler');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/content', contentRoutes);
app.use('/api/quiz', quizRoutes);
app.use('/api/feedback', feedbackRoutes); // Add feedback routes

// Error Handler
app.use(errorHandler);

// Test Route
app.get('/', (req, res) => {
    res.send('Backend is working!');
});

module.exports = app;