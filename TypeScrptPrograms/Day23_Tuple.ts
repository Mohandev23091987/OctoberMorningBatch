/*

Tuple - Datasctructure just like array
- it will store a fixed number of values with sepecific datatypes in a particular order


tuple vs object


*/


let numbers:number[]  = [10,40,30]
numbers.push(60)
numbers.push('mohan')
console.log(numbers)

let employee : [string,number,boolean];

employee = ['Ram',32,true]

//let variableName:[dt1,dt2,dt3];

let student:[string,number] = ['Ram',4]
//Accessign the elements in tuple => using index
console.log(student[0])
//update tuple
student[0]='shyam'


console.log(student)


//typescrpt will provide optional things  => ?

let user:[string,number?];

user =['Mohan']
user =['Mohan',23]

//    ...

let scores:[string,...number[]] = ['Ram',43,35,70,80,90]

console.log(scores)

//named tuples

let userdetail:[name:string,age:number] = ['Ram',40];



// pass a parameter as a tuple

// you can return a tuple 

//creating tuple type

function displayEmployeeDetail(emp:[string,number]):[string,number]{
    console.log("name:",emp[0])
    console.log("age:",emp[1])
    return emp;
}


let output = displayEmployeeDetail(['Ram',45])

console.log(output)









