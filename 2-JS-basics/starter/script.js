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

/* Operator Precedence */

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
