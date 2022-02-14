function eqArrays(arr1,arr2) {
  if (arr1.length != arr2.length) {
    return false;
  } else {
    for (let i = 0 , j = 0; i < arr1.length , j < arr2.length; i ++ , j ++) {
      if (arr1[i] !== arr2[j]) {
        return false;
      }
    }
    return true;
  }
}
function assertArraysEqual(arr1,arr2) {
  if (eqArrays(arr1,arr2) === true) {
    console.log(`✅✅✅ Assertion Passed`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed`);
  }
}


const letterPositions = function(sentence) {
  let results = {};
  
  for (let i = 0; i < sentence.length; i ++) {
    if (sentence[i] !== " ") {
      if (!results[sentence[i]]) {
        results[sentence[i]] = [i];
      } else {
        results[sentence[i]].push(i);
      }
    }
  }
  return results;
};
console.log(letterPositions("lighthouse in the house"));

assertArraysEqual(letterPositions("lighthouse in the house").e,[9, 16, 22]); // ----> Should Pass
assertArraysEqual(letterPositions("lighthouse in the house").i,[1, 10]); // ----> Should Fail