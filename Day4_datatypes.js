
/*

Datatypes  => 
    what kind of value can a variable store 
    how it will be stored in memory 
    what operation I can perform on it



1)Prmitive 
2)Non primitive 

Primitive Datatypes:   => single value 
===================
1)number  let a=20
2)Bigint
3)string 
4)boolean
5)undefined 
6)null    => object    null -> 0 -> object
7)symbol  // discuss when we discuss about objects


Number => integers and decimal

// ctrl+j
// Clrl + `

non-primitive:
=============
1)object 
2)Array 
3)function

*/


// let a =20;     //Number
// let sal = 23.45;

// console.log(a)
// console.log( typeof a)
// console.log( typeof(a))


// console.log(Number.MAX_VALUE)  // decimal 
// console.log(Number.MAX_SAFE_INTEGER);


// let b = 9007199254740999  //9007199254741000

// console.log(b)


// //Bigint 

// let c = 9007199254740999n;  //9007199254740999n   // only integer 
// console.log(c)

// console.log(typeof c)


// //number 
// //bigint 


// let x =20;

// let y= 200n;

// // let z = x+y;    
// // console.log(z)

// //Boolean 

// let isfound = true;
// let hasflag = false;
// let isMale = true;
// console.log(typeof(isfound))

// //undefined 

// let empname;  // undefined 

// console.log(empname)
// console.log(typeof(empname))

// //null => objects 

// let object1 = null;
// console.log(object1)

// console.log(typeof(object1))  //object


// //string  => group or sequence of character   'mohan'

let studentname = "Ravi"

let course = 'playwright'

let message = `I am Ravi and I am learning playwright`      // literal template 


let output = `I am  ${studentname} and I am learning ${course}  `






console.log(output)

//  ${variable}


// ctrl+/

// object

let employeDetail = {
empid:100,
empname:'john',
role:'se',
isactive:true
}

console.log(employeDetail.empid)  // 100

console.log(typeof(employeDetail))

//array 

let arr = [1,2,3,4,5]             //arr[0] => 1  , arr[1] 
let arrOfNames = ['Ravi','Mohan']

console.log(arrOfNames[0])
console.log(typeof(arr))

//function

function sum(num1,num2){
let output = num1+num2;
console.log(output)
}

sum(2,3);

console.log(typeof(sum))


//operations 

//operatoers 


let a = null;


console.log( typeof(1))
console.log(typeof(123n))



console.log("Ravi"/2)




















