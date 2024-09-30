console.log("Grp");

// 1. Define an array with 6 elements and add an element at 1st, 4th, and last position.

// <-------------------------------------1st question answer------------------------------>

function addElementToArray() {
  const initialArray = [1, "darshan", 2, 4, 4, 6];
  // Copy of array
  const updatedArray = [...initialArray];
  // Add at first position
  updatedArray.unshift(3);
  // Add at fourth position
  updatedArray.splice(3, 2, "ds");
  updatedArray.push("Lss");
  return updatedArray;
}

// <-------------------------------------2nd question answer------------------------------>

// First solution ---->
function removeFourthElement() {
  const numberArray = [1, 5, 334, 57, 5467, 346];
  numberArray.splice(3, 1); // Remove the element at the fourth position
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

// <-------------------------------------3rd question answer------------------------------>

// Merging arrays - First solution --------->
function mergeArraysUsingConcat() {
  const firstArray = [1, 2, 4, 5, 6, 7];
  const secondArray = ["d", "a", "r", "s", "h", "a", "n"];
  const mergedArray = firstArray.concat(secondArray);
  return mergedArray;
}

// Merging arrays - Second solution ---------->
function mergeArraysUsingSpread() {
  const arrayA = [1, 2, 4, 5, 6, 7];
  const arrayB = ["d", "a", "r", "s", "h", "a", "n"];
  const mergedArrayUsingSpread = [...arrayA, ...arrayB];
  return mergedArrayUsingSpread;
}

// <-------------------------------------4th question answer------------------------------>

// Adding job property to objects
function addJobPropertyToProfiles(jobs) {
  const profilesWithJobs = myProfile.map((profile, index) => {
    return { ...profile, job: jobs[index] };
  });
  return profilesWithJobs;
}

const allProfilesCopy = [...myProfile];

// <-------------------------------------5th question answer------------------------------>

// Removing items based on age
function filterProfilesByAge() {
  const filteredProfiles = allProfilesCopy.filter(
    (profile) => profile.age !== 40
  );
  return filteredProfiles;
}

// Execute functions and log results

// Adding elements to an array
console.log(addElementToArray());

// Deleting fourth element - two solutions
console.log(removeFourthElement());
console.log(removeElementBySlice());

// Merging arrays - two solutions
console.log(mergeArraysUsingConcat());
console.log(mergeArraysUsingSpread());

// Adding job properties to profiles
console.log(addJobPropertyToProfiles(jobs));

// Filtering young people profiles
console.log(filterProfilesByAge());

// Loops (commented out as per original code)
// for (let i = 0; i <= 20; i++) {
//   if (i === 4 || i === 5) {
//     continue;
//   } else {
//     console.log(i);
//   }
// }

// let i = 0;
// while (i < 10) {
//   if (i === 4) {
//     i++;
//     continue;
//   } else {
//     console.log(i);
//   }
//   i++;
// }
