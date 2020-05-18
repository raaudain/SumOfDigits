// Good morning! Write a function called sumOfDigits. When given a positive integer, sumOfDigits returns the sum of its digits. Assume all numbers will be positive.

// For Example:
// console.log(sumOfDigits(23));  // <--- 5
// console.log(sumOfDigits(496)); // <--- 19

// sumOfDigits(23) returns 5 because 2 + 3 = 5
// sumOfDigits(496) returns 19 because 4 + 9 + 6 = 19

// console.log(sumOfDigits(23)); 
// console.log(sumOfDigits(496));

function sumOfDigits(num) {
  // Convert integer into string then separate each number with split.  Split puts numbers into an array. 
  const numArr = num.toString().split("");
  
  // Using reduce to add the numbers in numArr.  Had to convert numSum to an integer so adding is possible.
  const numTotal = numArr.reduce((acc,numSum) => acc+=Number(numSum),0);

  return numTotal;
}

// sumOfDigits(23);
sumOfDigits(496);