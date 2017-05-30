process.env.NODE_ENV = 'test';

const {expect} = require('chai');
const request = require('supertest');
const server = require('../server');

describe('BLANK API', () => {

  describe('GET /', () => {
    it('returns status 200', (done) => {
      request(server)
        .get('/api')
        .expect(200)
        .expect({status: 'OK'})
        .end((err) => {
          if (err) throw err;
          done();
        });
    });
  });

  describe('GET /NONSENSE', () => {
    it('handles un-existant routes', (done) => {
      request(server)
        .get('/api/nonsense')
        .expect(404)
        .expect({reason: 'NOT FOUND'})
        .end((err) => {
          if (err) throw err;
          done();
        });
    });
  });

  describe('GET /areas', () => {
    it('returns areas stored', (done) => {
      request(server)
        .get('/api/areas')
        .expect(200)
        .end((err, res) => {
          if (err) throw err;

          expect(res.body).to.haveOwnProperty('areas');
          expect(res.body.areas).to.be.an('array');
          expect(res.body.areas[0]).to.haveOwnProperty('id');
          expect(res.body.areas[0]).to.haveOwnProperty('name');
          done();
        });
    });
  });

  describe('GET /restaurants', () => {
    it('returns restaurants stored', (done) => {
      request(server)
        .get('/api/restaurants')
        .expect(200)
        .end((err, res) => {
          if (err) throw err;

          expect(res.body).to.haveOwnProperty('restaurants');
          expect(res.body.restaurants).to.be.an('array');
          expect(res.body.restaurants[0]).to.haveOwnProperty('id');
          expect(res.body.restaurants[0]).to.haveOwnProperty('name');
          expect(res.body.restaurants[0]).to.haveOwnProperty('area_id');
          expect(res.body.restaurants[0]).to.haveOwnProperty('cuisine');
          expect(res.body.restaurants[0]).to.haveOwnProperty('website');
          done();
        });
    });
  });

  describe('GET /areas/:area_id/restaurants', () => {
    it('returns restaurants stored in a particular area', (done) => {
      request(server)
        .get('/api/areas/1/restaurants')
        .expect(200)
        .end((err, res) => {
          if (err) throw err;

          expect(res.body).to.haveOwnProperty('restaurants');
          expect(res.body.restaurants).to.be.an('array');
          expect(res.body.restaurants[0]).to.haveOwnProperty('id');
          expect(res.body.restaurants[0]).to.haveOwnProperty('name');
          expect(res.body.restaurants[0]).to.haveOwnProperty('area_id');
          expect(res.body.restaurants[0]).to.haveOwnProperty('cuisine');
          expect(res.body.restaurants[0]).to.haveOwnProperty('website');
          done();
        });
    });
  });

  describe('GET /restaurants/:restaurant_id/comments', () => {
    it('returns comments stored for a restaurant', (done) => {
      request(server)
        .get('/api/restaurants/1/comments')
        .expect(200)
        .end((err, res) => {
          if (err) throw err;

          expect(res.body).to.haveOwnProperty('comments');
          expect(res.body.comments).to.be.an('array');
          expect(res.body.comments[0]).to.haveOwnProperty('id');
          expect(res.body.comments[0]).to.haveOwnProperty('restaurant_id');
          expect(res.body.comments[0]).to.haveOwnProperty('body');
          expect(res.body.comments[0]).to.haveOwnProperty('created_at');
          done();
        });
    });
  });

  describe('GET /restaurants/:restaurant_id/ratings', () => {
    it('returns ratings stored for a restaurant', (done) => {
      request(server)
        .get('/api/restaurants/1/ratings')
        .expect(200)
        .end((err, res) => {
          if (err) throw err;

          expect(res.body).to.haveOwnProperty('ratings');
          expect(res.body.ratings).to.be.an('array');
          expect(res.body.ratings[0]).to.haveOwnProperty('id');
          expect(res.body.ratings[0]).to.haveOwnProperty('restaurant_id');
          expect(res.body.ratings[0]).to.haveOwnProperty('rating');
          expect(res.body.ratings[0]).to.haveOwnProperty('created_at');
          done();
        });
    });
  });

  describe('POST /areas', () => {
    it('posts a new area and returns the created entity', (done) => {
      const newArea = {name: 'didsbury'};
      
      request(server)
        .post('/api/areas')
        .send(newArea)
        .expect(201)
        .end((err, res) => {
          if (err) throw err;

          expect(res.body).to.haveOwnProperty('area');
          expect(res.body.area).to.haveOwnProperty('id');
          expect(res.body.area).to.haveOwnProperty('name');
          expect(res.body.area.name).to.equal(newArea.name);
          done();
        });
    });
  });

  describe('POST /areas/:area_id/restaurants', () => {
    it('posts a new restaurant and returns the created entity', (done) => {
      const area = 1;
      const newRestaurant = {
        name: 'dummy',
        cuisine: 'cuisine',
        website: 'website'
      };

      request(server)
        .post(`/api/areas/${area}/restaurants`)
        .send(newRestaurant)
        .expect(201)
        .end((err, res) => {
          if (err) throw err;

          expect(res.body).to.haveOwnProperty('restaurant');
          expect(res.body.restaurant).to.haveOwnProperty('id');
          expect(res.body.restaurant).to.haveOwnProperty('name');
          expect(res.body.restaurant.name).to.equal(newRestaurant.name);
          expect(res.body.restaurant).to.haveOwnProperty('area_id');
          expect(res.body.restaurant.area_id).to.equal(area);
          expect(res.body.restaurant).to.haveOwnProperty('cuisine');
          expect(res.body.restaurant.cuisine).to.equal(newRestaurant.cuisine);
          expect(res.body.restaurant).to.haveOwnProperty('website');
          expect(res.body.restaurant.website).to.equal(newRestaurant.website);
          done();
        });
    });
  });

  describe('POST /restaurants/:restaurant_id/comments', () => {
    it('posts a new comment and returns the created entity', (done) => {
      const newComment = {body: 'awesome'};
      const restaurant_id = 1;

      request(server)
        .post(`/api/restaurants/${restaurant_id}/comments`)
        .send(newComment)
        .expect(201)
        .end((err, res) => {
          if (err) throw err;

          expect(res.body).to.haveOwnProperty('comment');
          expect(res.body.comment).to.haveOwnProperty('id');
          expect(res.body.comment).to.haveOwnProperty('body');
          expect(res.body.comment.body).to.equal(newComment.body);
          expect(res.body.comment).to.haveOwnProperty('restaurant_id');
          expect(res.body.comment.restaurant_id).to.equal(restaurant_id);
          expect(res.body.comment).to.haveOwnProperty('created_at');
          done();
        });
    });
  });

});