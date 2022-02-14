const assertEqual = require('../assertEqual');
const tail = require('../tail.js');
assertEqual(tail(["Hello", "Lighthouse", "Labs"]),["Lighthouse", "Labs"]); // -----should Fail