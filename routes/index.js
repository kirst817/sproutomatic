require('dotenv').config()
var express = require('express');
var router = express.Router();

var knex = require('../db/knex.js');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var request = require('request');

var plants = require('../data/plant_data');
var growdata = require('../data/dummy_grow_data');

//plant grow maintenence levels
router.get('/api', function(req, res, next) {
  console.log("api route accessed");
  //gets the plant js file and returns as json file

  knex('plants')
  res.json(plants);
});

//dummy grow data
router.get('/api2', function(req, res, next) {
  console.log("api2 route accessed");

  res.json(growdata);
});

//PLANT DATA from sparkfun
//uncomment when hooked up!!!
// router.get('/api2', function(req, res, next) {
//
//   console.log("api2 reached, request is next");
//   request('https://data.sparkfun.com/output/NJXGOwpYV3SmAoGZMvWa.json', function (error, response, body) {
//     if (!error && response.statusCode == 200) {

//       res.json(body);
//     }
//   })
// });


module.exports = router;
