const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');
var passport = require('passport');

const User = require('../models/user');

router.get('/:id/:filename', (req, res, next) => {
    User.findUserById(req.params.id, (err, user) => {
        if (err) res.json("No user found");
        if (user) {
            fs.readdir(user.avatarImg.url, (err, files) => {
                const options = {
                    root: path.join(__dirname, "../" + user.avatarImg.url)
                }
                res.sendFile(req.params.filename, options, (err) => {
                    if (err) console.log(err)
                    next();
                });
            });
        }
    });
});

router.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, "../uploads/default_user.png"), (err) => {
        if (err) console.log(err);
    });
});

module.exports = router;