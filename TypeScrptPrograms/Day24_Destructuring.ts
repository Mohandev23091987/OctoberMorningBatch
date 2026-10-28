/*

Step1:
way of access your values from array or   => array destructurig 
way of accesing properties from an object   => object destruring
step2:after accessing store it in variables

*/

//array or object

let student:any[] = ['Ram',123,'Bengaluru']

// let name = student[0]
// let course = student[1]
// let city = student[2]


let [name,course,city]  = student  // destructuring

let [stuname,...rest] = student;



//{}

console.log(name + ","+course + ","+city)  //string - ``


let numbers:number[] = [10,20,30]

let [a,,,d=100] = numbers;

console.log(a)
console.log(d)

//rest opertor

let [first,...remaining] = numbers;

console.log(first)
console.log(remaining)

// oops concetps 
//static vs instance
