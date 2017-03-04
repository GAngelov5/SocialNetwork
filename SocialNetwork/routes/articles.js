var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var jwt = require('jsonwebtoken');

var articleSchemaObj = {
    title: String,
    publisher: String,
    published_at: String,
    content: String,
    vote: Number,
    category: String
}

var ArticleSchema = mongoose.Schema(articleSchemaObj);
var Article = mongoose.model("Article", ArticleSchema);

router.get('/', function(req, res, next) {
    Article.find((err, articles) => {
        if (err) return console.error(err);
        res.json(articles);
    });
});

router.get('/article/:id', function(req, res, next) {
    Article.findOne({"_id": req.params.id}, (err, article) => {
        if (err) console.error(err);
        res.json(article);
    })
});

router.get('/userArticles/:id', function(req, res, next) {
    Article.find({"publisher": req.params.id}, (err, articles) => {
        if(err) console.error(err);
        res.json(articles);
    })
})

router.post('/article', function(req, res, next) {
    var newArticle = new Article({
        title: req.body.title,
        publisher: req.body.user,
        published_at: req.body.published_at,
        content: req.body.content,
        vote: req.body.vote,
        category: req.body.category       
    });
    newArticle.save((err, article) => {
        if(err) res.sendStatus(404);
        res.json(article);
    })
});

router.put('/article', function(req, res, next) {
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