var express = require('express');
var router = express.Router();
var Category = require('../models/category');
var passport = require('passport');

router.get('/', passport.authenticate('jwt', { session: false }), function(req, res, next) {
    Category.getCategories((err, data) => {
        if (err) res.send(err);
        res.json(data);
    });
});

router.get('/:id', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    Category.getCategoryById(req.params.id, (err, data) => {
        if (err) res.send(err);
        res.json(data);
    });
})

router.post('/category', passport.authenticate('jwt', { session: false }), function(req, res, next) {
    Category.addCategory(req.body, (err, data) => {
        if (err) res.send(err);
        if (data) {
            res.json(data);
        }
    });
});

module.exports = router;