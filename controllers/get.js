const db = require('../DB/db');
const sql = require('../sql/queries');

exports.areas = (req, res, next) => {
  db.any(sql.areas.get)
    .then(areas => res.status(200).send({areas: areas}))
    .catch(err => next(err));
};

exports.restaurants = (req, res, next) => {
  db.any(sql.restaurants.get)
    .then(restaurants => res.status(200).send({restaurants: restaurants}))
    .catch(err => next(err));
};

exports.restaurantsByArea = (req, res, next) => {
  db.any(sql.restaurants.getByArea, req.params.id)
    .then(restaurants => res.status(200).send({restaurants: restaurants}))
    .catch(err => next(err));
};

exports.comments = (req, res, next) => {
  db.any(sql.comments.get, req.params.id)
    .then(comments => res.status(200).send({comments: comments}))
    .catch(err => next(err));
};

exports.ratings = (req, res, next) => {
  db.any(sql.ratings.get, req.params.id)
    .then(ratings => res.status(200).send({ratings: ratings}))
    .catch(err => next(err));
};