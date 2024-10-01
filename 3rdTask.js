// Task Date is "1-10-2024"

// 1. Write a JavaScript function to check if a given string is a palindrome (reads the same forwards and backwards).
// 2. Write a function that takes an array of objects and a key, and returns a new array sorted based on the values of that key in ascending order.
// 3. Implement a deep clone function in JavaScript that creates a copy of a nested object or array without any reference to the original.
// 4. Write a function that determines if two strings are anagrams of each other.
// 5. Write a JavaScript program to list the properties of a JavaScript object.
// 6. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
// Sample object:
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };
// 7. Write a JavaScript function to get a copy of the object where the keys become the values and the values are the keys.
// 8. Can you write a function in JavaScript to merge two objects without overwriting existing properties?
// 9. Can you write a function in JavaScript to convert a string containing hyphens and underscores to camel case?
// 10. Can you write a function in JavaScript to count the occurrences of each element in an array and return the result as an object?

// <------------------------------1st Solution------------------------------->

const message = "wood00@@0222dw";
const messageOfInform = "Too hot to hoot";
const getPalindromeItem = (string) => {
  const cleanMessage = string.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  //means of [^]/g global expression check to a-z and A-z
  //special character are removed like !@#$%^&*

  const palindromeMessage = cleanMessage
    .split("") //split all word in part of words
    .reduce((acc, val) => val + acc, "");

  return cleanMessage === palindromeMessage;
};

console.log(getPalindromeItem(messageOfInform));

// <----------------------------2nd Solution---------------------------->

const Profiles = [
  {
    name: "ABC",
    age: 45,
  },
  {
    name: "XZY",
    age: 34,
  },
  {
    name: "ZXC",
    age: 29,
  },
  {
    name: "ERT",
    age: 16,
  },
];

const getChildToYoung = (object, key) => {
  const getProfileByAge = object.sort((a, b) => a[key] - b[key]);
  return getProfileByAge;
};

console.log(getChildToYoung(Profiles, "age"));
