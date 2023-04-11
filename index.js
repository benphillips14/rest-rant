
const express = require('express')
require(`dotenv`).config()

const app = express()
const methodOverride = require('method-override')

const mongoose = require('mongoose')
mongoose.set('strictQuery', true)

//JSX 
//app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())


//To refer to the public
app.use(express.static('public'))

app.use(express.urlencoded({ extended: true }))

app.use(methodOverride('_method'))

app.use('/places', require('./controllers/places'))


app.get('/', (req, res)=>{
    //Will render home.jsx
    res.render('home')
    //res.send('This is the first page')
})


//Use this to get any page that doesn't reach any path
app.get('*',(req,res)=>{
    //res.status(404).send("<h1>THIS IS A 404</h1>")
    //This render will grab 404.jsx
    res.render('error404')
})

app.listen(process.env.PORT)







  