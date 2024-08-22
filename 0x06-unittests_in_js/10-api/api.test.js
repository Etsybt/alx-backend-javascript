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

describe('/available_payments', () => {
  it('should return status code 200 and the correct object', (done) => {
    request.get(`${serverUrl}/available_payments`, (error, response, body) => {
      if (error) {
        return done(error);
      }
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal(JSON.stringify({
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      }));
      done();
    });
  });
});

describe('/login', () => {
  it('should return status code 200 and the correct welcome message', (done) => {
    request.post({
      url: `${serverUrl}/login`,
      body: JSON.stringify({ userName: 'Betty' }),
      headers: {
        'Content-Type': 'application/json'
      }
    }, (error, response, body) => {
      if (error) {
        return done(error);
      }
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome Betty');
      done();
    });
  });

  it('should return status code 400 if userName is missing', (done) => {
    request.post({
      url: `${serverUrl}/login`,
      body: JSON.stringify({}),
      headers: {
        'Content-Type': 'application/json'
      }
    }, (error, response, body) => {
      if (error) {
        return done(error);
      }
      expect(response.statusCode).to.equal(400);
      expect(body).to.equal('Username is required');
      done();
    });
  });
});
