// 1. Defined array with 6 elements and add an element at 1st, 4th and last position.
// 3. Defined array with 6 elements and remove an element from 4th position using any 2 solutions.
// 4. Define 2 arrays and merge both arrays using any 2 solutions.
// 5. Create array of objects with properties firstname, lastname and age and add 1 property(job) in every object.
// 6. Create array of objects with properties firstname, lastname and age and remove item if item’s age is 40.

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
function addCar() {
  const cars = ["Audi", "Bmw", "Toyota", "Mahindra", "Dodge", "Hyundai"];

  // Copy of array
  const updatedCar = [...cars];

  // Add at first position
  updatedCar.unshift("Aston Martin");

  // Add at fourth position
  updatedCar.splice(3, 0, "Bentley");

  // Add at last position
  updatedCar.push("Tesla");

  return updatedCar;
}

// Adding elements to an array
console.log(addCar());

// <-------------------------------------2nd question answer------------------------------>

// First solution ---->
function removeElementAtFourthPosition() {
  const numbers = [1, 5, 334, 57, 5467, 346];

  // Remove the element at the fourth position
  numbers.splice(3, 1);

  return numbers;
}

// Second solution ---->
function removeElement() {
  const numberList = [1, 5, 334, 57, 5467, 346];

  const indexToRemove = 3;

  const updatedList = [
    ...numberList.slice(0, indexToRemove),
    ...numberList.slice(indexToRemove + 1),
  ];

  return updatedList;
}

// Deleting fourth element - two solutions
console.log(removeElement());
console.log(removeElement());

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

function mergeTwoArrays(firstArgument, SecoundArgument) {
  const combinedArray = firstArgument.concat(SecoundArgument);
  return combinedArray;
}

// Merging arrays - Second solution ---------->
function mergeTwoArraysUsingSpread(fruits, vegetables) {
  const mergedArrayUsingSpread = [...fruits, ...vegetables];
  return mergedArrayUsingSpread;
}

// Merging arrays - two solutions
console.log(mergeTwoArrays(fruits, vegetables));
console.log(mergeTwoArraysUsingSpread(fruits, vegetables));

// <-------------------------------------4th question answer------------------------------>

// Adding job property to objects
function assignJobsToProfiles(jobs) {
  const profilesWithJobs = myProfile.map((profile, index) => {
    return { ...profile, job: jobs[index] || "Unknown" }; // Added for jobs
  });
  return profilesWithJobs;
}

const jobs = [
  "Software Developer",
  "Data Scientist",
  "Graphic Designer",
  "Project Manager",
]; // Updated job titles
const allProfilesCopy = [...myProfile];

// Adding job properties to profiles
console.log(assignJobsToProfiles(jobs));

// <-------------------------------------5th question answer------------------------------>

// Removing items based on age
function filterProfilesByAgeExcluding40() {
  const filteredProfiles = allProfilesCopy.filter(
    (profile) => profile.age !== 40
  );
  return filteredProfiles;
}

// Filtering young people profiles
console.log(filterProfilesByAgeExcluding40());
