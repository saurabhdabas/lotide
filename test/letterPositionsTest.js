const assert = require("chai").assert;
const eqArrays = require("../eqArrays");
const assertArraysEqual = require("../assertArraysEqual")
const letterPositions = require("../letterPositions");

// assertArraysEqual(letterPositions("lighthouse in the house").e,[9, 16, 22]); // ----> Should Pass
// assertArraysEqual(letterPositions("lighthouse in the house").i,[1, 10]); // ----> Should Fail

describe("letterPositions",()=>{
  it("it should pass",()=>{
    assert.deepEqual(letterPositions("lighthouse in the house").e,[9, 16, 22])
  }),
  it("it should fail",()=>{
    assert.deepEqual(letterPositions("lighthouse in the house").i,[1, 11])
  })
})