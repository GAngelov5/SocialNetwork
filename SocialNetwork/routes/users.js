var express = require('express');
var router = express.Router();
var dbConfig = require('../config/db_config');
var jwt = require('jsonwebtoken');
var multer = require('multer');
var path = require('path');
var fs = require('fs');
var passport = require('passport');

var User = require('../models/user');

router.get('/', passport.authenticate('jwt', { session: false }), function(req, res, next) {
    User.findAllUsers((err, users) => {
        if (err) return console.error(err);
        res.json(users);
    });
}); 

router.get('/user/:id', passport.authenticate('jwt', { session: false }), function(req, res, next) {
    User.findUserById({"_id": req.params.id}, (err, user) => {
        if (err) res.send(err);
        if (user) {
            return res.json(user);
        } else {
            return res.sendStatus(400);
        }
    })
});

router.post('/user', function(req, res, next) {
    var newUser = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        position: '',
        following: [],
        followers: [],
        subscribers: [],
        messages: [],
        phone: '',
        address: '',
        company: '',
        position: '',
        description: '',
        registered_at: + new Date(),
        avatarImg: {
            url: 'uploads/',
            filename: 'default_user.png'   
        }
    });
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
    });
});

router.post('/changePassword', passport.authenticate('jwt', { session: false }), function(req, res, next) {
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
                User.updateUser(user, (err, user) => {
                    if (err) res.send(err);
                    if (user) {
                        return res.json({
                            success: true,
                            msg: "Password was changed successfully"
                        });
                    }
                });
            }
        })
    })
});

router.put('/user/:id', passport.authenticate('jwt', { session: false }), function(req, res, next) {
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
            user.description = updatedUser.description || user.description;

            User.updateUser(user, (err, updateUser) => {
                if (err) res.send(err);
                return res.json(updateUser);
            })
        }
    });
});

var uploadPath = '';
var storage = multer.diskStorage({
    destination: (req, file, next) => {
        next(null, uploadPath);
    },
    filename: (req, file, next) => {
        next(null, file.fieldname + "-" + req.headers['user-header'] + "-" + Date.now() + ".jpg")
    }
})

var upload = multer({storage: storage});

function checkUploadPath(req, res, next) {
    uploadPath = 'uploads/' + req.headers['user-header'];
    if(fs.existsSync(uploadPath)) {
        next();
    } else {
        fs.mkdir(uploadPath, (err) => {
            if (err) console.log("error when creating folder!")
            next();
        })
    }
}

router.post('/user/uploadProfileImage', 
            checkUploadPath,
            upload.single("file"),
            function(req, res, next) {
    if (req.file) {
        User.findUserById({"_id": req.headers['user-header']}, (err, user) => {
            if (user) {
                user.avatarImg.url = req.file.destination;
                user.avatarImg.filename = req.file.filename;
                User.updateUser(user, (err, updatedUser) => {
                    if (err) {
                        res.send(err);
                    }
                    if (updatedUser) {
                        res.json({imageSrc: updatedUser.avatarImg.url + '/' + updatedUser.avatarImg.filename})
                    }
                });
            }
        });
    }
});

router.post('/user/follow', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    const userId = req.body.userId;
    const followingUserId = req.body.followingUser;
    User.findUserAndUpdate({"_id": userId}, {$push: {"following": followingUserId}}, (err, user) => {
        if (err) res.send(err);
        if (user) {
            User.findUserAndUpdate({"_id": followingUserId}, {$push: {"followers": userId}}, (err, data) => {
                if (err) res.send(err);
                res.json(user);
            });
        }
    });
});

router.post('/user/unfollow', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    const userId = req.body.userId; 
    const followingUserId = req.body.followingUser;
    User.findUserAndUpdate({"_id": userId}, {$pull: {"following": followingUserId}}, (err, user) => {
        if (err) res.send(err);
        if (user) {
            User.findUserAndUpdate({"_id": followingUserId}, {$pull: {"followers": userId}}, (err, data) => {
                if (err) res.send(err);
                res.json(user);
            });
        }
    });
});

router.post('/user/subscribe', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    const subscribedEmail = req.body.userEmail;
    const subscriberId = req.body.subscriberId;
    const userId = req.body.userId;
    User.findUserAndUpdate({"_id": subscriberId}, {$push: {"subscribers": subscribedEmail}}, (err, data) => {
        if (err) res.send(err);
        if (data) {
            User.findUserAndUpdate({"_id": userId}, {$push: {"subscribedTo": subscriberId}}, (err, data) => {
                if (err) res.send(err);
                res.json(data);
            });
        }
    });
});

router.post('/user/unsubscribe', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    const subscribedEmail = req.body.userEmail;
    const subscriberId = req.body.subscriberId;
    const userId = req.body.userId;
    User.findUserAndUpdate({"_id": subscriberId}, {$pull: {"subscribers": subscribedEmail}}, (err, data) => {
        if (err) res.send(err);
        if (data) {
            User.findUserAndUpdate({"_id": userId}, {$pull: {"subscribedTo": subscriberId}}, (err, data) => {
                if (err) res.send(err);
                res.json(data);
            });
        }
    });
});

module.exports = router;
