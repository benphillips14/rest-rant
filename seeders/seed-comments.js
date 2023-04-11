const db = require('../models')

// To use await, we need an async function.
async function seed() {
    let place = await db.Place.findOne({ name: 'H-Thai-ML' })

    let comment = await db.Comment.create({
        author: "Here",
        rant: false,
        star: 2,
        content: 'Is okay. Will not come back'
    })
    //This will add the comment to the place's array
    place.comments.push(comment.id)
    //This will save it
    await place.save()
    process.exit()
}

seed()