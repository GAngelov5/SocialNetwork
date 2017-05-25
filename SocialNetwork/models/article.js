var mongoose = require('mongoose');

var ArticleSchema = mongoose.Schema({
    title: String,
    publisher: String,
    published_at: String,
    content: String,
    vote: Number,
    category: String
});

var Article = module.exports = mongoose.model("Article", ArticleSchema);

module.exports.findAllArticles = function(callback) {
     Article.find(callback);
}

module.exports.findArticleById = function(id, callback) {
    Article.findById(id, callback);
}

module.exports.findArticleByPublisherId = function(publisherId, callback) {
    var query = {publisher: publisherId};
    Article.find(query, callback);
}