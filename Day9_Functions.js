/*
Functions:
=========



Frst class citizen or first class values  => parameters, can be returned

Function => block of code that performs some task

function functioname(){


}

functioname();




*/


let a =30;  //global scope
console.log(a)  // 30

console.log(typeof(a))



print()

//funcaiton declaration
//function without parameters
function print(){
console.log(a)     // 30
}


//calling function


//console.log(d)

//function with parameters
//funcation without returntype
function add(num1,num2){
    
    // 5 , undefined
let c = num1+ num2  // NaN
console.log(c);
}

add(5,2)


//function with returntype

function product(num1,num2){   // 5 , undefined
let result = num1 * num2  // NaN
return result;
}

console.log(product(2,3))

let output = product(6,3)

console.log(output)


// default parameter

function pirntString(str='Hello'){
    console.log('Print :'+ str)
}

//pirntString();
pirntString('Mohan Dev')


//function Expression => function stored inside a variable

let addition = function addnums(a,b){
    console.log(a+b)
}

addition(2,3)

//anonymous functions
let additionfun = function (a,b){
    console.log(a+b)
}

additionfun(6,7)


//arrow function
//  let functionname = ()=>{}

    let productofNumbers = (num1, num2)=>{
        return num1*num2;
    }
    console.log(productofNumbers(5,7))

  
    // if there is only one statement => no need to write brackets

      let productofNumbersform2 = (num1, num2)=> num1*num2;
    
    console.log(productofNumbersform2(5,7))

//one more form if you have only one parameter you can skip paranthesis

let squareOfNumber = num1=> num1*num1;

console.log(squareOfNumber(7))

console.log(squareOfNumber(8))

console.log(squareOfNumber(10))

console.log(squareOfNumber(11))


//function patterns
 
//immediately invoked function  => if you want to run immediately 
(function (){
console.log('connect to DB') 
})();



//callback function => function passed an argument to another function


function mainfunction(message, callback){

    console.log(message)
    //callback(5,7);

    //
    callback(5,7);

}

function divisionOfNumbers(num1,num2){
    console.log(num1/num2);
}

mainfunction('do division',divisionOfNumbers)











// return a function from a function




add(5,6)

add(7,8)

add(7,10)



// predefined function
//userdefined function















