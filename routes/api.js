const router = require('express').Router();
const get = require('../controllers/get');

router.get('/', (req, res) => res.status(200).send({status: 'OK'}));

router.get('/areas', get.areas);

router.get('/restaurants', get.restaurants);

router.get('/areas/:id/restaurants', get.restaurantsByArea);

router.get('/restaurants/:id/comments', get.comments);

router.get('/restaurants/:id/ratings', get.ratings);

router.use('*', (req, res) => res.status(404).send({reason: 'NOT FOUND'}));

module.exports = router;