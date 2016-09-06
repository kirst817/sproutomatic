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



// router.get('/dashboard', function(req, res, next) {
// //   // access plant growing conditions and plant sensor data based on veggie in garen
// //   // compare levels
// //   // then send data to front end
// /
//          knex
//           .select('plants.name', '')
//           .from('plants')
//           .leftOuterJoin('plantsensordata', function () {
//           .where(plantsensordata.analogmoisture >= waterRequirementsMax OR plantsensordata.analogmoisture <= waterRequirementsMin)
//           .then( function (result) {
//             console.log(result);
//         })
//         if (!error && response.statusCode == 200) {
//           res.json(result);
//         }
// })






//API2 --------------------------------------------------------------------
//PLANT DATA from sparkfun ------------------
//uncomment when hooked up!!!
// router.get('/api2', function(req, res, next) {
//
//   console.log("api2 reached, request is next");
//   request('https://data.sparkfun.com/output/NJXGOwpYV3SmAoGZMvWa.json', function (error, response, body) {
//      objectBody = JSON.parse(body, function(k, v) {
//     return (typeof v === "object" || isNaN(v)) ? v : parseInt(v, 10);
// });
//
// //check for repeat data
//     knex('plantsensordata')
//     .insert(objectBody)
//     .then( function (result) {
//       console.log(result);
//     })
//      console.log(objectBody);
//
//     if (!error && response.statusCode == 200) {
//       res.json(body);
//     }
//   })
// });


//DUMMY grow data ---------------------

router.get('/dummyapi2', function(req, res, next){
// seeded if needed in database
  console.log('api 2222 accessed');
  res.json(dummydata);
});



module.exports = router;
