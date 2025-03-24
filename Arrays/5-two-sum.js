//Question - https://leetcode.com/problems/two-sum/description/
// Input: nums = [2,7,11,15], target = 9 Output: [0,1] Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
function twoSum(arr, target) {
  let obj = {};
  for (i = 0; i < arr.length; i++) {
    let num = target - arr[i];
    if (num in obj) return [obj[num], i];
    obj[arr[i]] = i;
  }
  console.log(obj);
}
console.log(twoSum([2, 7, 11, 15], 9));
