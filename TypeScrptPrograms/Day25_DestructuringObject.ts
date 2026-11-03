

type studentdetails = {
    name:string,
    studentclass:string,
    school:string,
    address:string
}

let student:studentdetails = {
    name:'Ram',
    studentclass:'4',
    school:'xyz',
    address:'Hyd'
}

//without destructuring
// let studentname = student.name;
// let studentclass = student.class;
// let studentschool = student.school;

// console.log(studentname)
// console.log(studentclass)
// console.log(studentschool)

// let []

// let {name,studentclass,school} = student;

// console.log(name)
// console.log(studentclass)
// console.log(school)

//selecting particulr values

// let {name,school} = student;

// console.log(name,school)


// change the name also 

// let {name:studentName,school:studentSchool} = student;

// console.log(studentName,studentSchool)

//defining your default values

// let {name,address="Bengaluru"} = student;

// console.log(name)
// console.log(address)

// type Employee ={
//     name:string,
//     role:string
// }


// let a:Employee;

// a={
//     name:'Ram',
//     role:'tutor'
// }

//pass a object as a paramerter to the function 
//return an object from the function


type Employee ={
    name:string,
    role:string
}

//let {name,role} = object

function displayEmployeeDetails({name,role}:Employee):void{
console.log(name,role)
}


displayEmployeeDetails ({
    name:'Ram',
    role:'student'
});


// return an object

function getStudent(){
    return {
        name1:'MOhan',
        role:'Student'
    }
}

let {name1,role}= getStudent();

console.log(name1,role)

//fixtures


//selenium vs playwright
//string programs 
//array programs 
//typescript and javascript


//unknown 
//any

//typeinference 
//type allias

//unknownvsany

//access modifiers 
//enum 
//generics 












