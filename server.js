const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const planRoute = require('./Routes/planRoute');  // Ensure correct path to the route

const PORT = 8000;
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// MongoDB connection
async function main() {
    try {
        await mongoose.connect('mongodb+srv://arjunvaradiyil203:Arjun123@cluster0.20zwj.mongodb.net/travel');
        console.log('Database Connected');
    } catch (error) {
        console.log('Database connection error:', error);
    }
}
main();

// Serve index.html for the root route
app.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, 'index.html'));  // Serve the static index.html
});

// Use the planRoute for any '/plan' endpoint
app.use('/plan', planRoute);

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
