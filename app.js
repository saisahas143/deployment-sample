// Load the required modules
const express = require('express');
const path = require('path');

// Create an Express application
const app = express();

// Serve static files (index.html, etc.) from the current directory
app.use(express.static(path.join(__dirname, '/')));

// Define the port for the server
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
