//
// test/tests.js
//

var request = require('request')
var expect = require('chai').expect
var cheerio = require("cheerio");
var chai = require("chai");
var mocha = require("mocha");
var baseUrl = 'http://localhost:3000';

// DESCRIBE WHAT WE ARE TESTING
  // SAY WHAT BEHAVIOR 'IT' AUGHT TO HAVE
    // SEND THE REQUEST
      // USE CHAI-EXPECT TO EXPECT THE STATUS RESULT
      // CHECK FALSE VALUE TO SEE IF WE CAN MAKE TEST FAIL
      // CALL DONE();

//Test 1 - GET
describe('Catchphrasely', function() {
  it('should have a HTTP of 200 - success', function(done) {
    request(baseUrl+'/api/phrases', function(err, res, body) {
      expect(res.statusCode).to.equal(200)
      // expect(res.statusCode).to.equal(300)
      done();
    })
  })
});

//Test 2 - POST
describe('CatchPhrasely', function() {
  it('should have a HTTP of 200 - success', function(done) {
   // request('http://localhost:3000/api/phrases', function(err, res, body) {
    request.post(baseUrl+'/api/phrases/', function(err, res, body) {
      expect(res.statusCode).to.equal(200)

      // expect(res.statusCode).to.equal(300)
      done();
    })
  })
});

//Test 3 - PUT
describe('CatchPhrasely', function() {
  it('should have a HTTP of 200 - success', function(done) {
   // request('http://localhost:3000/api/phrases', function(err, res, body) {
    request.put(baseUrl+'/api/phrases/5', function(err, res, body) {
      expect(res.statusCode).to.equal(200)

      // expect(res.statusCode).to.equal(300)
      done();
    })
  })
});

//Test 4 - DELETE
describe('CatchPhrasely', function() {
  it('should have a HTTP of 200 - success', function(done) {
   // request('http://localhost:3000/api/phrases', function(err, res, body) {
    request.del(baseUrl+'/api/phrases/:id', function(err, res, body) {
      expect(res.statusCode).to.equal(200)

      // expect(res.statusCode).to.equal(300)
      done();
    })
  })
});

describe('Catchphrasely', function() {
  it('should have a title of "Catchphrasely"', function(done) {
    request(baseUrl, function(err, res, body) {
      var $ = cheerio.load(body);
      var title = $('title').text();
      expect(title).to.equal('Catchphrasely');
     // expect(title).to.equal('Matchphrasely');
      done();
    })
  })
});

describe('Catchphrasely', function() {
  it('should have a class called edit-pencil', function(done) {
    request(baseUrl, function(err, res, body) {
      var $ = cheerio.load(body);
    //  console.log(hello);
      $('.edit-pencil').hasClass('edit-pencil');

      done();
    })
  })
});



//=> true
