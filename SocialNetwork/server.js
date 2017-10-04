var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var passport = require('passport');
var cors = require('cors');
var dbConfig = require('./config/db_config');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

mongoose.connect(dbConfig.database);

mongoose.connection.on('connected', function() {
    console.log("Connected to database: " + dbConfig.database);
});

mongoose.connection.on('error', (err) => {
    console.log("Error in database: " + err);
});

var users = require('./routes/users');
var articles = require('./routes/articles');
var categories = require('./routes/category');
var uploads = require('./routes/uploads');
var messages = require('./routes/messages');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'uploads')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//delete when in production because now the 2 projects are separeted and run on different servers.
app.use(cors({origin: "http://localhost:8080", credentials: true}))

//passport
app.use(passport.initialize());
app.use(passport.session());

require("./config/passport")(passport);

//Sockets
require('./config/sockets')(io);

app.get('/', function(req, res, next) {
    res.render('public/index.html');
});
app.use('/api/users', users);
app.use('/api/categories', categories);
app.use('/api/articles', articles);
app.use('/uploads', uploads);
app.use('/api/messages', messages);

http.listen(3000, function() {
    console.log("Server is started and works on port 3000!");
})
