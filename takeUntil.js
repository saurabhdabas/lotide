const takeUntil = function(array,callback) {
let results = [];
for ( let i = 0 ; i < array.length ; i ++ ){
  if(callback(array[i])=== false){
    break;
  }
  else{
    results.push(array[i]);
  }
}
return results;
}

const input = function (x) {
 if ( x < 0 ){
   return false
 }
 return true
}
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
console.log(takeUntil(data1,input))


const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);