function getObjectProperty(obj, propertyName) {
    try {
        if (obj === null || obj === undefined) {
            throw new Error("Object is null or undefined.");
          }
      
          // Attempt to access the property of the object
          const propertyValue = obj[propertyName];
      
          // Check if the propertyValue is null or undefined
          if (propertyValue === null || propertyValue === undefined) {
            throw new Error("Object property is null or undefined.");
          }

      return propertyValue;
    } catch (error) {
      return error.message;
    }
  }
  
  // Example usage
  const person = { name: "John" };
  console.log(getObjectProperty(person, "name"));
  // Output: "John"
  
  console.log(getObjectProperty(null, "name"));
  // Output: "Object is null or undefined."
  
  console.log(getObjectProperty(person, "age"));