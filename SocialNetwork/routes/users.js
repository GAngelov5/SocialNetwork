var express = require('express');
var router = express.Router();
var dbConfig = require('../config/db_config');
var jwt = require('jsonwebtoken');
var multer = require('multer');
var path = require('path');

var User = require('../models/user');

router.get('/', function(req, res, next) {
    User.findAllUsers((err, users) => {
        if (err) return console.error(err);
        res.json(users);
    });
}); 

router.get('/user/:id', function(req, res, next) {
    User.findUserById({"_id": req.params.id}, (err, user) => {
        if (err) console.error(err);
        res.json(user);
    })
});

router.post('/user', function(req, res, next) {
    var newUser = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        position: '',
        following: [],
        messages: [],
        phone: '',
        address: '',
        company: '',
        position: '',
        description: '',
        imgSrc: "http://localhost:3000/default_user.png"
    };
    User.addNewUser(newUser, (err, user) => {
        if(err) res.sendStatus(404);
        res.json(user);
    })
});

router.post('/authenticate', function(req, res, next) {
    var username = req.body.username;
    var password = req.body.password;
    User.findUserByName(username, (err, user) => {
        if (err) throw err;
        if (user) {
            User.comparePassword(password, user.password, (err, isMatch) => {
                if (err) {
                    res.sendStatus(404);
                }
                console.log(isMatch);
                if (isMatch) {
                    var token = jwt.sign(user, dbConfig.secret,
                        { expiresIn: 60480});
                    res.json({
                        user: {
                            id: user.id,
                            firstName: user.firstName,
                            lastName: user.lastName,
                            username: user.username,
                            email: user.email
                        },
                        success: isMatch,
                        token: "JWT " + token,
                        msg: "Correct credentials"
                    });
                } else {
                    return res.json({
                        success: false,
                        msg: "Wrong password"
                    });
                }
            })
        } else {
            return res.json({
                success: false,
                msg: "User not found"
            });
        }
    })
});

router.post('/changePassword', function(req, res, next) {
    var userId = req.body.id;
    User.findUserById({"_id": userId}, (err, user) => {
        if (err) console.error(err);
        User.comparePassword(req.body.oldPassword, user.password, (err, isMatch) => {
            if (err) {
                return res.json({success: false, msg: "Error was thrown!"});
            }
            if (!isMatch) {
                return res.json({
                    success: false,
                    msg: "Password mismatch. Incorrect old password!"
                });
            } else {
                user.password = req.body.newPassword;
                User.updateUser(user, (err, user) =>{
                    if (err) res.send(err);
                    if (user) {
                        return res.json({
                            success: true,
                            msg: "Password was changed successfully"
                        });
                    }
                })
            }
        })
    })
});

router.put('/user/:id', function(req, res, next) {
    var updatedUser = req.body;
    User.findUserById({"_id": updatedUser._id}, (err, user) => {
        if (err) res.send(err);
        if (!user) {
            res.sendStatus(404);
        } else {
            user.firstName = updatedUser.firstName || user.firstName;
            user.lastName = updatedUser.lastName || user.lastName;
            user.address = updatedUser.address || user.address;
            user.phone = updatedUser.phone || user.phone;
            user.company = updatedUser.company || user.company;
            user.position = updatedUser.position || user.position;
            user.imgSrc = updatedUser.imgSrc || user.imgSrc;

            User.updateUser(user, (err, updateUser) => {
                if (err) res.send(err);
                return res.json(updateUser);
            })
        }
    });
});

var storage = multer.diskStorage({
    destination: (req, file, next) => {
        next(null, path.join(__dirname + '/../uploads/'))
    },
    filename: (req, file, next) => {
        next(null, file.fieldname + "-" + Date.now() + ".jpg")
    }
})

var upload = multer({storage: storage});

router.post('/user/uploadProfileImage', upload.single("file"), function(req, res, next) {
    if (req.file) { 
        res.send({imgSrc: "http://localhost:3000/" + req.file.filename}) 
    }
});

module.exports = router;
