module.exports = (io) => {
    var User = require('../models/user');
    var Message = require('../models/message');
    var userMap = {};
    //Sockets
    io.on('connection', (socket) => {
        socket.on("new connection", (userToken) => {
            userMap[userToken] = socket.id;
            socket.emit("new socket id", socket.id);
        });
    
        socket.on("logout", (userId) => {
            userMap[userToken] = null;
        });
    
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
    
        socket.on("send pm", (data) => {
            if (data) {
                Message.addNewMessage(data, (err, msg) => {
                    if (err) socket.emit("error in saving msg");
                    if (msg) {
                        io.emit("new msg incoming", msg);
                    }
                })
            }
        });
    
        socket.on("unread messages was marked as read", (data) => {
            io.emit("messages size changed", data);
        });
    });
    
    io.on("disconnect", (socket) => {
        console.log("socket disconnected: " + socket.id);
    })
}