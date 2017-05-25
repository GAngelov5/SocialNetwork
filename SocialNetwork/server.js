var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var passport = require('passport');
var cors = require('cors');
var dbConfig = require('./config/db_config');

mongoose.connect(dbConfig.database);

mongoose.connection.on('connected', function() {
    console.log("Connected to database: " + dbConfig.database);
});

mongoose.connection.on('error', (err) => {
    console.log("Error in database: " + err);
});

var index = require('./routes/index');
var users = require('./routes/users');
var articles = require('./routes/articles');

var app = express();

app.use(cors())

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(express.static(path.join(__dirname, 'client')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//passport
app.use(passport.initialize());
app.use(passport.session());

require("./config/passport")(passport);

app.use('/', index);
app.use('/api/users', users);
app.use('/api/articles', articles);

app.listen(3000, function() {
    console.log("Server is started and works on port 3000!");
})
