require('dotenv').config()
var express = require('express');
var router = express.Router();

var knex = require('../db/knex.js');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var request = require('request');

//SIGNUP
router.post('/users/signup', function(req, res, next) {

 //valid.register

  var email = req.body.email;
  var password = bcrypt.hashSync(user.password, 10);

  knex('users')
    .where({email})
    .first()
    .then(function (result) {
      if (result.count == "0") {
        knex('users')
        .insert({email: email, password: password})
        .returning('*')
        .then(function(users){
          var regUser = users[0];
          var token = jwt.sign({ id: regUser.id }, process.env.JWT_SECRET )

          res.json({
            id: regUser.id,
            email: email,
            token: token
          })
        })
      } else {
        res.status(422).send({
          error: "Email already in use!"
        })
      }
    })
});

router.post('/users/login', function(req, res, next) {
  //router.post
  //valid.login

    var email = req.body.email;
    var password = user.password;
    knex('users')
      .where({email: email})
      .first()
      .then(function (user) {
        if (!user) {
          res.status(422).send({
            error: "Invalid email or password"
          })
        }
        else if(!bcrypt.compareSync(password, user.password)) {
            res.status(422).send({ error: 'Invalid email or password' });
        }
        else {
          var token = jwt.sign({ id: user.id }, process.env.JWT_SECRET )

          res.json({
            id: user.id,
            email: email,
            token: token
          })
        }
      })
});

module.exports = router;
