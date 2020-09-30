const mongoose = require('mongoose');
const server = require('../server/app.js');
const request = require('supertest');

afterAll( async () => {
    await mongoose.connection.close();
});

describe('API endpoints response', function() {
    
    test('recieves and responds to get request to /product/15', async (done) => {
    return await request(server)
      .get('/product/15')
      .then(  (res) => {
          return res.body[0];
      })
      .then( (product) => {
          expect(product).toBeDefined();
          expect(product.id).toEqual(15);
          done();
      })
    });
});