const { expect } = require('chai');
const request = require('request');

const serverUrl = 'http://localhost:7865';

describe('Index Page', () => {
  it('should return status code 200', (done) => {
    request.get(serverUrl, (error, response) => {
      if (error) {
        return done(error);
      }
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return the correct message', (done) => {
    request.get(serverUrl, (error, response, body) => {
      if (error) {
        return done(error);
      }
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});

describe('Cart Page', () => {
  it('should return status code 200 when :id is a number', (done) => {
    request.get(`${serverUrl}/cart/123`, (error, response) => {
      if (error) {
        return done(error);
      }
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return the correct message when :id is a number', (done) => {
    request.get(`${serverUrl}/cart/123`, (error, response, body) => {
      if (error) {
        return done(error);
      }
      expect(body).to.equal('Payment methods for cart 123');
      done();
    });
  });

  it('should return status code 404 when :id is NOT a number', (done) => {
    request.get(`${serverUrl}/cart/abc`, (error, response) => {
      if (error) {
        return done(error);
      }
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
});
