// filepath: d:\skilled\backend\src\utils\adaptiveLearning.js
const adjustDifficulty = (performance) => {
    if (performance.correctAnswers / performance.totalQuestions > 0.8) {
        return 'hard'; // Increase difficulty if performance is good
    } else if (performance.correctAnswers / performance.totalQuestions < 0.5) {
        return 'easy'; // Decrease difficulty if performance is poor
    }
    return 'medium'; // Keep difficulty medium otherwise
};

module.exports = adjustDifficulty;