console.log("Grp");

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

// 1. Define an array with 6 elements and add an element at 1st, 4th, and last position.
function addNewCar() {
  const CarsList = ["Audi", "Bmw", "Toyota", "Mahindra", "Dodge", "Hyundai"];

  // Copy of array
  const updatedArray = [...CarsList];

  // Add at first position
  updatedArray.unshift("Aston Martin");

  // Add at fourth position (corrected index)
  updatedArray.splice(3, 0, "Bentley"); // Change from '2' to '0' to insert without removing

  // Add at last position
  updatedArray.push("Dodge");

  return updatedArray;
}
// Adding elements to an array
console.log(addNewCar());

// <-------------------------------------2nd question answer------------------------------>

// First solution ---->
function removeFourthElement() {
  const numberArray = [1, 5, 334, 57, 5467, 346];

  // Remove the element at the fourth position
  numberArray.splice(3, 1);

  return numberArray;
}

// Second solution ---->
function removeElementBySlice() {
  const numberList = [1, 5, 334, 57, 5467, 346];

  const indexToRemove = 3;

  const updatedList = [
    ...numberList.slice(0, indexToRemove),
    ...numberList.slice(indexToRemove + 1),
  ];

  return updatedList;
}
// Deleting fourth element - two solutions
console.log(removeFourthElement());
console.log(removeElementBySlice());

// <-------------------------------------3rd question answer------------------------------>

// Merging arrays - First solution --------->
const fruits = ["apple", "banana", "orange", "grape", "kiwi"];
const vegetables = [
  "Beets",
  "Carrots",
  "Broccoli",
  "Asparagus",
  "Garlic",
  "Celeriac",
  "Radishes",
];

function mergeArraysUsingConcat(fruits, vegetables) {
  const shop = fruits.concat(vegetables);
  return shop;
}

// Merging arrays - Second solution ---------->
function mergeArraysUsingSpread(fruits, vegetables) {
  const mergedArrayUsingSpread = [...fruits, ...vegetables];
  return mergedArrayUsingSpread;
}

// Merging arrays - two solutions
console.log(mergeArraysUsingConcat(fruits, vegetables));
console.log(mergeArraysUsingSpread(fruits, vegetables));

// <-------------------------------------4th question answer------------------------------>

// Adding job property to objects
function addJobPropertyToProfiles(jobs) {
  const profilesWithJobs = myProfile.map((profile, index) => {
    return { ...profile, job: jobs[index] || "Unknown" }; // Added for jobs
  });
  return profilesWithJobs;
}

const jobs = ["Engineer", "Doctor", "Artist", "Teacher"]; // Example job array
const allProfilesCopy = [...myProfile];
// Adding job properties to profiles
console.log(addJobPropertyToProfiles(jobs));

// <-------------------------------------5th question answer------------------------------>

// Removing items based on age
function filterProfilesByAge() {
  const filteredProfiles = allProfilesCopy.filter(
    (profile) => profile.age !== 40
  );
  return filteredProfiles;
}
// Filtering young people profiles
console.log(filterProfilesByAge());
