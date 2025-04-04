//Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

// Example 1:
// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [5,6]

var findDisappearedNumbers = function (arr) {
  let result = [];

  // First pass: mark the indices corresponding to the numbers seen as negative
  for (let i = 0; i < arr.length; i++) {
    // Get the index corresponding to the current number (adjusted for 0-based index)
    let index = Math.abs(arr[i]) - 1; //But arr[i] might already be negative (if it was marked previously). So arr[i] - 1 will be incorrect when arr[i] is negative.

    // Only mark the number if it's not already marked
    if (arr[index] > 0) {
      arr[index] *= -1; // Mark as visited by making it negative
    }
  }

  // Second pass: the indices with positive numbers are the missing numbers
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      // If value at index i is still positive, then (i + 1) was missing from the array
      result.push(i + 1);
    }
  }

  // Return all missing numbers
  return result;
};

// Example usage
console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1])); // Output: [5, 6]
