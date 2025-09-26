// filepath: d:\skilled\backend\src\utils\recommendationEngine.js
const recommendContent = (userSkills, contentList) => {
    // Filter content based on user's skill gaps
    return contentList.filter((content) => {
        return !userSkills.includes(content.topic); // Recommend content for topics the user hasn't mastered
    });
};

module.exports = recommendContent;