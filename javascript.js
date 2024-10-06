/******************************************************************************
Functions and Methods assignment

Read the assignment text CAREFULLY. Show some examples in your code that tests
your functions and methods. Use a variation of arrow functions and 
function keyword functions.

Add comments to your code that briefly describe what your code does.

1.

Make the following function:

The function should take in a number as a parameter and return
"Odd" if the number received is an odd number and "Even" if the number
received is an even number.

******************************************************************************/
// The getnumber function takes a number as input and returns
// a message indicating whether the number is even or odd.
// It uses the modulo operator to determine the parity of the number.
function getnumber(number) {
  const result = number % 2 === 1 ? "Number is odd" : "number is even";
  // console.log(result);
  return result;
}

console.log(getnumber(97));
/******************************************************************************
2.

Make the following function:

The function should take in a string as a parameter and return the string 
in upper case with an exclamation mark at the end.

Example: "This is cool" should return "THIS IS COOL!"

******************************************************************************/
// The getText function takes a string as input, converts it to uppercase, and adds an exclamation mark at the end.
// It returns the modified string, which is then logged to the console.
const getText = function (text) {
  const result = text.toLocaleUpperCase() + "!";
  return result;
};

console.log(getText("This is cool"));

/******************************************************************************
3.

Make the following function:

The function should take in 2 parameters:

 - A name (string)
 - An hour of the day (number)

The function should return:
"Invalid time" if the hour received is less than 0
"Good night (name received)" if the hour received is 0-5
"Good morning (name received)" if the hour received is 6-11
"Good day (name received)" if the hour received is 12-17
"Good evening (name received)" if the hour received is 18-23
"Invalid time" if the hour received is greater than 23

If no hour is received, your function should return an error message.

******************************************************************************/
// The welcome function takes two parameters: a name (name) and
// an hour of the day (hour).
// It checks the value of hour to determine whether it is valid
// and to which part of the day the hour corresponds.
// Finally, the function logs various welcome messages based on
// the provided names and hours.

function welcome(name, hour) {
  if (hour <= 0) {
    return "Invalid time!";
  } else if (hour >= 0 && hour <= 5) {
    return `Good night ${name}`;
  } else if (hour >= 6 && hour <= 11) {
    return `Good morning ${name}`;
  } else if (hour >= 12 && hour <= 17) {
    return `Good day ${name}`;
  } else if (hour >= 18 && hour <= 23) {
    return `Good evening ${name}`;
  } else {
    return `Invalid time!!`;
  }
}
console.log(welcome("Gosia", 0));
console.log(welcome("Joe", 3));
console.log(welcome("Ask", 7));
console.log(welcome("Endre", 14));
console.log(welcome("Gulshan", 20));
console.log(welcome("Louis", 24));

/******************************************************************************
4.

Make the following function:

The function should take in an array as a parameter, and return the array 
with the first and last index removed.

Example 1: ["Red", "Green", "Blue", "Yellow"] should return ["Green", "Blue"]

Example 2: ["One", "Two", "Three", "Four", "Five", "Six"] should return
["Two", "Three", "Four", "Five"]
******************************************************************************/

// Function that modifies an array and logs the result
function getArray1() {
  const array = ["Turtle", "Cat", "Dog", "Goldfish"];
  array.shift();
  array.pop();
  console.log(array);
}

console.log(getArray1());

// Arrow function that modifies an array and returns the result
const getArray = () => {
  const array = ["Gosia", "Joe", "Ask", "Endre", "Gulshan", "Louis"];
  array.shift();
  array.pop();
  return array;
};

console.log(getArray());

// // Both functions demonstrate how to manipulate arrays in JavaScript
// using shift() to remove the first element
// and pop() to remove the last element.

/******************************************************************************
5.

Make the following function:

The function should take in a string as a parameter.

Use string methods on the text parameter you receive to do the following:
 - Replace the word 'hard' with 'fun'
 - Remove the whitespace from the beginning and end of the string
 
Then return the string.

Example1: "  Javascript is hard   " should return "Javascript is fun"
Example2: " It's hard to use methods " should return "It's hard to use methods"
Example3: "   hard        " should return "fun"

******************************************************************************/

