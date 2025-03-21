/*
    Resources:
    - JavaScript Tutorial on Objects: https://javascript.info/object
    - freeCodeCamp on Objects: https://www.freecodecamp.org/news/objects-in-javascript-for-beginners/
    - JavaScript Tutorial on Arrays: https://javascript.info/array
    - freeCodeCamp on Arrays: https://www.freecodecamp.org/news/javascript-array-tutorial-array-methods-in-js/
*/

let numbers = [
    1, 89, 55, 63, 29, 19,
    15, 77, 62, 68, 29, 84,
    21, 26, 49
];

// Todo 3.1 Get the first, 5th, and last items in the numbers array.
// Your code here
console.log(numbers[0],numbers[4],numbers[14])

// Todo 3.2 calculate the min, max, and the average of the numbers array
// Your code here
var min = 100;
for(let x of numbers){
    if (x < min){
        min = x;
    }
}
console.log(min)
var max = 0
for(let x of numbers){
    if (x > max){
        max = x;
    }
}
console.log(max)
var sum = 0
for (let x of numbers){
    sum += x;
}
let ave = sum/numbers.length;
console.log(ave);

// Checkpoint 3.1 How would you compare lists in python vs arrays in JavaScript
// Answer: They seem to be the same. In terms of declarations, and hetero element types. They are also accessible with index numbers.

// Todo 3.3 Declare an object with information about IT114L (course code, name, units, number of students)
// Your code here
var subject1 = {
    code: "IT114L",
    name: "Web Systems Laboratory",
    units: 1,
    no_of_student : 40
}
console.log(subject1.no_of_student)

// Todo 3.4 Add professor name as one of the fields of the object. Display the value of professor name.
// Your code here
subject1 = {
    professor: "Job"
}
console.log(subject1.professor)

// Todo 3.5 Declare and array of objects with information about the courses you are taking this term
// Your code here
var subject2 = {
    code: "IT114",
    name: "Web Systems Lecture",
    units: 2,
    no_of_student : 40,
    professor: "Adomar"
}
var subject3 = {
    code: "IT132",
    name: "Logic Design Lecture",
    units: 2,
    no_of_student : 41,
    professor: "Leonnel"
}
var subject4 = {
    code: "PE042",
    name: "Pathfit 2",
    units: 2,
    no_of_student : 39,
    professor: "Ferdinand"
}
var subject5 = {
    code: "IT132",
    name: "Technopreneurship",
    units: 3,
    no_of_student : 40,
    professor: "Ian"
}

var subject = [subject1, subject2, subject3, subject4, subject5]

// Todo 3.5 Calculate the total number of units you are taking this term using the array of objects.
// Your code here
var subSum = 0
for (let x of subject){
    subSum += (x.units)
}
console.log(subSum)

// Checkpoint 3.2 What would be the equivalent of objects in python? How would you compare them?
// Answer: 

// Todo 3.6 Going back to the array of numbers, use the spread syntax to create a copy of the array with an additional number
// Your code here

// Todo 3.7 Going back to your IT114L object, extract the course code and units using the spread operator
// Your code here
