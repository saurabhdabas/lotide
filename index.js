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

module.exports = {
  head:   head,
  tail:   tail,
  middle: middle,
  flatten: flatten,
  takeUntil : takeUntil,
  eqArrays : eqArrays,
  assertEqual : assertEqual,
  assertArraysEqual : assertArraysEqual,
  map : map,
  letterPositions : letterPositions
};