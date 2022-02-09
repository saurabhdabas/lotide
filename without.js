function eqArrays(arr1,arr2){
  if(arr1.length != arr2.length){
    return false
  }
  else{
    for(let i = 0 , j = 0 ; i < arr1.length , j < arr2.length ; i ++ , j ++ ){
      if(arr1[i] !== arr2[j]){
        return false;
      }
    }
    return true
  }
}
function assertArraysEqual(arr1,arr2){
  if (eqArrays(arr1,arr2) === true) {
    console.log(`✅✅✅ Assertion Passed`);
    console.log(arr1);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed`);
  }
}

function without(source,itemsToRemove){
  let newArr = [];
  for ( let i = 0 ; i < source.length ; i ++ ){
    let shouldRemove = false ;
    for ( let j = 0 ; j < itemsToRemove.length ; j ++){
      if(source[i] === itemsToRemove[j]){
      shouldRemove = true ;
      break;
      }
    }
    if(!shouldRemove){
      newArr.push(source[i]);
    }
  }
  console.log(newArr);
  return newArr;
}

// function without (source,itemsToRemove){
//   console.log(source.filter((item)=>{
//     return !itemsToRemove.includes(item);
//   }))
//   return source.filter((item)=>{
//     return !itemsToRemove.includes(item);
//   })
// }
without(["1", "2", "3"], [1, 2, "3"])
without([1,2,3],[2,3,4]);
without([1,2,3],[1,3,4]);
without([1,2,3],[4,5,6]);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);