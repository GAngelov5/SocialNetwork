var mongoose = require('mongoose');

var CategorySchema = mongoose.Schema({
    name: {type: String, require: true},
    description: {type: String, require: true},
    articles: [{type: String, ref: 'Article'}]
})