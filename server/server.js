process.env.NODE_ENV !== "development" && require("dotenv").config()

// -----------------------------------------------------------------------------
// NODE, EXPRESS, MIDDLEWARE MODULES
// -----------------------------------------------------------------------------

// Express Dependencies
const express       = require('express');       // define express
const bodyParser    = require('body-parser');   // extract the entire body portion of an incoming request stream and exposes it on req.body
const cookieParser  = require("cookie-parser"); // IDK yet
const logger        = require('morgan');        // log status server to CLI
const cors          = require('cors');          // IDK yet
const path          = require("path");          // Node internal module: Joins all given path segments together using the platform specific separator as a delimiter, then normalizes the resulting path.
const mongoose      = require('mongoose');      // ODM for MongoDB
const app           = express()                 // Init Express

// JSON Web Tokens
const jwt           = require("jsonwebtoken");  // Auth JWT

// -----------------------------------------------------------------------------
// APP MODULES
// -----------------------------------------------------------------------------

// Routes
const apiQuestions = require('./routes/api.questions');
const apiUsers = require('./routes/api.users');
const apiAuth = require("./routes/api.auth");

// -----------------------------------------------------------------------------
// APP CONFIGURATION
// -----------------------------------------------------------------------------

// EXPRESS
app.use(express.static(path.join(__dirname, "public"))) // serve static files
app.use(bodyParser.urlencoded({ extended: true }))      // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                             // parse application/json
app.use(cookieParser())                                 // IDK yet
app.use(logger('dev'));                                 // log server status response to CLI 
app.use(cors());                                        // enable cors for all origins

//MONGO
mongoose.Promise = global.Promise;                              // Native Node.js promise
mongoose.connect(process.env.DATABASE, {useMongoClient:true});  // connect server to mongodb

// -----------------------------------------------------------------------------
// REGISTER ROUTES
// -----------------------------------------------------------------------------

app.use('/api/questions', apiQuestions);
app.use('/api/users', apiUsers)
app.use("/auth", apiAuth)

// -----------------------------------------------------------------------------
// RUN THE APP
// -----------------------------------------------------------------------------

app.listen(8080, function () {
  console.log('Server listening on port 8080!');
})

module.exports = app;