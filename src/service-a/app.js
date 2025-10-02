const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
routes(app);

// Start the server
app.listen(PORT, () => {
    console.log(`Service A is running on http://localhost:${PORT}`);
});