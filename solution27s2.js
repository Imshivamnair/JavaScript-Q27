// Binary search function for sorted arrays
function binarySearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        // Calculate the middle index
        const mid = Math.floor((low + high) / 2);

        // Check if the middle element is the target
        if (arr[mid] === target) {
            return mid; // Element found, return its index
        } else if (arr[mid] < target) {
            low = mid + 1; // If target is greater, search the right half
        } else {
            high = mid - 1; // If target is smaller, search the left half
        }
    }

    return -1; // Element not found
}

// Example usage:
const sortedArray = [1, 2, 3, 5, 6, 7, 10, 11, 14, 15, 17, 19, 20, 22, 23];
const targetElement = 6;
const resultIndex = binarySearch(sortedArray, targetElement);

// Log the result to the console
console.log(resultIndex);
