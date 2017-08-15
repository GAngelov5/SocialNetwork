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
    Message.find(query).populate('sent_by').exec(callback);
}

module.exports.bulkUpdate = (messageIds, callback) => {
    Message.update({ _id: { $in: messageIds }}, { read: true }, { multi: true }, callback);
}

const updateQuery = (msgId, status) => {
    return {
        updateOne: {
            filter: { _id: msgId },
            update: { read: status }
        }
    } 
}

module.exports.addNewMessage = (message, callback) => {
    newMsg = new Message(message); 
    newMsg.save(callback);
}