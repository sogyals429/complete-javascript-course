/* Variables and Data Types*/
/*
console.log("Hello World!");
var firstName = 'Sogyal';
var lastName = 'Sherpa';
var age = 19;

var fullAge = true;
console.log(fullAge);
console.log("Welcome " + firstName+" "+lastName + " your age is: " + age + " years.");

var job;
console.log(job);

job = 'Teacher';
console.log(job);
*/

/* Variable mutation and type coercion 

var firstName = 'Sogyal';
var age = 19;

// Type Coercion
console.log(firstName + " " + age);

var job,isMarried;
job = 'Student';
isMarried = false;

console.log(firstName + " is a " + age + " year old " + job + " and is he married?" + isMarried);
*/

/* Variable Mutation 

age = 'twenty eight';
job = 'driver';

alert(firstName + " is a " + job);

var lastName = prompt("What is his last name: ");
console.log(lastName);
*/

/* Basic Operators 

var now,yearSogyal,yearJohn;
now = 2018;
ageSogyal = 19;
ageJohn = 30;

//Math Operators
yearSogyal = now-ageSogyal;
yearJohn = now-ageJohn;

console.log(yearSogyal);

console.log(now + 2);
console.log(now * 2);
console.log(now / 2);

*/

/*Logical Operators
var johnOlder = ageJohn > ageSogyal;
console.log(johnOlder);
*/

/*Typeof operator
console.log(typeof johnOlder);
console.log(typeof ageSogyal);
console.log(typeof "Sogyal");
var x;
console.log(typeof x);
*/

/* Operator Precedence 

var now = 2018;
var yearSogyal = 1999;
var age = 19; 

// Multiple Operators
var isFullAge = now - yearSogyal >= age;
console.log(isFullAge);

// Grouping 
var ageSogyal = now-yearSogyal;
var ageJohn = 20;
var avg = (ageSogyal+ageJohn) / 2;
console.log(avg);

// Multiple assignments
var x, y;
x = y = (3+5) * 4 - 6;
console.log(x,y);

//More Operators
x *= 2;
console.log(x)
y /= 2;
console.log(y);

*/


/** Coding Challenge 1 

var markHeight = 1.5;
var markWeight = 60;

var johnHeight = 1.7;
var johnWeight = 50;

var markBMI = markWeight / (markHeight * markHeight) ;
var johnBMI = johnWeight / (johnHeight * johnHeight);
console.log(markBMI,johnBMI);

if(markBMI > johnBMI){
    console.log("Mark's BMI is higher than John's.");
}else{
    console.log("John's BMI is higher than Mark.");
}
*/

/* If Else Statements

var firstName = "Sogyal";
var civilStatus = "Single";

if(civilStatus === "Married"){
    alert(firstName + " is Married");
}else{
    alert(firstName + " is " + civilStatus);
}

var isMarried = true;
if(isMarried){
    console.log(firstName + " is married.");
}
*/

/* Boolean Operators
var firstName = "Sogyal";
var age = 19;

if(age<13){
    console.log(firstName + " is a boy.");
}else if(age>=13 && age<20){
    console.log(firstName + " is a teenager.");
}else if(age>=20 && age<30){
    console.log(firstName + " is a young man.");
}else{
    console.log(firstName + " is a man.");
}
*/

/* Ternary Operator 

var firstName = "Sogyal";
var age = 19;

age>=18 ? console.log(firstName + " drinks beer.")
: console.log(firstName + " drinks juice.");

var drink = age>=18 ? 'beer' : 'juice';
console.log(drink);

*/

/* Switch Statement 
var job = 'cop';

switch(job){
    case 'Teacher':
        console.log(firstName + " teaches kid.");
        break;
    case 'Student','student':
        console.log(firstName + " is a student");
        break;
    default:
    console.log(firstName + " is a " + job);
}

switch(true){
    case age<13:
        console.log(firstName + " is a boy.");
        break;
    case age>=13 && age<20:
        console.log(firstName + " is a teenager.");
        break;
    case age>=20 && age<30:
        console.log(firstName + " is a young man.");
        break;
    default:
        console.log(firstName + " is a man.");
}
*/