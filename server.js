// Importing dependencies
const express = require('express');
const bodyParser = require('body-parser');

// Creating express app
const application = express();

application.use(bodyParser.urlencoded({ extended: true }));
application.use(bodyParser.json());

// Configuring the database
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

application.get('/', (req, res) => {
    res.json({ "message": "Hello World!" });
});

require('./app/routes/note.routes.js')(application);

application.listen(3000, () => {
    console.log('Server is listening on port 300');
});