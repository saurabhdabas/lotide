const eqObjects = function(object1, object2) {
  let obj1Length = Object.keys(object1).length;
  let obj2Length = Object.keys(object2).length;
  if (obj1Length !== obj2Length) {
    return false;
  }
  for (let key of Object.keys(object1)) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  if (eqObjects(actual,expected) === true) {
    console.log(`✅✅✅ Assertion Passed ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed ${actual} === ${expected}`);
  }
};
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };

assertObjectsEqual(ab, ba); // => should PASS
assertObjectsEqual(ab, abc); // => should FAIL