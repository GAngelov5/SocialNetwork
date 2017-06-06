const mongoose = require('mongoose')

const MessageSchema = mongoose.Schema({
    content: String,
    sent_by: {type: String, ref: 'User'},
    sent_to: {type: String, ref: 'User'},
    sent_on: Date,
    read: Boolean
});


const Message = module.exports = mongoose.model('Message', MessageSchema);

module.exports.getMessages = (callback) => {
    Message.find().exec(callback);
}

module.exports.getMessagesByQuery = (query, callback) => {
    Message.find(query).exec(callback);
}

module.exports.addNewMessage = (message, callback) => {
    message.save(callback);
}