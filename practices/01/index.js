console.log("script loaded");

const strInputs = prompt("Enter the array numbers");

//const strNumbers = strInputs.split(',');
//const numbers = strNumbers.map(n => parseInt(n));
const numbers = strInputs.split(',').map(n => parseInt(n));
const sum2 = numbers.reduce( (s, c) => s = s + c, 0 );


//console.log(strNumbers);

// const numbers = strNumbers.map(n => {
//     let convNumbers = parseInt(n);
//     return convNumbers;
// });


//console.log(numbers);

//const strNumbers = prompt("Enter the array numbers");
//const numbers =[1,2,3];
//const numbers = JSON.parse(strNumbers);

// let sum = 0;

// for (let index = 0; index < numbers.length; index++) {
//     sum = sum+numbers[index];    


// const sum2 = numbers.reduce( (s, c, i) => {
//     s = s + c;
//     return s;
// }, 0 );

console.log(sum2);

