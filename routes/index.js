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

function plantData() {
    return knex('plantData');
}

function plants() {
    return knex('plants');
}

router.get('/api', function(req, res, next) {
    console.log("api route accessed");
    //gets the plant js file and returns as json file

    // plants()
    res.json(plants);
});

//dummy grow data
//original ------
router.get('/api2', function(req, res, next) {
  console.log("api2 route accessed");
  res.json(growdata);
});
//-------original ------

// router.get('/api2', function(req, res, next) {
//     console.log("api2 route accessed");
//     plantData()
//         .where('logged_at', date)
//         .first()
//         .then(function(peak) {
//             if (growdata) {
//                 res.json(growdata)
//             } else {
//                 request('https://data.sparkfun.com/output/NJXGOwpYV3SmAoGZMvWa.json', function(error, response, body) {
//                     if (!error && response.statusCode == 200) {
//                         var growdata = {};
//                         // growdata.logged_at = date;
//                         // growdata.sunlight = sunlight;
//                         growdata.moisture = analogmoisture;
//                         growdata.temperature = temperature;
//                         growdata.humidity = humidity;
//                         for (var i = 0; i < growdata.length; i++) {
//                             plantData()
//                               .insert(growdata)
//                               .then(function() {
//                                     res.json(growdata);
//                                 })
//                         }
//                     }
//                 })
//             }
//         })
// });


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
