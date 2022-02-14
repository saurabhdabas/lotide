const takeUntil = require("../takeUntil");

const input = function (x) {
  if ( x < 0 ){
    return false
  }
  return true
 }
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// //  console.log(takeUntil(data1,input))
 
 
//  const results1 = takeUntil(data1,input);
//  console.log(results1);
 
// //  console.log('---');
const input1 = function (x) {
  if ( x === ',' ){
    return false
  }
  return true
 }
 const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
 const results2 = takeUntil(data2,input1);
 console.log(results2);

const assert = require("chai").assert;
describe("takeUntil",()=>{
  it("returns an array [1,2,5,7,2] when receives [1, 2, 5, 7, 2, -1, 2, 4, 5] as an input",()=>{
    assert.deepEqual(takeUntil(data1,input),[1,2,5,7,2]);
  }),
  it("returns True if actual is equal to be expected",()=>{
    assert.deepEqual(takeUntil(data2,input1),[ "I've", 'been', 'to', 'Hollywood' ]);
  })
});