// Function that modifies text and returns the result

const getResult1 = function () {
  const text = "    My new challenge is hard.   ";
  // Replaces "hard" with "fun" and trims extra spaces
  const result = text.replace("hard", "fun").trim();
  return result;
};

console.log(getResult1());

const text = "    My new challenge is hard.   ";
// Replaces "hard" with "fun" and trims extra spaces
const result = text.replace("hard", "fun").trim();

// Arrow function returning the result
const getResult = () => result;

console.log(getResult());
/******************************************************************************
6.

Use array methods to do the following:

 - Remove the first hero of the array (Spider-Man)
 - Replace "Doctor Strange" with "Skrull"
 - Use the splice method to remove Thor and Hulk and add "Captain America"
 - Join the array to a string with "💪" between each hero

******************************************************************************/

// Arrow function to get a modified list of heroes

const getHeroes = () => {
  const heroes = [
    "Spider-Man",
    "Thor",
    "Hulk",
    "Doctor Strange",
    "Iron Man",
    "Black Widow",
  ];
  heroes.shift();
  heroes.toString().replace("Doctor Strange", "Skrull");
  heroes.splice(0, 2, "Captain America");

  const getIt = heroes.toString().replace("Doctor Strange", "Skrull");
  return getIt.split(",").join("💪");
};
console.log(getHeroes());

/******************************************************************************
7.

EXTRA CHALLENGE

This is not mandatory, only for those who want an extra challenge.

Make the following function:

The function should take in 1 parameter.

If the parameter received is a string: 
Return the string with "😎" added to the beginning and end

If the parameter received is a number:
Double it, convert it to a string and return it with "😎" added to the 
beginning and end.

If the parameter received is a boolean:
If the parameter received is true, return "😎Yeah😎". If the parameter received
is false, return "😎Chill😎"

If the parameter received is any other datatype:
Return "😎Primitive values only😎"

******************************************************************************/

// Function to process different types of parameters
function getParameter(parameter) {
  const parameterType = typeof parameter;
  if (parameterType === "string") {
    return `😎${parameter}😎`;
  } else if (parameterType === "number") {
    const fullParameter = parameter ** 2;
    return `😎 ${fullParameter}😎`;
  } else if (parameterType === "boolean") {
    return `😎 ${parameter ? "Yeah" : "Chill"}😎`;
  } else if (parameter === null) {
    return `😎Primitive values only😎`;
  } else {
    return `😎Primitive values only😎`;
  }
}

console.log(getParameter("My new challenge is fun"));
console.log(getParameter(4));
console.log(getParameter(true));
console.log(getParameter(false));
console.log(getParameter(null));
console.log(
  getParameter([
    "Spider-Man",
    "Thor",
    "Hulk",
    "Doctor Strange",
    "Iron Man",
    "Black Widow",
  ])
);

/******************************************************************************
8.

EXTRA CHALLENGE #2:

This is not mandatory, only for those who want an extra challenge.

Make the following function:

The function should take in 2 parameters, 1 array and 1 string.

Inside your function, check if the array received contains the string received.
If it does, remove that element from the array and return it.

If the array does not contain the string, add that string to the end of the 
array and return it.

Example1: (["Red", "Green"], "Blue") --> ["Red", "Green", "Blue"]
Example2: (["Red", "Green", "Blue"], "Green")) --> ["Red", "Blue"]
Example3: (["One", "Two", "Three"], "Four") --> ["One", "Two", "Three", "Four"]
Example4: (["One", "Two", "Three"], "Two") --> ["One", "Three"]
******************************************************************************/

// Function to modify an array based on the presence of a given string

function getFunction(array, string) {
  // We check whether the array contains a given string
  const fullArray = array.indexOf(string);

  if (fullArray !== -1) {
    //If the string is in the array, we remove it
    array.splice(fullArray, 1);
  } else {
    //If there is no string in the array, we add it at the end
    array.push(string);
  }

  // We return the updated array
  return array;
}

console.log(getFunction(["blue", "Red", "Green"], "Green"));
console.log(getFunction(["Red", "Green"], "Blue"));
