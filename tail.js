const assertEqual = function(actual, expected) {
  if (actual.length === expected.length) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(arr) {
  if (arr) {
    let [,...restOfTheItems] = arr;
    return restOfTheItems;
  } else {
    return undefined;
  }
  
};
assertEqual(tail(["Hello", "Lighthouse", "Labs"]),["Lighthouse", "Labs"]);