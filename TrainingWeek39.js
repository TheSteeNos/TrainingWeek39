/*
NOTE FOR TEACHER!!!
I changed some variable names based on them being mentioned further down in the code as a const.
Therefore, it was for instance impossible to assign the variable "sum" in Task A, as it was a const in Task B.
*/

/* -----------------------------------------------------------------------------
    Task: A
    You are given a list (Array) named "tall".
    Write the code that will ensure the variable "sum" contains the sum of all the numbers in the list (i.e., tal1 + tal2 + tal3 + tal4 + ... and so on).
*/

console.log("");
console.log("Task A");

const numbers = [1, 2, 3, 4, 5];

let sum = 0;

for (let  i = 0; i < numbers.length; i++) {
   sum += numbers[i];
};

console.log(sum);


/* -----------------------------------------------------------------------------
    Task: B
    Below is a function "summer," which is incomplete; it should return the sum of the numbers it receives in a list.
    Your task is to complete the function so that it does that.
*/

console.log("");
console.log("Task: B");


let sum2 = 0;
function summer(list) {
    for (let  i = 0; i < list.length; i++) {
        sum2 += list[i];
     }
  return sum2;
}

const taskBAnswer = summer(numbers);

if (taskBAnswer === 15) {
    console.log("🎉 Task B is most likely correct");
} else {
    console.log("😱 Task B has some issues, but you can fix it 👍");
}

/* -----------------------------------------------------------------------------
    Task: C
    You are given a list (Array) named "andreTall."
    Write the code that will ensure the variable "difference" contains the difference of all the numbers in the list (i.e., tal1 - tal2 - tal3 - tal4 - ... and so on).
*/

console.log("");
console.log("Task: C");

const otherNumbers = [6, 7, 8, 9];

let difference = otherNumbers[0];

for (let i = 1; i < otherNumbers.length; i++) {
    difference -= otherNumbers[i];
}

console.log(difference);

/* -----------------------------------------------------------------------------
    Task: D
    Below is a function "differentiate," which is incomplete; it should return the difference of the numbers it receives in a list.
    Your task is to complete the function so that it does that.
*/

console.log("");
console.log("Task: D");

let differenceTwo = otherNumbers[0];

function differentiate(list) {
  for (let  i = 1; i < list.length; i++) {
    differenceTwo -= list[i];
  }
  return differenceTwo;
}

const taskDAnswer = differentiate(otherNumbers);

if (taskDAnswer === -18) {
    console.log("🎉 Task D is most likely correct");
} else {
    console.log("😱 Task D has some issues, but you can fix it 👍");
}


/* -----------------------------------------------------------------------------
    Task: E
    Create a function named "multiply." This function should take (as a parameter) a list of numbers.
    The function should return the product of the numbers (i.e., tal1 * tal2 * tal3 * ... and so on).
*/

console.log("");
console.log("Task: E");

let moreNumbers = [3, 4, 5, 6];

let total = 1;

function multiply(list) {
    for (let  i = 0; i < list.length; i++) {
      total *= list[i];
    }
    return total;
  }

const taskEAnswer = multiply(moreNumbers);

if (taskEAnswer === 360) {
    console.log("🎉 Task E is most likely correct");
} else {
    console.log("😱 Task E has some issues, but you can fix it 👍");
}

console.log("");