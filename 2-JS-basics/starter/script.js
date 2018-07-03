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

/** Truthy and Falsy values and equality operators. 

// Falsy values = undefined, null, 0, '', NaN;
// Truthy Values = Not Falsy Values

var height;

height = 23;

if(height){
    console.log("Variable is defined.");
}else{
    console.log("Variable is undefined.");
}

//Equality Operator

if(height == '23'){
    console.log("True");
}else if(height === '23'){
    console.log("False");
}

*/

/* Coding Challenge 2 
var johnAvg = (89+120+103)/3;
var mikeAvg = (116+94+123)/3;
var maryAvg = (97+132+105)/3;

console.log(johnAvg);
console.log(mikeAvg);
console.log(maryAvg);

if(johnAvg>mikeAvg && johnAvg<maryAvg){
    console.log("Mike is the winner with a score of: " + mikeAvg);    
}else if(mikeAvg> johnAvg && maryAvg>johnAvg){
    console.log("John is the winner with a score of: " + johnAvg);
}else if(maryAvg>= johnAvg && maryAvg>= mikeAvg){
    console.log("Mary is the winner with a score of: " + maryAvg);
}else if(johnAvg == mikeAvg || maryAvg==johnAvg || maryAvg==mikeAvg){
    console.log("Its a draw.");
}
*/

/* Functions 

var age = calculateAge(1999);
console.log(age);

function calculateAge(birthYear){
    return 2018 - birthYear;
}

function yearsUntilRetirement(year,firstName){
    
    var age = calculateAge(year);
    var retirement = 65 - age;

    if(retirement>0){
        console.log(firstName + " retires in " + retirement + " years.");
    }else{
        console.log(firstName + " is already retired.");
    }
}

yearsUntilRetirement(1920,"Sogyal");
*/

/* Function Statements and Expressions 

//Function Declaration
//function whatDoYouDo(job,firstName){}

//Function Expression
var whatDoYouDo = function(job,firstName){
    switch(job){
        case 'teacher':
            return firstName + ' teaches kids how to code.';
        case 'driver':
            return firstName + ' drives a car';
        case 'coder':
            return firstName + ' is a coder.';
        default:
            return firstName + ' does something else.';
    }
}

console.log(whatDoYouDo('driver','Sogyal'));

*/

/* Arrays 

// Initialize new array
var names = ['Sogyal','James','Mark'];
var years = new Array(1969,1999,1904);

console.log(names[2]);
console.log(names.length);

//Mutating Arrays
names[1] = 'Sam';
names[names.length] = 'Smith';
console.log(names);

//Different Data Types
var john = ['John','Smith',1990,'teacher',false];

//push adds data to end of array.
john.push('blue');

//adds element to start of array.
john.unshift('Mr.');
console.log(john);

//pop() removes last element of array.
john.pop();
//shift() removes first element of array.
john.shift();
console.log(john);

console.log(john.indexOf(23));

var isTeacher = john.indexOf('teacher') === -1 ? 'John is not a teacher.' : 'John is a teacher';    
console.log(isTeacher);
*/


/* Coding Challenge 3 


function tipCalculator(billAmount){
    var percentage;
    if(billAmount<50){
        percentage = .2;
    }else if(billAmount>=50 && billAmount<200){
        percentage = .15;
    }else{
        percentage = .1;
    }

    return percentage*billAmount;
}

var bills = [124,48,268];

var tips = [tipCalculator(bills[0]),
            tipCalculator(bills[1]),
            tipCalculator(bills[2])];

var finalValues = [ bills[0] + tips[0],
                    bills[1] + tips[1],
                    bills[2] + tips[2]];
 
console.log(tips,finalValues);
*/

/* Objects and Properties 

//Object Literal
var sogyal = {
    firstName : "Sogyal",
    lastName : "Sherpa",
    birthYear : 1999,
    family : ['Mother','Father', 'Sister'],
    job: 'Student',
    isMarried : false
};

console.log(sogyal.firstName);
console.log(sogyal['lastName']);

var x = 'birthYear';
console.log(x);

sogyal.job = 'Driver';
sogyal['isMarried'] = true;
console.log(sogyal);

// new Object Syntax
var user = new Object();
user.firstName = 'Sogyal';
user.lastName = 'Sherpa';
user.birthYear = 1999;
console.log(user);
*/


/* Objects and Methods 


var sogyal = {
    firstName : "Sogyal",
    lastName : "Sherpa",
    birthYear : 1999,
    family : ['Mother','Father', 'Sister'],
    job: 'Student',
    isMarried : false,
    calcAge: function(){
        var d = new Date();
        var currentYear = d.getFullYear();
        this.age =  currentYear - this.birthYear;
    }
};

sogyal.calcAge();
console.log(sogyal);
*/

/* Coding Challenge 4
var johnBmi = {
    name : "John",
    mass : 110,
    height : 1.95,
    calcBMI : function(){
        this.BMI = this.mass / (this.height*this.height);
        return this.BMI;
    }
};

var markBmi = {
    name : "Mark",
    mass : 78,
    height : 1.69,
    calcBMI : function(){
        this.BMI = this.mass / (this.height*this.height);
        return this.BMI;
    }
};

var johnBMI = johnBmi.calcBMI();
var markBMI = markBmi.calcBMI();
console.log(johnBMI,markBMI);

if(johnBMI<markBMI){
    console.log(markBmi.name + " has a higher BMI average " + markBMI);
}else if(markBMI<johnBMI){
    console.log(johnBmi.name + " has a higher BMI average " + johnBMI);
}else{
    console.log("Both have the same BMI " + markBMI + " " + johnBMI);
}
*/
