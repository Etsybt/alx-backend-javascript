const request = require('supertest');
const app = require('./api');

describe('Index Page', () => {
  it('should return status code 200', (done) => {
    request(app)
      .get('/')
      .expect(200, done);
  });

  it('should return the correct message', (done) => {
    request(app)
      .get('/')
      .expect('Welcome to the payment system', done);
  });
});

describe('Cart Page', () => {
  it('should return status code 200 when id is a number', (done) => {
    request(app)
      .get('/cart/12')
      .expect(200, done);
  });

  it('should return the correct message when id is a number', (done) => {
    request(app)
      .get('/cart/12')
      .expect('Payment methods for cart 12', done);
  });

  it('should return status code 404 when id is not a number', (done) => {
    request(app)
      .get('/cart/hello')
      .expect(404, done);
  });
});
