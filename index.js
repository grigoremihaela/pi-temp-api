const express = require('express');
const app = express();
const bodyParser = require('body-parser');

/**
 * Registering the environment config file.
 * Registering the error logger (bugsnag).
 * Registering handling of async errors.
 *
 * Request middlewares:
 * Bugsnag request middleware has to be first request middleware
 * Enable body parser for auto parsing to json
 * Enable urlencoded post / put requests
 * Authenticating the client (the app that is making the request)
 *
 * Router
 *
 * After request processed middleware:
 * Error logger
 * Error handler
 *
 * Server starting
 */
const env = require('./config/env');
require('express-async-errors');

app.use(bodyParser.json());

require('./src/routes.js')(app);

app.listen(process.env.PORT, '0.0.0.0', () => {
  console.log('Server started...');
});

module.exports = app;
