console.log("object");
console.clear();
// 1. Remove Duplicate Elements from JavaScript Array.
// 2. How to Find if Two Arrays Contain any Common Item in JavaScript?
// 3. How to merge two arrays and remove duplicate items in JavaScript ?
// 4. Most Frequent Element in an Array using JavaScript.
// 5. Create objects in 4 different way JavaScript.
// 6. How to convert two-dimensional array into an object in JavaScript ?
// 7. JavaScript Program to Check if a Given Year is Leap Year.
// 8. How to check if one date is between two dates in JavaScript ?
// 9. How to format numbers as currency string in JavaScript ?
// 10. How to find the longest word within the string in JavaScript?

// 1. Remove Duplicate Elements from JavaScript Array.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5];

const removeDuplicateElements = (items) => {
  const uniqueNumbers = [];
  items.forEach((item) => {
    if (!uniqueNumbers.includes(item)) {
      uniqueNumbers.push(item);
    }
  });
  return uniqueNumbers;
};

console.log(removeDuplicateElements(numbers));

// 2. How to Find if Two Arrays Contain any Common Item in JavaScript?
const array1 = [1, 2, 3, 4];
const array2 = [6, 7, 8, 2, 3, 5, 10];

const checkCommonItem = () => {
  return array1.some((item) => array2.includes(item));
};

console.log("common", checkCommonItem());

// 3. How to merge two arrays and remove duplicate items in JavaScript ?
const item1 = [1, 2, 3, 4, 5];
const item2 = [6, 7, 8, 2, 10];

const mergeItems = () => {
  return new Set([...item1, ...item2]);
};

console.log(mergeItems());

// 4. Most Frequent Element in an Array using JavaScript.
const randomNumbers = [1, 2, 2, 2, 2, 2, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1];
const shopItems = ["bag", "car", "ball", "bag", "bag", "ball", "bag"];

const getFrequetItem = (items) => {
  let count = 1;
  let max = 0;
  let item;

  for (let i = 0; i < items.length; i++) {
    if (items[i] === items[i - 1]) {
      count++;
    } else {
      count = 1;
    }
    if (count > max) {
      max = count;
      item = items[i];
    }
  }
  return item;
};

console.log("max frequent number:", getFrequetItem(randomNumbers));
console.log("max frequent items:", getFrequetItem(shopItems));

//5.Create objects in 4 different way JavaScript.
const Person1 = {
  name: "John",
  surname: "semos",
  age: 30,
};

console.log("person1", Person1);

//another way 2:-
// object constructor
// new Object method
const person2 = new Object();
person2.name = "John";
person2.age = 23;
person2.name = "sdfgh"; //overwrite

console.log("person2", person2);

//another way3:-

// function wise object make

function setProfile3(value1, value2) {
  this.name = value1;
  this.age = value2;
}

const person3 = new setProfile3("ABC", 34);

console.log("person3", person3);

//way 4:

const Profile4 = {};

const person4 = Object.create(Profile4);

person4.name = "gg";
person4.age = 60;
console.log("person4", person4);

//6. How to convert two-dimensional array into an object in JavaScript

const Element1 = [
  ["number", 123],
  ["string", "ABC"],
  ["mixes", "123Abc"],
];

const Element2 = { ...Object.fromEntries(Element1) };
console.log(Element2);

//7.JavaScript Program to Check if a Given Year is Leap Year.

const year = 1881;

const isLeapYear = (year) => {
  if (year % 4 === 0 || year % 100 === 0 || year % 400 === 0) {
    return true;
  } else return false;
};

console.log(isLeapYear(year));

//8.How to check if
const targetDate = new Date("2024-05-15"); // Date to check
const startDate = new Date("2024-06-01"); // Start of range
const endDate = new Date("2024-05-31"); // End of range

const isDateInRange = (dateToCheck, startDate, endDate) => {
  return dateToCheck >= startDate && dateToCheck <= endDate;
};

console.log("Date is", isDateInRange(targetDate, startDate, endDate));

//9. How to format numbers as currency string in JavaScript ?

const number = 123456.789;
const formattedCurrency = number.toLocaleString("IND", {
  style: "currency",
  currency: "INR",
});
console.log(formattedCurrency);

//10. How to find the longest word within the string in JavaScript?

const word = "The abc abcsddddddddd abbbbbb anssdsdfsdff dsfsdgreg ";

const getLongestValue = (item) => {
  const words = item.split(" ");
  let longest = "";
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longest.length) {
      longest = words[i];
    }
  }

  return longest;
};

console.log(getLongestValue(word));
