/*
Type Alias: it allows to create new custom type name by using existing types.

Syntax : type typename = existing types;



*/


type EmployeeName = string | number;

let employee1: EmployeeName;
employee1 = 'Ram'


type Student = {

    id: number;
    name: string;
    address: string

}

let student1: Student = {
    id: 100,
    name: 'Laxman',
    address: 'Bengaluru'
}

type Person = {
    name: string,
    age: number
}

type EmployeeDetails = {
    employeeId: number,
    department: string

}

type Employee = Person & EmployeeDetails;  // intersection

let employee2: Employee;

employee2 = {
    name: 'Ramesh',
    age: 24,
    employeeId: 123,
    department: 'xyz'
}


/*

Type Annotations => explicitly we are telling  the datatype of a variable, functon parameers or function return type or object property


let varibleName:datatype = value;

*/

//variables
let studentname: string;
let salary: number;
let isPermenant: boolean;

//with array 
let numbers: number[];
let names: string[];

numbers = [1, 2, 3, 4]

//tuple
let employeedet: [number, string];

//functions



function add(a: number | string, b: number | string): number | string {

    if (typeof (a) === "number" && typeof (b) === "number") {
        return a + b;
    } else if (typeof (a) === "string" && typeof (b) === "string") {
        return a + b;
    } else {
        throw new Error('Both arguements should be sametype')
    }

    //return a+b;

}

console.log(add(2, 5))

//implicit conversions 
//number+string => string    10+"20"  => 1020   123+'123'
//string -number    =>    "20"-10  => 20 -10 = 10
//boolean + number => true + 1  => 1+ 1 => 2


//Explict Conversions

let age="30";

let result = Number(age)


let sal = '100.50';

console.log(parseInt(sal))


//Number()
//String()
//Boolean()
//parseInt()
//parseFloat()






//objects 

let employeeObj: {
    id: number,
    name: string,
    salaray: number
};


employeeObj = {
    id: 123,
    name: 'Suresh',
    salaray: 123

}




/*
Union types: it allow to accept more than one dataype with |



*/

let x: number | string;
 x = 'Ram';
 x =123;
 x =true;

 //type inference  (vairable intialization)

 let empolyeeIdNum = 101;    //empolyeeIdNum:number

 empolyeeIdNum ='Ram'

 let numbers2 =[1,2,3];    // number[]

 let object3 = {
    id:123
 };                    // {id:number}




 // specifying 

 type custom1 =string|number|boolean;

 let a:custom1;

 let student3 = 123; //student3:number

 // any unknown and never
 //enums

 //string 
 //arrays









