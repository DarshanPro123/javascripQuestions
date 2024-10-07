console.clear();

// 1. Calculate the Number of Days Between Two Dates
// 2. Write a function to find the largest numbers that can be formed by swapping two numbers of a given number.
// 3. Write a function to calculate the nth number in the Tribonacci sequence.

const firstDate = new Date("2020-09-01");

const lastDate = new Date("2020-09-12");

const calculateDays = (firstDate, lastDate) => {
  const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  const diffDays = Math.round(Math.abs((firstDate - lastDate) / oneDay));
  return diffDays;
};

console.log(calculateDays(firstDate, lastDate));

//2. Write a function to find the largest numbers that can be formed by swapping two numbers of a given number.

const swapNumbers = (num) => {
  const numStr = num.toString().split("");
  const maxNum = numStr
    .slice()
    .sort((a, b) => b - a)
    .join("");
  return maxNum;
};

console.log(swapNumbers(2342));

//3. Write a function to calculate the nth number in the Tribonacci  sequence.

const getTribonacci = (n) => {
  const tribonacci = [0, 0, 1];
  for (let i = 3; i <= n; i++) {
    tribonacci[i] = tribonacci[i - 1] + tribonacci[i - 2] + tribonacci[i - 3];
  }
  return tribonacci[n];
};

console.log(getTribonacci(12));
