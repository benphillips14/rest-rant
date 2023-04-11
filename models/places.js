const mongoose= require('mongoose')

const placesSchema = new mongoose.Schema({
  name: {type:String, required:true},
  city: {type:String, default:"AnyCity"},
  state: {type:String, default:"AnyState"},
  cuisines: {type:String, required:true},
  pic: {type: String, default:'http://placekitten.com/255/255'},
  attribute: String,
  author: String,
  unsplash: String,
  site: String,
  founded: {
    type: Number,
    min: [1500 , 'This is way too old'],
    max: [new Date().getFullYear(), 'This is in the future and not possible.']
  },
  comments:[{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}]
})

placesSchema.methods.showEstablished = function(){
  return `${this.name} has been serving ${this.city},${this.state} since it was founded in ${this.founded}`
}
module.exports= mongoose.model('Place', placesSchema)
// module.exports = [{
//     name: 'H-Thai-ML',
//     city: 'Seattle',
//     state: 'WA',
//     cuisines: 'Thai, Pan-Asian',
//     pic: '/images/ben-dutton-market-unsplash.jpg',
//     author: `Ben Dutton`,
//     attribute: `https://unsplash.com/@benjamiindutton?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText`,
//     unsplash: `https://unsplash.com/s/photos/seattle?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText`,
//     site: 'Unsplash'
//     //Photo by <a href="https://unsplash.com/@benjamiindutton?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ben Dutton</a> on <a href="https://unsplash.com/s/photos/seattle?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
//   }, {
//     name: 'Coding Cat Cafe',
//     city: 'Phoenix',
//     state: 'AZ',
//     cuisines: 'Coffee, Bakery',
//     pic: '/images/rylan-hill-phoenix-unsplash.jpg',
//     author: `Rylan Hill`,
//     attribute: `https://unsplash.com/@rylanhill?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText`,
//     unsplash: `https://unsplash.com/s/photos/phoenix?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText`,
//     site: 'Unsplash'
//     //Photo by <a href="https://unsplash.com/@rylanhill?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Rylan Hill</a> on <a href="https://unsplash.com/s/photos/phoenix?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
//   }]