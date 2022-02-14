const assert = require("chai").assert;
const assertEqual = require('../assertEqual');

// assertEqual("LighthouseLabs","Bootcamp");
describe("assertEqual",()=>{
  it("it should fail",()=>{
    assert.notDeepEqual("LighthouseLabs","Bootcamp")
  }),
  it("it should pass",()=>{
    assert.deepEqual("hello","hello")
  })
})
