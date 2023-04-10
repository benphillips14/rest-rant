const router = require('express').Router()
// const places = require('../models/places')
// Instead of using places, db will refer to the folder models
const db = require('../models')

router.post('/', (req, res)=>{
  db.Place.create(req.body)
  .then(()=>{
    res.redirect('/places')
  })
  .catch(err=>{
    if (err && err.name == 'ValidationError'){
      let message = 'Validation Error: '
      for (var field in err.errors){
        message+= `${field} was ${err.errors[field].value}.`
        message+= ` ${err.errors[field].message}`
      }
      res.render('places/newpage', {message})

    }
    else{
      res.render('404')
    }
    
  })
  // //console.log(req.body)
  
  // if (!req.body.pic) {
  //   // Default image if one is not provided
  //   req.body.pic = 'http://placekitten.com/400/400'
  //   req.body.author = 'Placekitten'
  //   req.body.attribute = 'https://placekitten.com'
  //   req.body.unsplash = req.body.pic
  //   req.body.site = 'Placekitten'
  // }
  // if (!req.body.city) {
  //   req.body.city = 'Anytown'
  // }
  // if (!req.body.state) {
  //   req.body.state = 'USA'
  // }

  // //Push into places
  // places.push(req.body)
  
  // res.redirect('/places')
})

router.get('/new', (req, res)=>{
  res.render('places/newpage')
})


router.get('/', (req, res)=>{
    //res.send('GET /places')
    //placeholder information copied over.
    
    // res.render('places/index', {places})
    db.Place.find()
    .then((places)=>{
      res.render('places/index', {places})
    })
    .catch(err=>{
      console.log(err)
      res.render('404')
    })
})
router.get('/:id', (req, res) => {
  db.Place.findById(req.params.id)
  .populate('comments')
  .then(place=>{
    console.log(place.comments)
    res.render('places/show', {place})
  })
  .catch(err=>{
    res.render('404')
  })
  //id has to be definied
  // let id = Number(req.params.id)
  
  // // This is for when the number of id isnt a number
  // if (isNaN(id)){
  //   res.render('404')
  // }
  // //This statement is if the id isn't there
  // else if(!places[id]){
  //   res.render('404')
  // }
  // else{
  //   res.render('places/show', {place: places[id]})
  // }
  
})

router.put('/:id', (req, res) => {
  
  db.Place.findByIdAndUpdate(req.params.id, req.body)
    .then(()=>{
      res.redirect(`/places/${req.params.id}`)
    })
    .catch(err=>{
      res.render('404')
    })
  // let id = Number(req.params.id)
  // if (isNaN(id)) {
  //     res.render('404')
  // }
  // else if (!places[id]) {
  //     res.render('404')
  // }
  // else {
  //     if(!req.body.pic){
  //       //Default picture needs to be placeholder 
  //       req.body.pic = 'http://placekitten/300/300'
  //     }
  //     if(!req.body.city){
  //       req.body.city = 'Anycity'
  //     }
  //     if(!req.body.state){
  //       req.body.state='USA'
  //     }

  //     places[id] = req.body
  //     res.redirect(`/places/${id}`)
  // }
})

// This is the edit.jsx
router.get('/:id/edit', (req, res) => {
  db.Place.findById(req.params.id)
    .then(place =>{
      res.render('places/edit', {place})
    })
    .catch(err=>{
      res.render('404')
    })
  // let id = Number(req.params.id)
  // if(isNaN(id)){
  //   res.render('404')
  // }
  // else if (!places[id]){
  //   res.render('places/edit')
  // }
  // else{
  //   res.render('places/edit', {place: places[id]})
  // }
})
router.post('/:id/comment', (req, res)=>{
  console.log(req.body)
  req.body.rant = req.body.rant ? true : false

  db.Place.findById(req.params.id)
  .then(place=>{
    db.Comment.create(req.body)
    .then(comment=>{
      place.comments.push(comment.id)
      place.save()
      .then(()=>{
        res.redirect(`/places/${req.params.id}`)
      })
      .catch(err=>{
        res.render('404')
      })
    })
  })
  .catch(err=>{
    res.render('404')
  })
})
router.delete('/:id/', (req, res)=>{
  db.Place.findByIdAndDelete(req.params.id)
  .then(()=>{
    res.redirect('/places')
  })
  .catch(err=>{
    res.render('404')
  })
})

// router.get('places/:id',(req,res)=>{
//   res.send('Placeholder for details')
// })

module.exports = router
  