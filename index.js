console.log("Grp");

// 1. Defined array with 6 elements and add an element at 1st, 4th and last position.

const arr = [1, "darshan", 2, 4, 4, 6];

const newarr = [...arr]; // copy of array

newarr.unshift(3); //att first position

console.log(...newarr);

// it's splice using for 3 index to (3,1 it's stand for del that index value of current , add value or number)
newarr.splice(3, 2, "ds"); //at fourth position

console.log(newarr);

newarr.push("Lss");
console.log(newarr);

const data = arr.map((item, index) => {
  if (index === 0) {
    return "Firstele";
  } else if (index === 3) {
    return "fourth";
  } else if (index === 5) {
    return "last position";
  }

  return item;
});

console.log(data);

// 3. Defined array with 6 elements and remove an element from 4th position using any 2 solutions.

const arr1 = [1, 5, 334, 57, 5467, 346];
const demo1 = [...arr1];
demo1.splice(3, 1); //splice 4th position array
console.log(demo1);

const indx = 3;

const newarr1 = [...arr1.slice(0, indx), ...arr1.slice(indx + 1)];

//it's make with spread to arr1  first one is slice 0 index thhi 3 index pela na element and
//2nd wala ma index pachi na element spread thay che

console.log(newarr1);

// 4. Define 2 arrays and merge both arrays using any 2 solutions.
// 1st solution--------->

const dem1 = [1, 2, 4, 5, 6, 7];

const demo2 = ["d", "a", "r", "s", "h", "a", "n"];

const mixed = dem1.concat(demo2);
console.log(mixed);

//2nd solution---------->

const mixed2 = [...dem1, ...demo2];
console.log(mixed2);

// 5. Create array of objects with properties firstname, lastname and age and add 1 property(job) in every object.

const myinfo = [
  {
    frstname: "Panchal",
    lastname: "darshan",
    age: 20,
  },
];

const myinfoadd = { ...myinfo, job: "React" };
console.log(myinfoadd);

// 6. Create array of objects with properties firstname, lastname and age and remove item if item’s age is 40.

const allprofiles = [
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

const { age } = allprofiles;

const newProfile = [
  ...allprofiles,
  allprofiles.filter((profile) => profile.age !== 40),
];

console.log(...newProfile);
