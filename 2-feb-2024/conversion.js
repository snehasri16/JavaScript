function convertStringToNumber(str) {
    // Use parseInt to convert the string to a number
    const number = parseInt(str, 10);
    console.log(typeof number);
    // Return the converted number
    return number;
  }

  function convertNumberToString(num) {
    const s=num.toString();
    console.log(typeof s);
    return s;
  }
  
  function convertBooleanToString(bool) {
    const s=bool.toString();
    console.log(typeof s);
     return s;
  }
  
  function convertNumberToBoolean(num) {
   const b=Boolean(num);
   console.log(typeof b);
    return b;
  }
  
  console.log(convertStringToNumber("42"));
 
  console.log(convertNumberToString(42));

console.log(convertNumberToString(3.14));
console.log(convertBooleanToString(true));
console.log(convertNumberToBoolean(1));