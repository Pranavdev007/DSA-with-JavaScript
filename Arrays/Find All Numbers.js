//Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

// Example 1:
// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [5,6]

var findDisappearedNumbers = function (arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let index = arr[i] - 1;
    if (arr[index] < 0) continue;
    arr[index] *= -1;
  }
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > 0) result.push(i);
  }
  return result;
};
console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));
