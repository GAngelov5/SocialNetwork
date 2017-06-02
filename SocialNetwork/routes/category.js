var express = require('express');
var router = express.Router();
var Category = require('../models/category');

router.get('/', function(req, res, next) {
    Category.getCategories((err, data) => {
        if (err) res.send(err);
        res.json(data);
    });
});

router.get('/:id', (req, res, next) => {
    Category.getCategoryById(req.params.id, (err, data) => {
        if (err) res.send(err);
        res.json(data);
    });
})

router.post('/category', function(req, res, next) {
    Category.addCategory(req.body, (err, data) => {
        if (err) res.send(err);
        res.json(data);
    });
});

module.exports = router;