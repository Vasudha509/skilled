require('dotenv').config(); // Load environment variables
const app = require('./app'); // Ensure this path points to your app.js file
const connectDB = require('./config/db'); // Import MongoDB connection function

const PORT = process.env.PORT || 4000;

// Connect to MongoDB and start the server
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});