const assert = require("chai").assert;
const eqArrays = require('../eqArrays');

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // ----> should Pass
// assertEqual(eqArrays([1, 2, 3], [1, 4, 3]), true);// ----> should fail
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // ----> should Pass
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true); // ----> should fail
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3" , "4"]), true); // ----> should fail
// assertEqual(eqArrays(["1", "2", "3"], []), true); // ----> should fail





describe("eqArrays",()=>{
  it("it should pass",()=>{
    assert.isTrue(eqArrays([1, 2, 3], [1, 2, 3],true))
  }),
  it("it should pass",()=>{
    assert.isFalse(eqArrays([1, 2, 3], [1, 4, 3],false))
  }),
  it("it should pass",()=>{
  assert.isFalse(eqArrays(["1", "2", "3"], ["1", "2", "3" , "4"]), true)
  })
})