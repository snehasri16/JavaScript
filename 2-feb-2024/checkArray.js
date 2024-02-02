function performOperation(arr) {
    try {
      if (arr.length === 0) {
        throw new Error("Array is empty.");
      }
      arr.push(100);
  
      return arr;
      
    } catch (error) {//catches the error.....
      return error.message;
    }finally {
        console.log("This code always executes");//coz... finally executes without checking exceptions...
      }
  }
  
  console.log(performOperation([1, 2, 3]));
  
  
  console.log(performOperation([]));
 