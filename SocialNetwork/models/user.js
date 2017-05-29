var mongoose = require('mongoose');
var bcrypt = require('bcryptjs'),
    SALT_WORK_FACTOR = 10;
var dbConfig = require('../config/db_config');

var UserSchema = mongoose.Schema({
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
});
var User = module.exports = mongoose.model("User", UserSchema);

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

module.exports.comparePassword = function(candidatePassword, actualPassword, cb) {
    bcrypt.compare(candidatePassword, actualPassword, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

module.exports.findAllUsers = function(callback) {
     User.find(callback);
}

module.exports.findUserById = function(id, callback) {
    User.findById(id, callback);
}

module.exports.findUserByName = function(username, callback) {
    var query = {username: username};
    User.findOne(query, callback);
}

module.exports.addNewUser = function(newUser, callback) {
    newUser = new User(newUser);
    newUser.save(callback);
}

module.exports.updateUser = function(user, callback) {
    updatedUser = new User(user);
    updatedUser.save(callback);
}