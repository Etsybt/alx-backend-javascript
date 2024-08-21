const { expect } = require('chai');
const request = require('request');
const { server } = require('./api');

const serverUrl = 'http://localhost:7865';

describe('Index Page', () => {
  before((done) => {
    // Ensure the server is not already running
    if (server.listening) {
      return done();
    }
    server.listen(7865, done); // Start the server if it's not already running
  });

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

  after((done) => {
    server.close(done); // Close the server after the tests
  });
});
