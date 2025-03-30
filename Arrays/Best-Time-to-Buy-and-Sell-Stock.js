// Question - https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

// Example 1:
// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

function maxProfit(arr) {
  let maxProfit = 0;
  let currStock = arr[0];
  for (i = 1; i < arr.length; i++) {
    if (arr[i] < currStock) currStock = arr[i];
    maxProfit = Math.max(maxProfit, arr[i] - currStock);
  }
  return maxProfit;
}
console.log(maxProfit([7, 1, 5, 3, 6, 4]));
