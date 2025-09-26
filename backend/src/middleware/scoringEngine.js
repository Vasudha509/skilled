// filepath: d:\skilled\backend\src\utils\scoringEngine.js
const calculateScore = (questions, answers) => {
    let score = 0;

    questions.forEach((question, index) => {
        if (question.correctAnswer === answers[index]) {
            score += 1; // Increment score for each correct answer
        }
    });

    return {
        totalQuestions: questions.length,
        correctAnswers: score,
        percentage: (score / questions.length) * 100,
    };
};

module.exports = calculateScore;