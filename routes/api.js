const router = require('express').Router();
const get = require('../controllers/get');
const post = require('../controllers/post');
const bodyParser = require('body-parser');
const errorHandling = require('../error/index');

router.get('/', (req, res) => res.status(200).send({status: 'OK'}));

router.get('/areas', get.areas);
router.get('/restaurants', get.restaurants);
router.get('/areas/:id/restaurants', get.restaurantsByArea);
router.get('/restaurants/:id/comments', get.comments);
router.get('/restaurants/:id/ratings', get.ratings);

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));

router.post('/areas', post.areas);
router.post('/areas/:id/restaurants', post.restaurant);
router.post('/restaurants/:id/comments', post.comment);
router.post('/restaurants/:id/ratings', post.rating);

router.use('*', (req, res) => res.status(404).send({reason: 'NOT FOUND'}));

router.use(errorHandling);

module.exports = router;