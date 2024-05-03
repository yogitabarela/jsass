/* Q13-Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property. 
Sample object: 
var student = { 
    name : "David Ray", 
    sclass : "VI", 
    rollno : 12 
}; */

var student = {
    name: "David Ray",
    sclass: "VI",
    rollno: 12
};

console.log(" Sample Object:"); //Object before deleting rollno
console.log(student);

// Deleting the rollno property
delete student.rollno;

console.log("\n Sample Object:"); //Object after deleting rollno
console.log(student);
