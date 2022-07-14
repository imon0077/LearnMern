console.log('--------------- Array ---------------')

arr = [1,2,3,4,5];

let len = arr.length;

console.log(len);

let isArray = arr instanceof Array;
console.log(isArray);

let arrFrom = Array.from(arr);
console.log(arrFrom);

let isString = arr instanceof String;
console.log(isString);

let isGreater = (x) => x > 3;

let maxValue = arr.filter(isGreater);
//let maxValue = arr.filter( (x) => x>3 );
console.log(maxValue);

let findMaxValue = arr.find( (x) => x>3 );
console.log(findMaxValue);