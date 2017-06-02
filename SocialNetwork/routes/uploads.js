const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

const User = require('../models/user');

router.get('/:id', (req, res, next) => {
    User.findUserById(req.params.id, (err, user) => {
        if (err) res.json("No user found");
        if (user) {
            fs.readdir(user.avatarImg.url, (err, files) => {
                const options = {
                    root: path.join(__dirname, "../" + user.avatarImg.url)
                }
                res.sendFile(files[files.length - 1], options, (err) => {
                    if (err) console.log(err)
                    next();
                });
            })
        }
    })
})

module.exports = router;