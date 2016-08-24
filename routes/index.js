var express = require('express');
var router = express.Router();
var plants = require('../plant_data')

router.get('/api', function(req, res, next) {
  console.log("api route accessed");
  res.json(plants);
});

// exports.servePlants = function(req, res, next) {
//   res.json(plants.data);
// };

module.exports = router;
