// ==> All SubArrays and SubArrays Sum
// Input: arr[] = [1, 2, 3]
// Output: 20
// Explanation: {1} + {2} + {3} + {2 + 3} + {1 + 2} + {1 + 2 + 3} = 20

// Input: arr[] = [1, 2, 3, 4]
// Output: 50

function subArray(arr) {
  let result = []; // To store all subarrays
  let maxSum = 0; // To store the sum of all subarrays

  // Outer loop picks the start index of subarray
  for (let i = 0; i < arr.length; i++) {
    let sum = 0; // Running sum for current subarray
    let temp = []; // Temporary array to build current subarray

    // Inner loop picks the end index of subarray
    for (let j = i; j < arr.length; j++) {
      temp.push(arr[j]); // Add current element to subarray
      sum += arr[j]; // Add current element to sum
      result.push([...temp]); // Push a copy of the current subarray to result
      maxSum += sum; // Add current subarray's sum to total sum
    }
  }
  // Return both the list of subarrays and the total sum
  return { maxSum, result };
}
console.log(subArray([1, 2, 3, 4]));
