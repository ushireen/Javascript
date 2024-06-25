// Question 1: Variable Declaration and Initialization

// 1.	Declare a variable named name and initialize it with your full name.

        var names;
        names= "Uzma Shireen";

// 2.	Declare a variable named age and initialize it with your age.
        let age;
        age = 25;

// 3.	Declare a variable named isStudent and initialize it with a boolean value indicating whether you are a student or not.
           let isStudent = true;

// 4.	Print all the variables to the console.
        console.log(names);
        console.log(age);
        console.log(isStudent);

 // Question 2: Area and Perimeter of a Rectangle
    let length = 10;
    let width = 20;
    let area = length * width;
    let Perimeter = 2 *(length + width);
    console.log("Area of Rectangle", area);
    console.log("Perimeter of Rectangle", Perimeter);

// Question 3: String Operations
   let greeting = "Hello";
   let userName = "sarah";
   let welcomeMessage = greeting.concat(" ", userName);
   console.log(welcomeMessage);

// Question 4: Type Conversion  
   let stringNumber = "123";
   let convertedNumber = Number(stringNumber);
   console.log(typeof stringNumber);
   console.log(typeof convertedNumber);

// Question 5: Comparison Operators 
       let a = 2;
       let b = 5;
       console.log("a == b: " + (a == b));       
       console.log("a === b: " + (a === b));     
       console.log("a != b: " + (a != b));       
       console.log("a !== b: " + (a !== b));  
       console.log("a > b : " + (a > b));  
       console.log("a < b : " + (a < b));  
       console.log("a >= b : " + (a >= b));  
       console.log("a <= b : " + (a <= b));  

// Question 6: Logical Operators
   let isSunny = true;
   let isWeekend = true;
   let hasHomework = false;
   let canGoOutToPlay = isSunny && isWeekend && !hasHomework;
   console.log("Can I go out to play?", canGoOutToPlay);


// Question 7: Ternary Operator
   let temperature = 30;
   let weather = temperature > 30 ? "Hot" : "Cold";
   console.log("Weather is " ,weather);

// Question 8: Data Type Checking
let string = "Sarah";         
let number = 24;             
let bool = true;          
let object = {            
    name: "Sarah",
};
let undef; 
console.log("Type of String:", typeof string);
console.log("Type of Number:", typeof number);
console.log("Type of Boolean:", typeof bool);
console.log("Type of Object:", typeof object);
console.log("Type of Undefined:", typeof undef);

// Question 9: Simple Calculator

let num1 = prompt("Enter the first number:");
let num2 = prompt("Enter the second number:");
let operator = prompt("Enter the operator (+, -, *, /):");
let result;

if (operator === "+") {
    result = num1 + num2;
} 
else if (operator === "-") {
    result = num1 - num2;
}
 else if (operator === "*") {
    result = num1 * num2;
} 
else if (operator === "/") {
    result = num1 / num2;

} else {
    result = "Error: Invalid operator.";
}
console.log("The result is: " + result);


// Create a program that:
// 1.	Declares variables of different data types: string, number, boolean, object, and undefined.
// 2.	Uses the typeof operator to check the data type of each variable.
// 3.	Prints the data type of each variable

let string1 = "Sarah";         
let num = 24;             
let booean = true;          
let obj = {            
    name: "Sarah",
};
let undefined; 
let typeOfString = typeof string1;
let typeOfNumber = typeof num;
let typeOfBoolean = typeof boolean;
let typeOfObject = typeof obj;
let typeOfUndefined = typeof undefined;

console.log("The data type of string1 is: " + typeOfString);
console.log("The data type of num is: " + typeOfNumber);
console.log("The data type of boolean is: " + typeOfBoolean);
console.log("The data type of obj is: " + typeOfObject);
console.log("The data type of undefined is: " + typeOfUndefined);
