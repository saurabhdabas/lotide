const assert = require("chai").assert;
// const assertArraysEqual = require("../assertArraysEqual")

// assertArraysEqual([1, 2, 3], [1, 2, 3]); // should pass
// assertArraysEqual([1, 2, 3], [1, 2]); // should fail
// assertArraysEqual([1, 2, 3], [1, 2, "3"]); // should fail

describe("assertArraysEqual",()=>{
  it("it should pass",()=>{
    assert.deepEqual([1, 2, 3], [1, 2, 3])
  }),
  it("it should Fail",()=>{
    assert.notDeepEqual([1, 2, 3], [1, 2])
  }),
  it("it should Fail",()=>{
    assert.notDeepEqual([1, 2, 3], [1, 2, "3"])
  })
})