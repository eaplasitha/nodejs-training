var request = require('supertest');
var express = require('express');
var path = require('path');

var routes = require('../routes/student');

var app = express();

app.use('/student', routes);

// view engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'jade');




describe('Testing http://localhost:3000/tudent/age?id=1001 request when application running.', function () {

  it('should return 200 on /', function (done) {

    request('http://localhost:3000')
      .get('/student/age?id=1001')
      .expect(200)
      .expect('Student Age : 30')
      .end(function(err, res){
        if (err) return done(err)
        done()
      })
  })

})




describe('Testing http://localhost:3000/student/age?id=1001 request when application not running.', function () {

  it('should return 200 on /student/age?id=1001', function (done) {

    request(app)
      .get('/student/age?id=1001')
      .expect(200)
      .end(function(err, res){
        if (err) return done(err)
        done()
      })

  })

})