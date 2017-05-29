const db = require('../DB/db');

exports.areas = (req, res, next) => {
  db.query('SELECT * FROM areas')
    .then(areas => res.status(200).send({areas: areas}))
    .catch(err => next(err));
};

exports.restaurants = (req, res, next) => {
  db.query('SELECT * FROM restaurants')
    .then(restaurants => res.status(200).send({restaurants: restaurants}))
    .catch(err => next(err));
};

exports.restaurantsByArea = (req, res, next) => {
  db.query(`SELECT * FROM restaurants WHERE area_id=${req.params.id}`)
    .then(restaurants => res.status(200).send({restaurants: restaurants}))
    .catch(err => next(err));
};

exports.comments = (req, res, next) => {
  db.query(`SELECT * FROM comments WHERE restaurant_id=${req.params.id}`)
    .then(comments => res.status(200).send({comments: comments}))
    .catch(err => next(err));
};

exports.ratings = (req, res, next) => {
  db.query(`SELECT * FROM ratings WHERE restaurant_id=${req.params.id}`)
    .then(ratings => res.status(200).send({ratings: ratings}))
    .catch(err => next(err));
};