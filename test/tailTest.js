// const assertEqual = require('../assertEqual');
// const tail = require('../tail.js');
// assertEqual(tail(["Hello", "Lighthouse", "Labs"]),["Lighthouse", "Labs"]); // -----should Fail

const assert = require("chai").assert;
const tail = require ("../tail");

describe("tail",()=>{
  it("it should return False",()=>{
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]),["Lighthouse", "Labs"])
  })
})