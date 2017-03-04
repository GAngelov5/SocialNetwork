var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt'),
    SALT_WORK_FACTOR = 10;
var jwt = require('jsonwebtoken');

var userSchemaObj = {
    firstName: String,
    lastName: String,
    username: String,
    phone: Number,
    address: String,
    company: String,
    position: String,
    email: String,
    password: String,
    description: String,
    following: Array,
    messages: Array
}

var UserSchema = mongoose.Schema(userSchemaObj);

UserSchema.pre('save', function(next) {
    var user = this;
    if (!user.isModified('password')) return next();
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if (err) return next(err);
        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);
            user.password = hash;
            next();
        });
    });
});

UserSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

var User = mongoose.model("User", UserSchema);

router.get('/', function(req, res, next) {
    User.find((err, users) => {
        if (err) return console.error(err);
        res.json(users);
    });
});

router.get('/user/:id', function(req, res, next) {
    User.findOne({"_id": req.params.id}, (err, user) => {
        if (err) console.error(err);
        res.json(user);
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
        messages: [],
        phone: '',
        address: '',
        company: '',
        position: '',
        description: '',
    });
    newUser.save((err, user) => {
        if(err) res.sendStatus(404);
        res.json(user);
    })
});

router.post('/authenticate', function(req, res, next) {
    User.findOne({"username": req.body.username}, (err, user) => {
        if (err) {
            console.log("Can't find user with this username");
            res.sendStatus(404);    
        }
        if (user) {
            user.comparePassword(req.body.password, (err, isMatch) => {
                if (err) {
                    console.log("Passwords doesn't match")
                    res.sendStatus(404);
                }
                if (isMatch) {
                    var token = jwt.sign(user, "secretOfTheSecrets",
                        { expiresIn: 240});
                    res.json({
                        userId: user._id,
                        sucess: isMatch,
                        token: token
                    });
                }
            })
        } else {
            res.json({
                success: "false"
            });
        }
    })
});

router.put('/user/:id', function(req, res, next) {
    
    var user = req.body;
    var updatedUser = {};

    if (user.firstName) {
        updatedUser.firstName = user.firstName;
    }
    if (user.lastName) {
        updatedUser.lastName = user.lastName;
    }
    if (user.phone) {
        updatedUser.phone = user.phone;
    }
    if (user.address) {
        updatedUser.address = user.address;
    }
    if (user.company) {
        updatedUser.company = user.company;
    }
    if (user.position) {
        updatedUser.position = user.position;
    }
    if (user.biography) {
        updatedUser.description = user.biography;
    }
    if (user.following) {
        updatedUser.following = user.following;
    }
    if (user.oldPassword && user.newPassword) {
        user.comparePassword(user.oldPassword, (err, isMatch) => {
            if (err) res.sendStatus(404);
            if (isMatch) {
                updatedUser.password = user.newPassword;
            }
        })
    }
    console.log(req.body._id)
    console.log(updatedUser);
    User.findOneAndUpdate({"_id": req.body._id}, updatedUser, {new: true}, (err, user) =>{
        if (err) res.send(err);
        res.json(user);
    })
});

module.exports = router;