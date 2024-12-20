const express = require('express');
const app = express();
const port = 3000;

// Serve static files if needed
app.use(express.static('public'));

// Define the root route
app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
