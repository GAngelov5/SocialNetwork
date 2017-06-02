var mongoose = require('mongoose');

var CategorySchema = mongoose.Schema({
    name: {type: String, require: true},
    description: {type: String, require: true},
    articles: [{type: String, ref: 'Article'}]
});

var Category = module.exports = mongoose.model('Category', CategorySchema);

module.exports.getCategories = function(callback) {
    Category.find().exec(callback);
}

module.exports.getCategoryById = function(id, callback) {
    Category.findById(id).populate({
        path: 'articles',
        model: 'Article',
        populate: {
            path: 'category',
            model: 'Category'
        }
        }).exec(callback);
}

module.exports.getCategoryByName = function(name, callback) {
    Category.find({name: name}, callback);
}

module.exports.addCategory = function(category, callback) {
    let newCategory = new Category(category);
    newCategory.save(callback);
}

module.exports.updateCategoryByQuery = function(query, update, callback) {
    Category.findOneAndUpdate(query, update, {new: true}, callback);
}