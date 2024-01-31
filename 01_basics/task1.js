console.log("hii snehaa..");

var userName = "SNEHA";
var userAge = 20;
var userSalary = 50000;
var userSkills = ["Javascript", "HTML", "CSS"];

console.log(typeof(userName));
console.log(userName);

console.log(userAge);
console.log(userSalary);
console.log(userSkills);
var user1 = {
    name: String(userName),     
    age: Number(userAge),        
    salary: Number(userSalary),  
    skills: Array.isArray(userSkills) ? userSkills : []  
};

// Displaying user data
console.log("User 1:", user1);
