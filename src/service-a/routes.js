const express = require('express');
const router = express.Router();

// Example route for Service A
router.get('/api/service-a/endpoint1', (req, res) => {
    res.json({ message: 'Response from Service A - Endpoint 1' });
});

router.post('/api/service-a/endpoint2', (req, res) => {
    const data = req.body;
    res.json({ message: 'Data received in Service A - Endpoint 2', data });
});

// Export the router
module.exports = (app) => {
    app.use('/', router);
};