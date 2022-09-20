// Symbol is a primitive data type of JavaScript
//its value is kept private and for internal use.

//Temporal dead zona is applicable only let and const key word

//2
//for-in
// iterate over the student object and print all its properties.
// for (key in object) {
//     // body of for...in
// }

//Scope: It is a region of the program where a variable can be accessed.

//Local Scope occurs when you create a variable inside a function.
//Block scope: Variable that is declared inside a specific block & can’t be accessed outside of that block.
//Variables defined inside a function are not accessible (visible) from outside the function.
//Function scope: Variables that are declared inside a function are called local variables and in the function scope. Local variables are accessible anywhere inside the function.  



//undefined It means a variable declared, but no value has been assigned a value.
//null :- value does not exist in the database


//The map() method is used for creating a new array from an existing one,
const listOf=[2,3,5,6,4,1,8,4];

const mapp=listOf.map(item=>item*2)
console.log(mapp);

//filter:-The filter() method creates a new array filled with elements that pass a test provided by a function
const filterrr=listOf.filter(item=>item>2);
console.log(filterrr);


//in pass by value in JavaScript, a copy of the original variable is created so any changes made to the copied variable do not affect the original variable
//in pass by reference in JavaScript, we pass the reference of the actual parameter. No copy is created in the memory.


//Self-Invoking function is a type of function that is invoked or called 
//automatically after its definition when followed by the parentheses set () and primarily used for the initialization tasks.