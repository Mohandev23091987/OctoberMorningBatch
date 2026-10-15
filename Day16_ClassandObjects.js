/*
class => a bluent print for your objects 
    => wont exist in real time
    => template for creating objects


    => viarables (features), methods(behaviour)


 //object => is an instance of class 
          => which is created by using class 
          => exist in realtime   
*/


class Student{
    // instance variables
    #name;
    address;

    //constructor  // intializor block
    constructor(studentname,studentaddress){
     this.#name  = studentname;
     this.address = studentaddress;
    }


    //methods
    goesToSchool(schoolname){
       console.log('goes to school:'+schoolname) 
    }
}


//creating an object  new classname()

//default constructor and userdefined constructor

let student1 = new Student("ravi","Bengaluru");
console.log(student1.#name)
console.log(student1.address)
student1.goesToSchool('Baldin')



let student2 = new Student("Sham","AP");
console.log(student2.name)
console.log(student2.address)
student1.goesToSchool('Geetham')


//encapsulation => 
//abstraction  => 
//inheritance 
//polymorphism  




class StudentCreation{
    // instance variables
    name;
    address;

    intializeStudent(studentname,studentaddress){
     this.name  = studentname;
     this.address = studentaddress;
    }


    //method
    goesToSchool(schoolname){
       console.log('goes to school:'+schoolname) 
    }
}

let student3 = new StudentCreation();

student3.intializeStudent("ravi",'Ben')
student3.goesToSchool('ZYZ')


//objecatname.variables 
//objectname.methodname()

//javascript -OOPS 









       



