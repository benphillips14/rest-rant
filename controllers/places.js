
const router = require('express').Router()

router.get('/', (req, res) => {
    res.send('GET /places')
})

module.exports = router

git add .
git commit -m "Adding places controller"
git push origin main
