function validateRegistrationData(userData) {
    
    if (typeof userData.name !== 'string' || userData.name.trim() === '') {
        console.log("name is empty...")
        return false;
    }

      if (typeof userData.age !== 'number' || userData.age < 18) {
        console.log("age is less than 18..")
        return false;
    }
      return true;
}

let user1 = {
    name: "SNEHA",
    age: 20,
   
};

let user2 = {
    name: "", 
    age: 15,   
    
};

console.log("User 1 Valid:", validateRegistrationData(user1));  
console.log("User 2 Valid:", validateRegistrationData(user2)); 
