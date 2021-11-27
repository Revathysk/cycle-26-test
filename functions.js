// Learning functions 
// Declaring function at begining of script
// Funtions with parameters 
/*
function greet(sname)
{
//console.log('Hello! have a nice day!' + sname);
console.log(`Hello! have a nice day! ${sname}`);
} 

greet();

// function expression is using function() 

//functions called with "values/data" is arguments
let sayGreet = greet('Revs') ;

//Anonymous funtion without parameter
//declaring goodbye as const will not let script to change it elsewhere
let goodbye = () =>
{console.log('Goodbye');}

goodbye(); 

//when we have dynamic changing arguments to  be passed when function is called 

function addit(...arguments)
{
    console.log(...arguments);
}
 addit(1,1,1,1,1);

//Nested function
function one()
{
    return function two()
    {return true}
}

let yesNo= one();
console.log(yesNo);
console.log(yesNo());
console.log(()=> console.log("anonymous"));
//anonymous function can't be accessed before declaration. But regular functions can be called in before declaration

//declaring variables with different data types

//console.log(a,b,c); // Cannot access 'a' before initialization
console.log(c);  //var data type will  not give error but will display as undefined

let a = 100;
const b = 200;
var c = 300 ;

console.log(a,b,c);
*/

const city ='New York City';
function logCitySkyline(city)
{
let  skyscraper='Empire State Building';
return 'The stars over the '+ skyscraper +' in '
+ city ;
 }
 console.log(logCitySkyline(city));