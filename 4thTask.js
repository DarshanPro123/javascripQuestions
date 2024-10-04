console.log("object");
console.clear();

// 1. Remove Duplicate Elements from JavaScript Array.
const randomCoins = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5];

const removeDuplicateElements = (items) => {
  return [...new Set(items)]; // Using Set to remove duplicates
};

console.log("remover", removeDuplicateElements(randomCoins));

// 2. How to Find if Two Arrays Contain any Common Item in JavaScript?
const array1 = [1, 2, 3, 4];
const array2 = [6, 7, 8, 2, 3, 5, 10];

const checkCommonItem = () => {
  return array1.some((item) => array2.includes(item));
};

console.log("common", checkCommonItem());

// 3. How to merge two arrays and remove duplicate items in JavaScript?
const item1 = [1, 2, 3, 4, 5];
const item2 = [6, 7, 8, 2, 10];

const mergeItems = () => {
  return [...new Set([...item1, ...item2])]; // Merge and remove duplicates using Set
};

console.log("merged without duplicates", mergeItems());

// 4. Most Frequent Element in an Array using JavaScript.
const randomNumbers = [1, 2, 2, 2, 3, 4, 5, 1];
const shopItems = ["bag", "car", "ball", "bag", "ball"];

const getFrequentItem = (items) => {
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

console.log("max frequent number:", getFrequentItem(randomNumbers));
console.log("max frequent item:", getFrequentItem(shopItems));

//5. Create objects in four different ways in JavaScript.
const person1 = {
  name: "John",
  surname: "Semos",
  age: 30,
};

console.log("person1", person1);

// Another way: Object constructor
const person2 = new Object();
person2.name = "Jane";
person2.age = 25;

console.log("person2", person2);

// Another way: Function constructor
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const person3 = new Person("Alice", 28);
console.log("person3", person3);

// Way using Object.create()
const profilePrototype = {};
const person4 = Object.create(profilePrototype);
person4.name = "Bob";
person4.age = 35;

console.log("person4", person4);

//6. How to convert a two-dimensional array into an object in JavaScript
const elementArray = [
  [123, "number"],
  ["string", "ABC"],
  ["mixes", "123Abc"],
];

const elementObject = Object.fromEntries(elementArray);
console.log("Converted object:", elementObject);

//7. JavaScript Program to Check if a Given Year is a Leap Year.
const yearToCheck = 1881;

const isLeapYear = (year) => {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};

console.log(`Is ${yearToCheck} a leap year?`, isLeapYear(yearToCheck));

//8. How to check if one date is between two dates in JavaScript?
const targetDate = new Date("2024-05-15"); // Date to check
const startDate = new Date("2024-05-01"); // Start of range
const endDate = new Date("2024-05-31"); // End of range

const isDateInRange = (dateToCheck, startDate, endDate) => {
  return dateToCheck >= startDate && dateToCheck <= endDate;
};

console.log("Date is in range:", isDateInRange(targetDate, startDate, endDate));

//9. How to format numbers as currency string in JavaScript?
const numberToFormat = 123456.789;
const formattedCurrency = numberToFormat.toLocaleString("IND", {
  style: "currency",
  currency: "INR",
});
console.log(formattedCurrency);

//10. How to find the longest word within the string in JavaScript?
const textString = "The abc abcsddddddddd abbbbbb anssdsdfsdff dsfsdgreg ";

const getLongestWordValue = (item) => {
  const words = item.split(" ");
  let longestWord = "";

  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word; // Update longest word if current word is longer
    }
  }

  return longestWord;
};

console.log(getLongestWordValue(textString));
