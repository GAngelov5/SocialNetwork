var mongoose = require('mongoose');

var ArticleSchema = mongoose.Schema({
    title: String,
    publisher: {type: String, ref: 'User'},
    published_at: String,
    content: String,
    votes: Array,
    category: {type: String, ref: 'Category'}
});

var Article = module.exports = mongoose.model("Article", ArticleSchema);

module.exports.findAllArticles = function(callback) {
     Article.find().populate('category').exec(callback);
}

module.exports.findArticleById = function(id, callback) {
    Article.findById(id)
        .populate('publisher')
        .populate('category')
        .exec(callback);
}

module.exports.findArticlesByCategory = function(categoryId, callback) {
    Article.find({category: categoryId}, callback);
}

module.exports.findArticleByPublisherId = function(publisherId, callback) {
    var query = {publisher: publisherId};
    Article.find(query).populate('category').exec(callback);
}