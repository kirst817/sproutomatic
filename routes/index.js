var express = require('express');
var router = express.Router();

var plants = require('../plant_data.js')
/* GET home page. */
router.get('/api', function(req, res, next) {
  res.json(plants);
});

module.exports = router;
