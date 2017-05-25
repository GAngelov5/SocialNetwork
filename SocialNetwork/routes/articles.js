var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

var Article = require('../models/article');

router.get('/', function(req, res, next) {
    Article.findAllArticles((err, articles) => {
        if (err) return console.error(err);
        res.json(articles);
    });
});

router.get('/article/:id', function(req, res, next) {
    Article.findArticleById({"_id": req.params.id}, (err, article) => {
        if (err) console.error(err);
        res.json(article);
    })
});

router.get('/userArticles/:id', function(req, res, next) {
    Article.findArticleByPublisherId(req.params.id, (err, articles) => {
        if(err) console.error(err);
        res.json(articles);
    })
});

router.post('/article', function(req, res, next) {
    var newArticle = new Article({
        title: req.body.title,
        publisher: req.body.publisher,
        published_at: + new Date(),
        content: req.body.content,
        vote: 0,
        category: req.body.category       
    });
    newArticle.save((err, article) => {
        if(err) res.sendStatus(404);
        res.json(article);
    })
});

router.put('/article', function(req, res, next) {
    console.log("vlizam li ?")
    var article = req.body;
    var updatedArticle = {};

    if (article.title) {
        updatedArticle.title = article.title;
    }
    if (article.content) {
        updatedArticle.content = article.content;
    }

    if (article.publisher) {
        updatedArticle.publisher = article.publisher;
    }
    console.log(updatedArticle.publisher);
    console.log(updatedArticle);
    console.log("ima li nekoi vkushti ?")
    Article.findOneAndUpdate({"_id": req.body._id}, {updatedArticle}, (err, article) =>{
        if (err) res.send(err);
        res.json(article);
    })
});

router.delete('/article/:id', function(req, res, next) {
    Article.findOneAndRemove({"_id": req.params.id}, (err, article) => {
        if (err) res.send(err);
        res.json(article);
    });
});

module.exports = router;