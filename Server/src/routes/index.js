const { login } = require('../controllers/login')
const { getCharById } = require('../controllers/getCharById')
const { postFav, getFav, deleteFav } = require('../controllers/handleFavorites')

const router = require('express').Router();

router.get('/character/:id', (req, res) => {
    getCharById(req, res);
})

router.get("/login", (req, res) => {
    login(req, res);
})

router.post("/addFav", (req, res) => {
    postFav(req, res);
})
router.get("/fav", getFav)

router.delete("/fav/:id", (req, res) => {
    deleteFav(req, res);
})

module.exports = router;