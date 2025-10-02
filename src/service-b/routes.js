const express = require('express');
const router = express.Router();

// Example route for Service B
router.get('/endpoint', (req, res) => {
    res.send('Hello from Service B!');
});

// Additional routes can be defined here

module.exports = (app) => {
    app.use('/service-b', router);
};