const assert = require ("chai").assert;
const flatten = require("../flatten");

// flatten([1, 2, [3, 4], 5, [6],[7,8,9]]); // => [1, 2, 3, 4, 5, 6]

// assertArraysEqual(flatten([1, 2, [3, 4], 5, [6],[7,8,9]]), [1, 2, 3, 4, 5, 6]); // should fail
// assertArraysEqual(flatten([1, 2, 3]), [1, 2,3]); // should pass
// assertArraysEqual(flatten([1, 2, [3,4]]), [1, 2, 3,4]); // should pass
// assertArraysEqual(flatten([1, 2, [3,4]]), [1, 2, [3,4]]); // should fail

describe("flatten",()=>{
  it("it should Pass",()=>{
    assert.notDeepEqual(flatten([1, 2, [3, 4], 5, [6],[7,8,9]],[1, 2, 3, 4, 5, 6]))
  }),
  it("it should pass",()=>{
    assert.deepEqual(flatten([1, 2, 3]),[1, 2, 3])
  }),
  it("it should Pass",()=>{
    assert.notDeepEqual(flatten([1, 2, [3,4]],[1, 2, [3,4]]))
  })
})
