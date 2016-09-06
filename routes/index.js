require('dotenv').config()
var express = require('express');
var router = express.Router();

var knex = require('../db/knex.js');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var request = require('request');

var plants = require('../data/plant_data');
var dummydata = require('../data/dummy_grow_data');

// function insertData(data){
//   data.map(e => {
//     knex('growdata')
//     .insert(e)
//     .then(data => {
//       console.log(data);
//     })
//   })
//     // knex('growdata')
//     // .insert(data)
//     // .then(data => {
//     //   console.log(data);
//     // })
// }



function plantSensorData() {
    return knex('plantsensordata');
}

function plants() {
    return knex('plants');
}

//API 1 ---------------------------------------------
router.get('/api', function(req, res, next) {
    console.log("api route accessed");
    //gets the plant js file and returns as json file
    //data inserted into db as seed

    // plants()
    res.json(plants);
});

router.get()

// router.post('/api2', function(req, res, next) {
// //   // send request to sparkfun api
// //   // then knex(plantsensordata) insert results from sparkfun
// //   // then send data to front end
// //
//   request('https://data.sparkfun.com/output/NJXGOwpYV3SmAoGZMvWa.json', function(error, response, body) {
//     body.forEach(function(e){
//       knex('plantsensordata')
//       .insert(e)
//       .returning('id')
//       .then( function (result) {
//      console.log(result);
//      res.json(result)
//       })
//     })
//  })
// });

// router.post('/api2', function(req, res, next) {
//   body.forEach(function(e){
//    knex('plantsensordata')
//     .insert(e)
//     .then( function (body) {
//       console.log(body);
//       res.json(dummydata)
//       })
//   })
// })

// router.get('/api2', function(req, res, next){
//   console.log('api 2222 accessed');
//   res.json(dummydata);
// });



//API2 --------------------------------------------------------------------
//PLANT DATA from sparkfun ------------------
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


//DUMMY grow data ---------------------
// router.post('/api2', function(req, res, next) {

//   console.log("api2 data posted");
//   knex('plantsensordata').insert({
//     analogmoisture: analogmoisture,
//     digmoisture: digmoisture,
//     temperature: temperature,
//     humidity: humidity,
//     timestamp: timestamp
//   })
//      .returning('id');
//     .then( function (result) {
//       console.log(result);
//         //res.json({ success: true, message: 'ok' });     // respond back to request
      //res.json(dummydata);
//      })
//
// });



module.exports = router;
