const assert = require("chai").assert;

const {map,results1,words} = require("../map");

describe("map",()=>{
  it("it should pass",()=>{
    assert.deepEqual(results1,['g','c','t','m','t'])
  }),
  it("it should pass",()=>{
    assert.deepEqual(map(words, word => word[0]), ['g','c','t','m','t'])
  })
})