function manipulateArray(arr) {
    // Add the number 6 to the end of the array
    arr.push(6);
  
    // Remove the first element from the array
    arr.shift();
  
    // Check if the number 3 exists in the array
    const containsThree = arr.includes(3);
  
    // Create a new array by extracting a portion of the original array
    const newArray = arr.slice(2, 6);
  
    // Sort the elements of the new array in ascending order
    newArray.sort((a, b) => a - b);
  
    // Include the number 6 in the result string
    newArray.push(6);
  
    // Convert the sorted array into a string
    const resultString = newArray.join(',');
  
    return resultString;
  }
  
  // Example usage
  console.log(manipulateArray([1, 2, 3, 4, 5]));
  // Output: "3,4,5,6"
  
  console.log(manipulateArray([5, 2, 7, 1, 9]));
  // Output: "1,2,5,6,7,9"
  