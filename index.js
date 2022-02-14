const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const flatten = require('./flatten');
const takeUntil = require('./takeUntil');
const eqArrays = require('./eqArrays');
const assertEqual = require('./assertEqual');
const assertArraysEqual = require('./assertArraysEqual');
const map = require('./map');
const letterPositions = require("./letterPositions")

/// using the Object shorthand syntax from ES6
module.exports = {
  head,
  tail,
  middle,
  flatten,
  takeUntil,
  eqArrays,
  assertEqual,
  assertArraysEqual,
  map,
  letterPositions
};