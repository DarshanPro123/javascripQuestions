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
      // if number is not in uniqueNumbers array
      uniqueNumbers.push(item);
    }
  });
  return uniqueNumbers;
};

console.log(removeDuplicateElements(numbers));

// 2. How to Find if Two Arrays Contain any Common Item in JavaScript?
const array1 = [1, 2, 3, 4, 5];
const array2 = [6, 7, 8, 2, 3, 5, 10];

const checkCommonItem = () => {
  const notCommon = array1.includes(array2); //another value
  const common = array1.some((item) => array2.includes(item)); // 2,3,5 : true
  return common;
};

console.log(checkCommonItem());

// 3. How to merge two arrays and remove duplicate items in JavaScript ?
const item1 = [1, 2, 3, 4, 5];
const item2 = [6, 7, 8, 2, 10];

const mergeItems = () => {
  const mergeItems = [...new Set([...item1, ...item2])];
  return mergeItems;
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
const Profile1 = {
  name: "John",
  surname: "semos",
  age: 30,
};

console.log(Profile1);

//another way 2:-

const Profile2 = new Object();
Profile2.name = "John";

console.log(Profile2);
