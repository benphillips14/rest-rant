//connect to the mongoose
const mongoose = require('mongoose')
//connect to dotenv
require('dotenv').config()
mongoose.connect(process.env.MONGO_URI,{
    //These are optional, but will remove messages in terminal?
    useNewUrlParser:true,
    useUnifiedTopology: true
})

//Needs to connect to the places.js
module.exports.Place =require('./places')
//Needs to connect to comment.js
module.exports.Comment = require('./comment')
