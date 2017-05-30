const db = require('../DB/db');
const sql = require('../sql/queries');

exports.areas = (req, res, next) => {
  db.one(sql.areas.add, [req.body.name])
    .then(area => res.status(201).send({area: area}))
    .catch(err => next(err));
};

exports.restaurant = (req, res, next) => {
  db.one(sql.restaurants.add, [req.body.name, req.params.id, req.body.cuisine, req.body.website])
    .then(restaurant => res.status(201).send({restaurant: restaurant}))
    .catch(err => next(err));
};

exports.comment = (req, res, next) => {
  db.one(sql.comments.add, [req.params.id, req.body.body])
    .then(comment => res.status(201).send({comment: comment}))
    .catch(err => next(err));
};

exports.rating = (req, res, next) => {
  db.one(sql.ratings.add, [req.params.id, req.body.rating])
    .then(rating => res.status(201).send({rating: rating}))
    .catch(err => next(err));
};