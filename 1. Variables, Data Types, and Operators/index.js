/*
    Resources:
    - MDN Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators
*/
// TODO 1.1 Use the var keyword to define a variable. Log the variable to the console. Now try moving the variable declaration after you log the variable.
// Your code here
var num1 = 1
var num1 = 3
//console.log(num1)

//using a variable before declaration makes it undefined. using a constant variable results in error.

// TODO 1.2 Use the let keyword to define a variable.
// Your code here
let num2 = 2
num2 = 3
//console.log(num2)

// TODO 1.3 Use the const keyword to define a variable. Try reassigning the value of the variable. What happens?
// Your code here
const num3 = 3
//console.log(num3)

//you cannot change the value of a variable with const keyword

// Checkpoint 1.1 What is the difference between var, let, and const?
// Answer: 
//The difference between var and let is in the concept of declaration.
//You can redeclare a var variable but you can't redeclare a let
//Const variable cannot be redeclared as well but compared to let and var, const cannot be reassigned.

// TODO 1.4 Try out the different arithmetic operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#arithmetic_operators
// Your code here
console.log(1 + 5)
console.log(1 - 6)
let me = 1
me++
console.log(me++)
console.log(me)

// Checkpoint 1.2 What operators did you use?
// Answer: Addition, Increments (left and right)
// Your code here
console.log(7/1,2*4)

// TODO 1.5 Try out the different string operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#string_operators
// Your code here
console.log("disturbing the peace" + "look into my eyes" + "and tell me the things that you're talking about" + "behind my back")

// Checkpoint 1.3 What operators did you use?
// Answer: + operator to concatenate

// TODO 1.6 Try out the different logical operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#logical_operators
// Your code here
console.log(2+2 == 4 || 1 - 1 == 0)

// Checkpoint 1.4 What operators did you use?
// Answer: && ||


// TODO 1.7 Try out the different relational operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#relational_operators
"PI" in Math

// Checkpoint 1.5 What does [] == false evaluate to? Why does that happen? Research why
// Answer: == operator compares value and is buggy as it considers {} as an object.
// === should always be used to compare type and value.
// Your code here
console.log([] == false)