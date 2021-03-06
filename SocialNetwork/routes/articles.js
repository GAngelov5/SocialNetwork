var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var passport = require('passport');

var Article = require('../models/article');
var Category = require('../models/category')

router.get('/', function(req, res, next) {
    Article.findAllArticles((err, articles) => {
        if (err) res.send(err);
        res.json(articles);
    });
});

router.get('/article/:id', passport.authenticate('jwt', { session: false }), function(req, res, next) {
    Article.findArticleById({"_id": req.params.id}, (err, article) => {
        if (err) res.sendStatus(404);
        res.json(article);
    })
});

router.get('/userArticles/:id', passport.authenticate('jwt', { session: false }), function(req, res, next) {
    Article.findArticleByPublisherId(req.params.id, (err, articles) => {
        if(err) console.error(err);
        res.json(articles);
    })
});

router.post('/article', passport.authenticate('jwt', { session: false }), function(req, res, next) {
    var newArticle = new Article({
        title: req.body.title,
        publisher: req.body.publisher,
        published_at: + new Date(),
        content: req.body.content,
        votes: [],
        category: req.body.category       
    });
    newArticle.save((err, article) => {
        if(err) {
            res.sendStatus(404);
        } 
        else {
            Category.updateCategoryByQuery({"_id": newArticle.category}, {$push: {"articles": article._id }}, (err, data) => {
                if (err) res.send(err);
                if (data) {
                   res.json(article); 
                }
            });
        }
        
    })
});

router.put('/article', passport.authenticate('jwt', { session: false }), function(req, res, next) {
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

    if (article.votes) {
        updatedArticle.votes = article.votes;
    }
    Article.findOneAndUpdate({"_id": req.body._id}, updatedArticle, (err, article) =>{
        if (err) res.send(err);
        res.json(article);
    })
});

router.delete('/article/:id', passport.authenticate('jwt', { session: false }), function(req, res, next) {
    Article.findOneAndRemove({"_id": req.params.id}, (err, article) => {
        if (err) res.send(err);
        res.json(article);
    });
});

module.exports = router;