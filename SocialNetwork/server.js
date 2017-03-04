var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect("mongodb://admin:admin@ds145188.mlab.com:45188/social_network")

var index = require('./routes/index');
var users = require('./routes/users');
var articles = require('./routes/articles');

var app = express();

app.set('superSecret', 'secretOfTheSecrets');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(express.static(path.join(__dirname, 'client')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', index);
app.use('/api/users', users);
app.use('/api/articles', articles);

app.listen(3000, function() {
    console.log("Server is started and works on port 3000!");
})