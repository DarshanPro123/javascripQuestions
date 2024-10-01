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
const messageOfPalindrom = "Too hot to hoot";
const isPalindromeItem = (string) => {
  const cleanMessage = string.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  //means of [^]/g global expression check to a-z and A-z
  //special character are removed like !@#$%^&*

  const palindromeMessage = cleanMessage
    .split("") //split all word in part of words ["M", "A", "D", "A", "M"]
    .reduce((acc, val) => val + acc, "");
  //    M + ""
  //    A + M
  //    D + AM
  //    A + DAM
  //    M + ADAM

  return cleanMessage === palindromeMessage;
};

console.log(isPalindromeItem("MADAM"));
console.log(isPalindromeItem(messageOfPalindrom));

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

const getSortingItem = (object, key) => {
  const getProfileByAge = object.sort((a, b) => a[key] - b[key]);
  return getProfileByAge;
};

console.log(getSortingItem(Profiles, "age"));

// <----------------------------3rd Solution---------------------------->

const carsInfo = {
  name: "Toyota",
  model: "Camry",
  year: 2021,
  color: ["Blue"],
  mileage: 15000,
};
const colors = ["red", "white", "black", "gray"];

let a = {
  name: "Toyota",
  model: "Camry",
  year: 2021,
  color: ["Blue"],
  mileage: 15000,
};

const getClonedObj = (data) => {
  return JSON.parse(JSON.stringify(data));
};

let b = getClonedObj(a);
b.name = "Hyundai";
console.log(a.name);

const getDeepCloneItem = (itemsObject, items) => {
  const cloneItems = { ...itemsObject };
  cloneItems.color.push(...items);
  return cloneItems;
};

console.log(getDeepCloneItem(carsInfo, colors));

// <----------------------------4th Solution---------------------------->

const getAnagramItem = (item1, item2) => {
  const cloneItem1 = item1.toLowerCase().split("").sort().join("");
  const cloneItem2 = item2.toLowerCase().split("").sort().join("");
  return cloneItem1 === cloneItem2;
};

console.log(getAnagramItem("cat", "act"));

// <----------------------------5th Solution---------------------------->
// Write a JavaScript program to list the properties of a JavaScript object.
const myProfile = {
  name: "XZD",
  age: 34,
  height: 300,
  weight: 60,
  skill: "Swiming",
};
console.log(myProfile);

const getProperties = (object) => {
  const getProfile = Object.keys(object);
  //   const getProfile = Object.values(object).map((key) => key); it's print values of object
  return getProfile;
};

console.log(getProperties(myProfile));

// <----------------------------6th Solution---------------------------->

const student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12,
};

console.log("Original student object:", student);

const removePropertie = (object) => {
  // Create a new object to avoid mutating the original
  const { rollno, ...updatedObject } = object; // remove OR Dstrucring->> "roll no" using rest oprator
  return updatedObject;
};

console.log(removePropertie(student));

// <----------------------------7th Solution---------------------------->

const getStudent = { ...student };

const getSwipeProperties = (object) => {
  const swappedObject = {};

  for (const key in object) {
    // swaping two value in each other

    const value = object[key];
    swappedObject[value] = key;
  }
  return swappedObject;
};

console.log(getSwipeProperties(getStudent));

// <----------------------------8th Solution---------------------------->
//Can you write a function in JavaScript to merge two objects without overwriting existing properties?

const students = {
  name: "XYZ",
  school: "abc",
  rollNO: 12,
  sClass: "9th",
};
const teacher = {
  teacherName: "YYz",
  school: "BabyBaba",
  mediam: "Hindi",
  sClass: "9th",
};

const getMergeItems = (object1, object2) => {
  const mergeItems = { ...object1, ...object2 };
  return mergeItems;
};

console.log(getMergeItems(students, teacher));

// <----------------------------9th Solution---------------------------->
//Can you write a function in JavaScript to convert a string containing hyphens and underscores to camel case?
const message1 = "hello-panchal";
const message2 = "hello-panchal";
const message3 = "My_word_is_perfect";

const getCamelCaseItem = (item) => {
  const camelCaseItem = item // hello-panchal
    .split(/[-_]/) // remove or split that from string
    .map((char, i) => {
      if (i === 0) {
        return char;
      }
      return char.charAt(0).toUpperCase() + char.slice(1).toLowerCase();
    })
    .join(""); /// to array to string convert

  return camelCaseItem;
};

console.log(getCamelCaseItem(message3));

// <----------------------------10th Solution---------------------------->

const fruitsShop = [
  "apple",
  "banana",
  "Gavava",
  "orange",
  "apple",
  "banana",
  "apple",
  "banana",
  "orange",
];

const countItems = (items) => {
  const counter = {};

  items.map((item) => {
    if (counter[item]) {
      counter[item] += 1;
    } else {
      counter[item] = 1;
    }
  });

  return counter;
};

console.log(countItems(fruitsShop));
