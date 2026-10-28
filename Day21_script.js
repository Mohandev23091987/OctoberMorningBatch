// import * as calculator from './Day21_ExportFile.js'  // named import


// console.log(calculator.add(2,3))
// console.log(calculator.sub(2,3))
// console.log(calculator.mul(2,3))

// import {addition as addTwoNum} from './Day21_ExportFile.js'  // named import


// console.log(addTwoNum(2,3))


import concat,{add,sub,mul,Student} from "./Day21_ExportFile.js";

console.log(concat("Ram",'Sita'))
console.log(add(2,3))

let StudentObj = new Student('Ram',123);
StudentObj.displayDetails()



function greet(callback) {
    console.log("Start");
    callback();
    console.log("End");
}

greet(() => {
    console.log("Hello");
});


//playwright architecture 
//selenium vs playwright 
//Programs
//arrays 
//string 
//map programs 

//arrow functions => types of arrow functions 
//callback 


//aysna and await

//full hand and short arrow functions
let add1 = (a,b)=>{
    console.log(a+b)
    return a+b
}

let square = a=>a*a;
let add = (a,b)=>a+b;






