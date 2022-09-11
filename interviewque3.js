//1
// //Promises - Promises are used to handle asynchronous operations in JavaScript. They are easy to manage 
// when dealing with multiple asynchronous operations where callbacks can create callback hell leading to 
// unmanageable code. It also allows us to make API calls or fetch data from Web Servers successfully. If not 
// able to do so fetches us with an error message.


//2
//// Asynchronous JavaScript and XML (AJAX) - Ajax allows us to make server calls and display the data without
// reloading the entire page. 
// It allows us to communicate with the remote web servers in an asynchronous way. With AJAX calls we can 
// request data from web servers dynamically. It helps us to create CRUD Applications.
 
//3
//Hoisting is JavaScript's default behavior of moving declarations to the top.

//4
//The Document Object Model (DOM)
//It allows programs and scripts to dynamically access and update the content, structure, and style of a document.

//5
//"not defined" indicates that a variable does not exist.
//"undefined" indicates that a variable has been declared but not given a value
// "NaN" property indicates that a value is not a number


//6
// operators:
//Arithmatic ,comparison,Bitwise,logiacal,comma operator

//7
///Callback Hell - Callbacks are just the name/convention for using JavaScript. It instead of immediately 
// returning results like other functions, takes time to produce the result. So, If we stuck in some 
// particular call which prevents us from making further calls ends us into callback Hell.


const getEmpId = () => {
	setTimeout(() => {
		console.log("Fetching the ID's");
		let id = [1, 2, 3, 4, 5];
		console.log(id);

		setTimeout(() => {
			let empDetails = {
				fName: 'Harsh',
				lName: 'Bajaj',
				age: 28,
			};
			console.log(`The name of the Employee is ${empDetails.fName} ${empDetails.lName} and the age is 
            ${empDetails.age}`);

			setTimeout(() => {
				(empDetails.gender = 'Male'),
					console.log(
						`The name of the Employee is ${empDetails.fName} ${empDetails.lName} and the age is 
                        ${empDetails.age} and the gender is ${empDetails.gender}`
					);
			}, 2000);
		}, 2000);
	}, 2000);
};

getEmpId();

//8
//Promise chaining is a syntax that allows you to chain together multiple asynchronous tasks in a specific order.
let countValue = new Promise(function (resolve, reject) {
    resolve("Promise resolved");
  });
  
  // executes when promise is resolved successfully
  
  countValue
    .then(function successValue(result) {
      console.log(result);
    })
  
    .then(function successValue1() {
      console.log("You can call multiple functions this way.");
    });



//9
//There’s a special syntax to work with promises in a more comfortable fashion, called “async/await”

async function f() {

    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("done!"), 1000)
    });
  
    let result = await promise; // wait until the promise resolves (*)
  
    alert(result); // "done!"
  }
  
  f();