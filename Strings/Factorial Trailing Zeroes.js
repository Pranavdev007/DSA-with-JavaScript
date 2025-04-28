// Given an integer n, return the number of trailing zeroes in n!.

// Example 1:

// Input: n = 3
// Output: 0
// Explanation: 3! = 6, no trailing zero.
// Example 2:

// Input: n = 5
// Output: 1
// Explanation: 5! = 120, one trailing zero.

var trailingZeroes = function (n) {
  let count = 0; // Initialize count of trailing zeros

  // Keep dividing n by 5 and add the result to count
  while (n >= 5) {
    n = Math.floor(n / 5); // Divide n by 5 and discard any decimal part
    count += n; // Add the quotient to the count
  }

  return count; // Return the total number of trailing zeros
};
console.log(trailingZeroes(20));
