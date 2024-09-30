// 7. Create an array of numbers and sort array in ascending and descending order.
// 8. Create an array of object with 7 elements and print array with first 5 elements.
// 9. Create an array of strings with 7 elements and replace any string of 5th index.
// 10. Create an array with 10 elements and print items till 7th index only.
// 11. Create array of objects with properties firstname, lastname and age and get the item if item’s age is 40 and print it.

// <-------------------------------------Object of Array with 7 elements------------------------------>

const friends = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Charlie", age: 28 },
  { id: 4, name: "David", age: 22 },
  { id: 5, name: "Eve", age: 35 },
  { id: 6, name: "Frank", age: 27 },
  { id: 7, name: "Grace", age: 29 },
];

// <-------------------------------------Object of Array with profile info------------------------------>

const myProfile = [
  {
    firstName: "Panchal",
    lastName: "Darshan",
    age: 20,
  },
  {
    firstName: "XYZ",
    lastName: "Deepak",
    age: 40,
  },
  {
    firstName: "Patel",
    lastName: "Krish",
    age: 24,
  },
  {
    firstName: "ZZZ",
    lastName: "Joanny",
    age: 24,
  },
];

// <-------------------------------------1st question answer------------------------------>

function getSortArray(times, order = "ascending") {
  const time = [...times]; // Create a copy of the original array

  time.sort((a, b) => {
    //ternary operator
    return order === "ascending" ? a - b : b - a;
  });

  return time;
}

const getTime = [2, 6, 15, 7, 4, 23, 13];

console.log(getSortArray(getTime, "ascending")); // Sorting array in ascending order
console.log(getSortArray(getTime, "descending")); // Sorting array in descending order

// <-------------------------------------2nd question answer------------------------------>

function getFirstFiveFriends() {
  const firstFiveFriends = friends.slice(0, 5);

  return firstFiveFriends;
}

console.log(getFirstFiveFriends());

// <-------------------------------------3rd question answer------------------------------>

function replaceFifthColor() {
  const colors = [
    "red",
    "blue",
    "black",
    "darkblue",
    "white",
    "green",
    "darkgreen",
  ];

  const updatedColors = [...colors];

  updatedColors.splice(5, 1, "Rainbow");

  return updatedColors;
}

console.log(replaceFifthString());

// <-------------------------------------4th question answer------------------------------>

function getItemsUpToSeventhIndex() {
  const numberArray = [11, 22, 33, 44, 55, 66, 77, 88, 99, 111];

  const itemsUpToSeventh = numberArray.slice(0, 7);

  return itemsUpToSeventh;
}

console.log(getItemsUpToSeventhIndex());

// <-------------------------------------5th question answer------------------------------>

function checkProfilesByAge() {
  const profilesAtForty = myProfile
    .filter((profile) => profile.age === 40)
    .map((profile) => profile.age);

  return profilesAtForty;
}

console.log(checkProfilesByAge());
