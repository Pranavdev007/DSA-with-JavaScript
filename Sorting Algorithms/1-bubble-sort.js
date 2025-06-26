// Ques 1: Implement Bubble Sort in JavaScript
// Write a function to sort the given array nums in ascending order.

// Input: nums = [29,10,14,37,14] ----->>>>>  Output: [10,14,14,29,37]

const bubbleSort = (arr) => {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return arr;
};

console.log(bubbleSort([29, 10, 14, 37, 14]));

// Best Time Complexity = O(n)
// Worst Time Complexity = O(n^2)
// Average Time Complexity = O(n^2)

// Space Complexity = O(1)

// Bubble Sort: Repeatedly swaps adjacent elements if they are in the wrong order, moving the largest to the end in each pass.
// Selection Sort: Repeatedly selects the smallest element from the unsorted portion and swaps it with the first unsorted element.
// Insertion Sort: Builds a sorted list by picking elements one by one and inserting them into their correct position.
// Merge Sort: Recursively divide the array into halves → sort each half → merge sorted halves.
// Quick Sort: Choose a pivot → partition the array into elements less than and greater than the pivot → recursively sort the partitions.
