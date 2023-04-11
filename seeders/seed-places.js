const db = require('../models')

db.Place.create([{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: '/images/ben-dutton-market-unsplash.jpg',
    author: `Ben Dutton`,
    attribute: `https://unsplash.com/@benjamiindutton?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText`,
    unsplash: `https://unsplash.com/s/photos/seattle?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText`,
    site: 'Unsplash',
    founded: 1989
    
  }, {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: '/images/rylan-hill-phoenix-unsplash.jpg',
    author: `Rylan Hill`,
    attribute: `https://unsplash.com/@rylanhill?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText`,
    unsplash: `https://unsplash.com/s/photos/phoenix?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText`,
    site: 'Unsplash',
    founded: 2020
  
  }]
)
.then(()=>{
    console.log('Successful')
    process.exit()
})
.catch(err=>{
    console.log('Failure')
    process.exit()
})