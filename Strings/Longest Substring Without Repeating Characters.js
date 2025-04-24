// Example 1:
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// Example 2:
// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

var lengthOfLongestSubstring = function (s) {
  let max = 0;
  let set = new Set();
  let left = 0;
  let right = 0;
  while (right < s.length) {
    let letter = s[right];
    if (!set.has(letter)) {
      set.add(letter);
      max = Math.max(max, set.size);
      right++;
    } else {
      set.delete(s[left]);
      left++;
    }
  }
  return max;
};
