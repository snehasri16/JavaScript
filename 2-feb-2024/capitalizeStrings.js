// function capitalizeStrings(a) {
//     const capitalizedArray = [];
//     for (let i = 0; i < a.length; i++) {
//       capitalizedArray.push(a[i].toUpperCase());
//     }
//     return capitalizedArray;
//   }
  
  
  console.log(capitalizeStrings(["hello", "world","hloo"]));
  
  console.log(capitalizeStrings(["welcome", "guys.."]));
  
  function capitalizeStrings(arr) {
    return arr.map(str => str.toUpperCase());
  }
  
  
 
  