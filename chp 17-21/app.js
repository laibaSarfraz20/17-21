//  1

let emptyArray = [];
for (let i = 0; i < 3; i++) {
  emptyArray[i] = [];
  for (let j = 0; j < 4; j++) {
    emptyArray[i][j] = null; 
  }
}
document.write(emptyArray); 

// 2
const matrix = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
  ];
  document.write(matrix); 

//   3
for (let i = 1; i <= 10; i++) {
document.write(i);
  }
  
//   4

let num = parseInt(prompt("Enter the number for which you want the multiplication table: "));
let length = parseInt(prompt("Enter the length of the table (up to which number you want to multiply): "));

document.write(`Multiplication Table of ${num}:`);

for (let i = 1; i <= length; i++) {
  let result = num * i;
  document.write(`${num} * ${i} = ${result}`);
}
// 5
let fruits = ["apple", "banana", "mango", "orange", "strawberry"];

for (let i = 0; i < fruits.length; i++) {
    document.write(fruits[i]);
}
// 7
let bakery = ["cake", "apple pie", "cookie", "chips", "patties"];

let userInput = prompt("Enter the item you want to search for: ").toLowerCase(); // Convert to lowercase for case-insensitive search

let found = bakery.includes(userInput);

if (found) {
    document.write(`${userInput} is found in the bakery.`);
} else {
    document.write(`${userInput} is not found in the bakery.`);
}

// 8
let A = [24, 53, 78, 91, 12];
let largest = A[0]; 
for (let i = 1; i < A.length; i++) {
  if (A[i] > largest) {
    largest = A[i];
  }
}

document.write("The largest number in the array is:", largest); 
let largestNumber = Math.max(...A);
document.write("The largest number using Math.max():", largestNumber);
