function incrementValues(arr, k) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] += k;
    }
}

// Example usage
let numbers = [1, 2, 3, 4, 5];
let k = 2;

console.log("Original array:", numbers);

// Calling the function to increment values
incrementValues(numbers, k);

console.log("Array after incrementing values:", numbers);
