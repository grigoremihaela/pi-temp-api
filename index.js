const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
app.use(cors());

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

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.header("Access-Control-Allow-Origin", "*");

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
/*
app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Cache-Control, Pragma,  Authorization");
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});
*/
require('./src/routes.js')(app);

app.listen(process.env.PORT, '0.0.0.0', () => {
  console.log('Server started...');
});

module.exports = app;
