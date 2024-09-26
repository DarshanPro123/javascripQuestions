console.log("Grp");

// 1. Defined array with 6 elements and add an element at 1st, 4th and last position.
// 3. Defined array with 6 elements and remove an element from 4th position using any 2 solutions.
// 4. Define 2 arrays and merge both arrays using any 2 solutions.
// 5. Create array of objects with properties firstname, lastname and age and add 1 property(job) in every object.
// 6. Create array of objects with properties firstname, lastname and age and remove item if item’s age is 40.

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

const jobs = ["ReactDev", "DajngoDev", "FrontEndDev", "BackendDev"];

function addElement() {
  const addArr = [1, "darshan", 2, 4, 4, 6];
  // copy of array
  const updatedArr = [...addArr];
  //att first position
  updatedArr.unshift(3);
  //at fourth position
  updatedArr.splice(3, 2, "ds");
  updatedArr.push("Lss");
  return updatedArr;
}

//first solution ---->
function deletefrthEle() {
  const num = [1, 5, 334, 57, 5467, 346];
  num.splice(3, 1); //splice 4th position array
  return num;
}

//secound solution---->

function delEleByslice() {
  const sol2 = [1, 5, 334, 57, 5467, 346];
  const indx = 3;
  const deleteEle = [...sol2.slice(0, indx), ...sol2.slice(indx + 1)];
  return deleteEle;
}

// 1st solution--------->

function mergingArrConc() {
  const dem1 = [1, 2, 4, 5, 6, 7];
  const demo2 = ["d", "a", "r", "s", "h", "a", "n"];
  const mixed = dem1.concat(demo2);
  return mixed;
}

//2nd solution---------->

function addArrayBySpred() {
  const demA = [1, 2, 4, 5, 6, 7];
  const demoB = ["d", "a", "r", "s", "h", "a", "n"];
  const mixed2 = [...demA, ...demoB];
  return mixed2;
}

function addPropertie(jobs) {
  const mydatta = myprofile.map((profile, index) => {
    return { ...profile, job: jobs[index] };
  });
  return mydatta;
}

const allprofiles = [...myprofile];

function youngPeopleshow() {
  const newProfile = allprofiles.filter((profile) => profile.age !== 40);
  return newProfile;
}

//1.

console.log(addElement());

//2

//2.1-->
console.log(deletefrthEle());

//2.2-->
console.log(delEleByslice());

//3

//3.1-->
console.log(mergingArrConc());

//3.2-->
console.log(addArrayBySpred());

//4
console.log(addPropertie(jobs));

//5
console.log(youngPeopleshow());

// loops
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
// i++
//     continue;
//   } else {
//     console.log(i);
//   }
//   i++;
// }
