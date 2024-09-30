// 7. Create an array of numbers and sort array in ascending and descending order.
// 8. Create an array of object with 7 elements and print array with first 5 elements.
// 9. Create an array of strings with 7 elements and replace any string of 5th index.
// 10. Create an array with 10 elements and print items till 7th index only.
// 11. Create array of objects with properties firstname, lastname and age and get the item if item’s age is 40 and print it.

// <-------------------------------------Object of Array with 7 element------------------------------>

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

const myprofile = [
  {
    frstname: "Panchal",
    lastname: "darshan",
    age: 20,
  },
  {
    frstname: "xyz",
    lastname: "deepak",
    age: 40,
  },
  {
    frstname: "patel",
    lastname: "krish",
    age: 24,
  },
  {
    frstname: "zzz",
    lastname: "joanny",
    age: 24,
  },
];

// <-------------------------------------1st question answer------------------------------>

function sortingAsen() {
  const withOutsort = [2, 6, 35, 7, 4, 53, 23];

  withOutsort.sort((a, b) => a - b);
  return withOutsort;
}

console.log(sortingAsen()); // sorting array in assending

function sortingDesen() {
  const withOutsort = [2, 6, 35, 7, 4, 53, 23];

  withOutsort.sort((a, b) => b - a);

  return withOutsort;
}
//sorting array in descending order with first value and secound value which b is big than a so it's first and a is secound

console.log(sortingDesen());

// .. .. .. .  .  .  .. .. .
// .. .. .. .  .  .  .. .. .
// .. .. .. .  .  .  .. .. .
// .. .. .. .  .  .  .. .. .
// .. .. .. .  .  .  .. .. .
// .. .. .. .  .  .  .. .. .
// .. .. .. .  .  .  .. .. .

// <-------------------------------------2nd question answer------------------------------>

function objeArray() {
  const cpyFriend = friends.slice(0, 5);
  return cpyFriend;
}

console.log(objeArray());

// .. .. .. .  .  .  .. .. .
// .. .. .. .  .  .  .. .. .
// .. .. .. .  .  .  .. .. .
// .. .. .. .  .  .  .. .. .
// .. .. .. .  .  .  .. .. .
// .. .. .. .  .  .  .. .. .
// .. .. .. .  .  .  .. .. .

// <-------------------------------------3rd question answer------------------------------>

function replaceChange() {
  const withOutReplace = ["a", "b", "c", "d", "e", "f", "g"];
  const cpyAlpha = [...withOutReplace];

  //   withOutReplace[5] = "replace";
  //   return withOutReplace;

  cpyAlpha.splice(5, 1, "Rainbow");
  return cpyAlpha;
}

console.log(replaceChange());

// .. .. .. .  .  .  .. .. .
// .. .. .. .  .  .  .. .. .
// .. .. .. .  .  .  .. .. .
// .. .. .. .  .  .  .. .. .
// .. .. .. .  .  .  .. .. .
// .. .. .. .  .  .  .. .. .
// .. .. .. .  .  .  .. .. .

// <-------------------------------------4th question answer------------------------------>

function desidedValue() {
  const num = [11, 22, 33, 44, 55, 66, 77, 88, 99, 111];

  const numOf7th = num.slice(0, 7);
  return numOf7th;
}

console.log(desidedValue());

// .. .. .. .  .  .  .. .. .
// .. .. .. .  .  .  .. .. .
// .. .. .. .  .  .  .. .. .
// .. .. .. .  .  .  .. .. .
// .. .. .. .  .  .  .. .. .
// .. .. .. .  .  .  .. .. .
// .. .. .. .  .  .  .. .. .

// <-------------------------------------5th question answer------------------------------>

function ProfileCheck() {
  const greaterThan40 = myprofile.filter((mypro) => mypro.age === 40);

  return greaterThan40;
}

console.log(ProfileCheck());
