require('dotenv').config()
var express = require('express');
var router = express.Router();

var knex = require('../db/knex.js');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var request = require('request');

var plants = require('../plant_data');
var growdata = require('../dummy_grow_data');

//plant grow maintenence levels
router.get('/api', function(req, res, next) {
  console.log("api route accessed");
  //gets the plant js file and returns as json file
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

//SIGNUP
// router.post('/users/signup', function(req, res, next) {
//
//  //valid.register
//
//   var user = req.body.user;
//   var email = user.email;
//   var password = bcrypt.hashSync(user.password, 10);
//
//   knex('users')
//     .whereRaw('lower(email) = ?', user.email.toLowerCase())
//     .count()
//     .first()
//     .then(function (result) {
//       if (result.count == "0") {
//         knex('users').insert({email, password})
//         .returning('*')
//         .then(function(users){
//           var regUser = users[0];
//           var token = jwt.sign({ id: regUser.id }, process.env.JWT_SECRET )
//
//           res.json({
//             id: regUser.id,
//             email: email,
//             token: token
//           })
//         })
//       } else {
//         res.status(422).send({
//           error: "Email already in use!"
//         })
//       }
//     })
// });

// router.post('/users/login', function(req, res, next) {
//   //router.post
//   //valid.login
//
//     var user = req.body.user;
//     var email = user.email;
//     var password = user.password;
//     knex('users')
//       .whereRaw('lower(email) = ?', user.email.toLowerCase())
//       .first()
//       .then(function (result) {
//         if (!result) {
//           res.status(422).send({
//             error: "Invalid email or password"
//           })
//         }
//         else if(!bcrypt.compareSync(password, result.password)) {
//             res.status(422).send({ error: 'Invalid email or password' });
//         }
//         else {
//           var token = jwt.sign({ id: result.id }, process.env.JWT_SECRET )
//
//           res.json({
//             id: result.id,
//             email: email,
//             token: token
//           })
//         }
//       })
// });

module.exports = router;
