const express = require('express');
const router = express.Router();

const Message = require('../models/message');

router.get("/", (req, res, next) => {
    Message.getMessages((err, data) => {
        if (err) res.send(err);
        if (data) {
            res.json(data);
        }
    });
});

router.post('/message', (req, res, next) => {
    const newMessage = null;
    if (req.body) {
        newMessage = new Message(req.body);
    }
    if (newMessage) {
        Message.addNewMessage(newMessage, (err, data) => {
            if (err) res.send(err);
            if (data) {
                res.json(data);
            }
        });
    } else {
        res.send("Empty body");
    }
});

router.get('/:id', (req, res, next) => {
    const query = {
        _id: req.params.id
    }
    Message.getMessagesByQuery(query, (err, data) => {

    });
});

module.exports = router;