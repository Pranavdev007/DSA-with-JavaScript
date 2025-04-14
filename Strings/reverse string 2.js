// Given a string s and an integer k, reverse the first k characters for every 2k characters counting from the start of the string.

// If there are fewer than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and leave the other as original.

// Example 1:

// Input: s = "abcdefg", k = 2
// Output: "bacdfeg"
// Example 2:

// Input: s = "abcd", k = 2
// Output: "bacd"

var reverseStr = function (s, k) {
  // Convert the input string to an array to allow in-place modification
  s = s.split("");
  let n = s.length;

  // Iterate over the string in chunks of 2k
  for (let i = 0; i < n; i += 2 * k) {
    // Set the start index of the portion to reverse
    let start = i;

    // Set the end index: reverse at most k characters, but don’t go past the end of the string
    let end = Math.min(n - 1, i + k - 1);

    // Reverse characters between start and end indices
    while (start < end) {
      // Swap the characters at start and end
      [s[start], s[end]] = [s[end], s[start]];
      start++;
      end--;
    }
  }
  // Convert the array back into a string and return it
  return s.join("");
};
console.log(reverseStr("abcdefg"));
