const express = require('express');
const app = express();

// Serve static files from the current directory (if applicable)
app.use(express.static(__dirname));

// Define a route for "/"
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Start the server
app.listen(3000, '0.0.0.0', () => {
    console.log('Server is running on http://0.0.0.0:3000');
});
