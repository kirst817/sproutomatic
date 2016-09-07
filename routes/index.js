require('dotenv').config()
var express = require('express');
var router = express.Router();

var knex = require('../db/knex.js');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var request = require('request');

var plants = require('../data/plant_data');
var dummydata = require('../data/dummy_grow_data');


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
    res.json(plants);
});

router.get('/growinfoapi', function(req, res, next) {
    knex
    .select('*')
    .from('plants')
    .then(function(plantinfo) {
        console.log(plantinfo);
        res.json(plantinfo);
    })
    //gets the plant js file and returns as json file
    //data inserted into db as seed
});


//API2 --------------------------------------------------------------------
//PLANT DATA from sparkfun ------------------
//uncomment when hooked up!!!
router.get('/api2', function(req, res, next) {

    console.log("api2 reached, request is next");
    request('https://data.sparkfun.com/output/NJXGOwpYV3SmAoGZMvWa.json', function(error, response, body) {
        objectBody = JSON.parse(body, function(k, v) {
            return (typeof v === "object" || isNaN(v)) ? v : parseInt(v, 10);
        });

        // if(da)
        //check for repeat data
        knex('plantsensordata')
            .insert(objectBody)
            .then(function(result) {
                console.log(result);
            })
        console.log(objectBody);

        if (!error && response.statusCode == 200) {
            res.json(body);
        }
    })
});


//DUMMY grow data ---------------------

router.get('/dummyapi2', function(req, res, next) {
    // seeded if needed in database
    console.log('api 2222 accessed');
    res.json(dummydata);
});



module.exports = router;
