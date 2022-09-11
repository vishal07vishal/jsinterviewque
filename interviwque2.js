//1
//.call()methods input format, 1st is always the Object calling the function followed by the arguments.

//aply:-
displayInfo.apply(employee1,["Male",24]);//arguments are passed in the form of an array.


//Bind:-//we assign into new variable
let result1 = displayInfo.bind(employee1);
console.log(result1);
result1("Male",24);

//2
//object:- the non-primitive datatypes  and are use to store multiple data in forn of key values pairs
//Objects are a collection of properties and methods
const names={
    name:'vishal',
    age:22,
}
console.log(('i am'+names.age+'year old'));

//3
// Function() constructor. The Function() constructor creates a new Function object. Calling the constructor directly can create functions dynamicall

function person(name,salery){
    this.name=name,
    this.salery=salery
}
const person1=new person('sanjay',5000);
console.log(person1.name);


//4
//5
function Person () {
    this.name = 'John',
    this.age = 23
}

const person = new Person();

// checking the prototype value
console.log(Person.prototype); // { ... }


//6
//Inheritance of properties and method of object by any object

function Employee(name, age, gender, id) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.id = id;
};

function Developer(name, age, gender, id, 
specialization) {

    // Calling Employee constructor function
    Employee.call(this, name, age, gender, id);

    // Adding a new parameter
    this.specialization = specialization;
}
console.log(Employee.prototype);
console.log(Developer.prototype);

//7
//callbacks:-
//A callback is a function passed as an argument to another function
function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
  }
  
  function myCalculator(num1, num2) {
    let sum = num1 + num2;
    return sum;
  }
  
  let result = myCalculator(5, 5);
  myDisplayer(result);



//8
// setTimeout() sets a timer and executes a callback function after the timer expires


//9
//A Pure Function is a function (a block of code) that always returns the same result if the same arguments are passed.
function calculte(){
    console.log(prze*0.5);
}