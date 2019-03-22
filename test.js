/var five = require("johnny-five"),
    board = new five.Board();

board.on("ready", function() {
  // Create an Led on pin 13
  var led = new five.Led(13);
  var ledTest = new five.Led(9);

  // Strobe the pin on/off, defaults to 100ms phases
  led.blink(500);
  ledTest.blink(1000);
});/

var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
    var led = new five.Led(13);
    var ledTest = new five.Led(11);

  var motion = new five.Motion(7);

  motion.on("calibrated", function() {
    console.log("calibrated");
  });

  motion.on("motionstart", function() {
    console.log("motionstart");
    led.on();
    ledTest.off();
  });

  motion.on("motionend", function() {
    console.log("motionend");
    ledTest.on();
    led.off();
  });
});
