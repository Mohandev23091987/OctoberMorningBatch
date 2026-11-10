/*

Encapsulation => wrapping up data(varibles/filelds/properties) and methods into a single unit(class)
=> every class is an example for encapsulation
=> restrict direct acess/edit  of data
=>Data/variables can accesss/edit through its own class public methods 

*/

//without encapsulation

class BankAccount{
public balance:number =10000;  //data/variables/fields/properties
}

let account = new BankAccount();

//read
console.log(account.balance)

//Directly modifying 

account.balance = -100;

console.log(account.balance)


// Encapsulation by using access modifiers 

/*
//Access modifiers 

this will control who can access your class members (varialbes. methods  and constructor)
they help in encapsulation,data security

3
==
1)public (default)  => you can acess any where from your project 
2)proctected  => inside and in only child classes (class + child classes )
3)Private only in the same class , not outside of the class (inside the class)
*/


//proctected 

class Animal{
    protected  sound:string ='Roar';

    displayinParent(){
        console.log(this.sound);
    }

}

class Lion extends Animal{
    display(){
        console.log(this.sound);
    }
}

let lion = new Lion();
 lion.display()

 //console.log(lion.sound)


 let animal = new Animal();
 animal.displayinParent();




 //encapsulation

 /*
1)loosely coupled encapsulation class
1)tightly coupled encapsulated class

//variable are private or protected 

// you are going to access this private or protected by two 

1)getter method to read the variable 
2)setter method to change the variables

every variable => 1)setter 2)getter


 */

class Employee{
    private salary:number =30000;
    //getter method
    getSalary():number{
        return this.salary;
    }
    //setter method
     setSalary(amount:number){
        //authentication
        //steps
    if(amount>0){
       this.salary=amount;
    }else{
        console.log('this is invlaid provide valid salary')
    }
    }


}

let employee  = new Employee();
let sal = employee.getSalary();

let result = sal -10000;
employee.setSalary(1000)


employee.setSalary(1000)
console.log('new salary is '+employee.getSalary())





 

