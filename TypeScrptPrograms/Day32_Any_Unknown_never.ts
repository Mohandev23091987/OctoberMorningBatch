//any => disables typescript typechecking 

//you should not use this

let empid: any;

empid = 'Mohan';
empid = true;
empid = [1, 2, 3, 4]


 empid = 'Mohan'
console.log(empid.toUpperCase())

console.log(empid.toFixed(2))


// unknown  => type safe alternative to any


let data: unknown;

data = 'Ram';

if (typeof (data) === 'string') {

    console.log(data.toUpperCase())

}


if (typeof (data) === 'number') {  // string === number
    console.log(data.toFixed(2))
}

//never => it will represent something that never happen

//1)Functions that neve return
//2)Exhaustive conditions checking


function add(): never {
    throw new Error('this is not working method it will throw error always')
}



function infiniteLoop(): never {

    while (true) {
        console.log('it will run infinitley')
    }
}


type booleanvalues = true|false;

// //2)Exhaustive conditions checking


type EmployeeRole = 'Admin' | 'Manager' | 'Tester'|'Developer';


function displayRole(role: EmployeeRole) {

    switch (role) {

        case 'Admin':
            return 'Admin Access';
        case 'Manager':
            return 'Manager Access';
        case 'Tester':
            return 'Tester Access';
        
        default :
        const value:never = role;
        return value;

    }



}

//== loose equality not strict comparision

let a:string = '123';  // 123 == 123
let b:number = 123;

console.log(a==b)


// === strict equality operator => value and datatype

//datatype and values

console.log(a===b)

// 100 



let sum = (a:number,b:number):number=>{

    let c = a+b;
    return c;

};

console.log(sum(2,3))

// full hand arrows funtions
//short hand arrows functions










