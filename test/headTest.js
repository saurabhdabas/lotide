const assertEqual = require('../assertEqual');
const head = require('../head.js');
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");