//1
//Different between == and === 
// == operator does the type conversion of the operands before comparison, whereas the 
//=== operator compares the values as well as the data types of the operands.

//2
//spread operator(...)
// it allows us to quickly copy all or part of an existing array or object into another array or object.

//3
//let,var,const
//let - 1. we can declare the variable name in one line and initialize it on another line 
    // or in the same line itself.
    // 2. Two variables with same name aren't possible with let
    // 3. We can reassign/update the values of the variable which have already been initialized.
    // 4. let is block scoped. 
    // 5. Let doesn't supports Hoisting.

//const - 1. we have to declare the variable and initialize in the same line itself.
    // 2. Two variables with same name aren't possible with const.
    // 3. We can't reassign/update the values of the variable which have already been initialized.
    // 4. const is block scoped. 
    // 5. const also doesn't supports Hoisting.

//var - 1. we can declare the variable name in one line and initialize it on another line 
    // or in the same line itself.
    // 2. Two variables with same name are possible with var
    // 3. We can reassign/update the values of the variable which have already been initialized.
    // 4. var is global scoped. 
    // 5. var supports Hoisting.


//4
//Execution context:- 
//In execution context we allocate the actual values to the variables instead of the default value.

//5
////First Class FUnctions(FCF's) - FCF's are those fns which can be passed as an argument into another function
// or can be returned from another functions. They are also called as First Class Citizens.
////Higher Order Functions - These are those functions which takes functions as arguments or return functions 
// as values.
////Callback functions - These are those kind of fns, which can be callbacked after certain period of time or 
// as and when required.



//6
//creation phase
//Creation Phase
//In the creation phase, the Execution Context is first associated with an Execution Context Object (ECO). The Execution Context Object stores a lot of important data which the code in the Execution Context uses during its run-time.
//execution phase
//This is the stage where the actual code execution begins.



//7
// clousers - its not something that we create manually or explicity. it happens automatically in certain situations which we need to analyze/realize ourselves.
// clouser makes a function remeber all the variables that existed in the function birth place initially.
// any function always have access to the "variable environment(variable which is using)" of the execution context in which the function created.

// closure is function having access to parent scope, preserve data from outside
function makeFunc() {
    const name = 'vishal';
    function displayName() {
      console.log(name);
    }
    return displayName;
  }
  
  const myFunc = makeFunc();
  myFunc();
