// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

function longestCommonPrefix(strs) {
  // If the array is empty, return an empty string
  if (!strs.length) return "";

  // Assume the first string is the longest common prefix
  let prefix = strs[0];

  // Loop through the remaining strings
  for (let i = 1; i < strs.length; i++) {
    // While the current string doesn't start with the prefix (using indexOf)
    while (strs[i].indexOf(prefix) !== 0) {
      // Remove the last character from the prefix
      prefix = prefix.slice(0, -1);

      // If prefix becomes empty, there's no common prefix
      if (!prefix) return "";
    }
  }

  // Return the longest common prefix found
  return prefix;
}
console.log(longestCommonPrefix(["flower", "flow", "flight"]));
