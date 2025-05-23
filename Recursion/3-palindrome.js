// Ques 3 : Given an integer x, return true if x is a palindrome, and false otherwise.
// Input: x = 121      ----->>>>>      Output: true;

function isPalindrome(str) {
  // str = str.replace(/[^a-z0-9]/i, "").toLowerCase();
  const len = str.length;

  if (len <= 1) return true;
  if (str[0] !== str[len - 1]) return false;
  return isPalindrome(str.slice(1, -1));
}

console.log(isPalindrome("121"));

// When Input is Number

// var isPalindrome = function (num) {
//   if (num < 0) return false;

//   const str = num.toString();

//   function isPalindromeRecursive(s) {
//     if (s.length <= 1) return true;
//     if (s[0] !== s[s.length - 1]) return false;
//     return isPalindromeRecursive(s.slice(1, -1));
//   }
//   return isPalindromeRecursive(str);
// };
