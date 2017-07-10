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

app.get('/', function(req, res, next) {
    res.render('public/index.html');
});
app.use('/api/users', users);
app.use('/api/categories', categories);
app.use('/api/articles', articles);
app.use('/uploads', uploads);
app.use('/api/messages', messages);

var User = require('./models/user');
var userMap = {};
//Sockets
io.on('connection', (socket) => {
    socket.on("new authentication", (userId) => {
        userMap[userId] = socket.id;
        socket.emit("new socket id", socket.id);
    });

    socket.on('disconnect', function(){ console.log('user disconnected'); });

    socket.on("logout", (userId) => {
        userMap[userId] = null;
    })

    socket.on('new msg', (data) => {
        if (data) {
            User.findUserById(data.sender, (err, user) => {
                if (err) socket.emit("sender not found");
                if (user) {
                    data.sender = user.username;
                    io.emit("receive new msg", data);
                }
            })
        }
    });
});

io.on("disconnect", (socket) => {
    console.log("socket disconnected: " + socket.id);
})

http.listen(3000, function() {
    console.log("Server is started and works on port 3000!");
})
