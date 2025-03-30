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
