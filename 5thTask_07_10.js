console.clear();

// 1. Calculate the Number of Days Between Two Dates
// 2. Write a function to find the largest numbers that can be formed by swapping two numbers of a given number.
// 3. Write a function to calculate the nth number in the Tribonacci sequence.

const firstDate = new Date("2024-10-01");

const lastDate = new Date("2024-10-30");
console.log(firstDate);

const getDaysByDates = (firstDate, lastDate) => {
  const oneDay = 24 * 60 * 60 * 1000;
  const diffrentDate = Math.abs((firstDate - lastDate) / oneDay);
  return diffrentDate;
};

console.log(getDaysByDates(firstDate, lastDate));

//2. Write a function to find the largest numbers that can be formed by swapping two numbers of a given number.

const getMaximumValue = (num) => {
  const stringValue = num.toString().split("");
  const maximumValue = stringValue.sort((a, b) => b - a).join("");
  return maximumValue;
};

console.log(getMaximumValue(54324));

//3. Write a function to calculate the nth number in the Tribonacci  sequence.

const getTribonacci = (n) => {
  const item = [0, 0, 1];
  if (n < 3) {
    return item[n];
  }
  for (let i = 3; i <= n; i++) {
    item[i] = item[i - 1] + item[i - 2] + item[i - 3];
  }
  return item[n];
};

console.log(getTribonacci(1));
