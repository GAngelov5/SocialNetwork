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
        sent_to: req.params.id
    }
    Message.getMessagesByQuery(query, (err, data) => {
        if (err) res.send(err);
        if (data) {
            res.json(data);
        }
    });
});

router.post('/update', (req, res, next) => {
    const messageIds = req.body;
    Message.bulkUpdate(messageIds, (err, data) => {       
        if (err) res.send(err);
        if (data) {
            res.send(data);
        }
    });
});

router.get('/unread/:id', (req, res, next) => {
    const query = {
        sent_to: req.params.id,
        read: false
    }
    Message.getMessagesByQuery(query, (err, data) => {
        if (err) res.send(err);
        if (data) {
            res.json(data);
        }
    });
});

router.get('/read/:id', (req, res, next) => {
    const query = {
        sent_to: req.params.id,
        read: true
    }
    Message.getMessagesByQuery(query, (err, data) => {
        if (err) res.send(err);
        if (data) {
            res.json(data);
        }
    });
});

module.exports = router;