//ASSIGMNET 
//CHAPTER9-11
//QUESTION NO 1
// Prompt the user to enter their city name
let city = prompt("Enter your City name.");

if (city === "karachi") {
    alert("Welcome to the city of lights!");
} else {
    alert("Welcome to the city");
}
//question no2
let gender = prompt("Enter your Gender")
if(gender==="male"){
    alert("Good Morning Sir.")
}
else if(gender==="female"){
    alert("Good Morning Ma’am.")
}

//QUESTION N0 3

var color = prompt("Enter the color of the road traffic signal (Red, Yellow, or Green):");

color = color.toLowerCase();


document.write("<h2>SIGNAL MESSAGE</h2>");


if (color === "red") {
    document.write("<p>Red - Must Stop</p>");
} else if (color === "yellow") {
    document.write("<p>Yellow - Ready to move</p>");
} else if (color === "green") {
    document.write("<p>Green - Move now</p>");
} else {
    alert("Invalid input or color not recognized");
}


//QUESTION NO 4
let remainingFuel = prompt("Enter the remaining fuel in litres:");

if (remainingFuel < 0.25) {
    alert("Please refill the fuel in your car.");
} else {
    alert("You have enough fuel.");
}


//QUESTION N0 5
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}


var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
 var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
 var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
 if (true){
alert("True");
}
if (false){
alert("False");
}


//Question no 6
// Prompt user for marks obtained in three subjects
let marksSubject1 = parseFloat(prompt("Enter marks obtained in Subject 1:"));
let marksSubject2 = parseFloat(prompt("Enter marks obtained in Subject 2:"));
let marksSubject3 = parseFloat(prompt("Enter marks obtained in Subject 3:"));

// Prompt user for total marks
let totalMarks = parseFloat(prompt("Enter total marks for each subject:"));

// Calculate total marks obtained
let totalObtainedMarks = marksSubject1 + marksSubject2 + marksSubject3;

// Calculate percentage
let percentage = (totalObtainedMarks / (3 * totalMarks)) * 100;

// Determine grade based on percentage
let grade, remarks;

if (percentage >= 90) {
    grade = 'A';
    remarks = 'Excellent';
} else if (percentage >= 80) {
    grade = 'B';
    remarks = 'Very Good';
} else if (percentage >= 70) {
    grade = 'C';
    remarks = 'Good';
} else if (percentage >= 60) {
    grade = 'D';
    remarks = 'Satisfactory';
} else if (percentage >= 50) {
    grade = 'E';
    remarks = 'Acceptable';
} else {
    grade = 'F';
    remarks = 'Fail';
}

// Display results
document.write("<h2>Results:</h2>");
document.write("<p>Total Marks: " + totalMarks * 3 + "</p>");
document.write("<p>Marks Obtained: " + totalObtainedMarks + "</p>");
document.write("<p>Percentage: " + percentage.toFixed(2) + "%</p>");
document.write("<p>Grade: " + grade + "</p>");
document.write("<p>Remarks: " + remarks + "</p>");


//QUESTION NO7

let secretNumber = Math.floor(Math.random(3) * 10) + 1;

let userGuess = parseInt(prompt("Guess the secret number (between 1 and 10):"));


if (userGuess === secretNumber) {
    alert("Bingo! Correct answer.");
} else if (userGuess === secretNumber - 1 || userGuess === secretNumber + 1) {
    alert("Close enough to the correct answer.");
} else {
    alert("Sorry, incorrect guess. The secret number was " + secretNumber + ".");
}


//QUESTION N0 8

let number = parseInt(prompt("Enter a number:"));


if (number % 3 === 0) {
  
    alert(number + " is divisible by 3.");
} else {
    
    alert(number + " is not divisible by 3.");
}
 

//QUESTION NO 9

let num = parseInt(prompt("Enter a number:"));


if (num % 2 === 0) {
    
    alert(num + " is an even number.");
} else {
   
    alert(num + " is an odd number.");
}
  

//QUESTION N0 10

let temperature = parseFloat(prompt("Enter the temperature in Celsius:"));

if (temperature > 40) {
    
    alert("It is too hot outside.");
} else if (temperature > 30) {
   
    alert("The Weather today is Normal.");
} else if (temperature > 20) {
    
    alert("Today’s Weather is cool.");
} else if (temperature > 10) {
    
    alert("OMG! Today’s weather is so Cool.");
} else {
  
    alert("It is freezing cold!");
}
  

//QUESTION NO11
let firstNumber = parseFloat(prompt("Enter the first number:"));


let secondNumber = parseFloat(prompt("Enter the second number:"));

let operator = prompt("Enter the operation (+, -, *, /, %):");



if (operator == '+') { // use + (addition) operator to add two numbers  
    result = firstNumber +secondNumber ;  
}  
else if (operator == '-') { // use -  (subtraction) operator to subtract two numbers  
    result = firstNumber- secondNumber;  
}  
else if (operator == '*') { // use * (multiplication) operator to multiply two numbers  
    result = firstNumber * secondNumber;  
}  
else {  
    result = firstNumber / secondNumber; // use / (division) operator to divide two numbers  
}  
  
 
document.write(" Result is" + result);  