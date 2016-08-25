//Arduino index.js

var five = require("johnny-five");

var board = new five.Board();
board.on('ready', function(){
  console.log("Board ready, arduino connected");
  //sensor location(s)
  //ie. led = new five.Led(13); 
})

//setInterval() for receiving data

//function for first argument in setInterval

console.log("\nWaiting for device to connect ....");
