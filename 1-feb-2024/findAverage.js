function findAverage(arr) {
    let sum=0;
    for (let i = 0; i < arr.length; i++) {
         sum += arr[i];
    }
    sum/=arr.length;
    return sum;
}

// Example usage
let numbers = [1, 2, 3, 4, 5,6];
var avg=findAverage(numbers);
console.log(findAverage(numbers));