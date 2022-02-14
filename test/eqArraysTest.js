const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // ----> should Pass
assertEqual(eqArrays([1, 2, 3], [1, 4, 3]), true);// ----> should fail
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // ----> should Pass
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true); // ----> should fail
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3" , "4"]), true); // ----> should fail
assertEqual(eqArrays(["1", "2", "3"], []), true); // ----> should fail