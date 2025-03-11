// Ques 4: Maximum Count of Positive Integer and Negative Integer
// Given an array nums sorted in non-decreasing order, return the maximum between
// the number of positive integers and the number of negative integers.

// Input: nums = [-2,-1,-1,1,2,3]  ----->>>>>  Output: 3
// Explanation: There are 3 positive integers and 3 negative integers.
//              The maximum count among them is 3.

// [-2,-1,-1,1,2,3]
// low = 2 , high = 2
// mid = 3 => nums[3] = 1

console.log(maximumCount([-2, -1, -1, 1, 2, 3]));
// function maximumCount(nums) {
//   return Math.max(negative(nums), positive(nums));
// }
// function positive(nums) {
//   let start = 0;
//   let end = nums.length - 1;
//   while (start < end) {
//     let middle = Math.floor((start + end) / 2);
//     if (nums[middle] > 0) end = middle;
//     else start = middle + 1;
//   }
//   return nums[nums.length - 1] <= 0 ? 0 : nums.length - start;
// }
// function negative(nums) {
//   let start = 0;
//   let end = nums.length - 1;
//   while (start < end) {
//     let middle = Math.ceil((start + end) / 2);
//     if (nums[middle] < 0) start = middle;
//     else end = middle - 1;
//   }
//   return nums[0] >= 0 ? 0 : start + 1;
// }
