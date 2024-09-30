console.log("Grp");

// <-------------------------------------Object of Array with 7 elements------------------------------>

const friends = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Charlie", age: 28 },
  { id: 4, name: "David", age: 22 },
  { id: 5, name: "Eve", age: 40 },
  { id: 6, name: "Frank", age: 27 },
  { id: 7, name: "Grace", age: 29 },
];

// <-------------------------------------Object of Array with profile info------------------------------>

const myProfile = [
  {
    firstName: "Panchal",
    lastName: "Darshan",
    age: 20,
    job: "Web Developer",
  },
  {
    firstName: "XYZ",
    lastName: "Deepak",
    age: 40,
    job: "Project Manager",
  },
  {
    firstName: "Patel",
    lastName: "Krish",
    age: 24,
    job: "Data Analyst",
  },
  {
    firstName: "ZZZ",
    lastName: "Joanny",
    age: 24,
    job: "Graphic Designer",
  },
];

// <-------------------------------------1st question answer------------------------------>

function getSortedArray(numbers, order = "ascending") {
  const sortedArray = [...numbers]; // Create a copy of the original array

  sortedArray.sort((a, b) => {
    return order === "ascending" ? a - b : b - a;
  });

  return sortedArray;
}

const numbersToSort = [2, 6, 15, 7, 4, 23, 13];

console.log(getSortedArray(numbersToSort, "ascending")); // Sorting array in ascending order
console.log(getSortedArray(numbersToSort, "descending")); // Sorting array in descending order

// <-------------------------------------2nd question answer------------------------------>

function getFirstFiveFriends() {
  return friends.slice(0, 5);
}

console.log(getFirstFiveFriends());

// <-------------------------------------3rd question answer------------------------------>

function replaceFifthIndexColor() {
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

  updatedColors[5] = "Rainbow"; // Replace the color at index 5 (6th element)

  return updatedColors;
}

console.log(replaceFifthIndexColor());

// <-------------------------------------4th question answer------------------------------>

function getItemsUpToSeventhIndex() {
  const numberArray = [11, 22, 33, 44, 55, 66, 77, 88, 99, 111];

  return numberArray.slice(0, 7); // Get items up to the seventh index
}

console.log(getItemsUpToSeventhIndex());

// <-------------------------------------5th question answer------------------------------>

function findProfileByAge(age) {
  const profile = myProfile.find((profile) => profile.age === age);
  return profile || null; // profile is false than Return null
}

// Filtering profiles with age of exactly forty
console.log(findProfileByAge(40));
