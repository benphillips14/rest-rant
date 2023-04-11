const mongoose = require('mongoose')

let commentSchema = new mongoose.Schema({
    author: {type: String, default: 'Nobody'},
    content: {type: String, default: 'Nothing'},
    star: {type: Number, required: true},
    rant: {type: Boolean, default: false}
    
})

module.exports = mongoose.model('Comment', commentSchema)
