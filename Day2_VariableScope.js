/*
1.global scope - variables declared outside of any function or block
acessible from anywhere in the code

2.function scope - variables declared inside a function
accessible only within that function

3.block scope - variables declared inside a block (e.g., if statement, for loop)
accessible only within that block

*/

let empname; // undefined
let salary = 10000;
const BONUS = 2000;
let x;  // 12000

function calculateFinalSalary(){
    let finalSal = salary + BONUS  //block //12000
    console.log(finalSal)  // 12000
    x = finalSal;

}



calculateFinalSalary()  // function call


{
let city ='Banglore';
let basicsalay = x-2000;   // 10000
}


// console.log(empname) 
// console.log(salary) 
// console.log(city)
//console.log(finalSal)

console.log(x)

















