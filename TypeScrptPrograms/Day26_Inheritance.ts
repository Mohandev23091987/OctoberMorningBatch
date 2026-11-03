/*
single inheritance

one child class inherits(reuses code) from one parent

*/

class Employee{

 company:string = 'TCS'

 work():void{
    console.log('Employee is working')
 }

}

class Developer extends Employee {

code():void{
    console.log('person will code')
}

}

let DeveloperObj = new Developer();

//parent things
console.log(DeveloperObj.company)
DeveloperObj.work()

//child things 
DeveloperObj.code()



/* 

2.Multi Level inheritance

class inhertis from another class which also a inherited class


*/

class GrandParent{
    house():void{
        console.log('owns a house')
    }
}

class parent extends GrandParent{
    car():void{
           console.log('owns a car')
    }
}

class child extends parent{

    bike():void{
           console.log('owns a Bike')
    }

}

let childObj = new child()

childObj.car()

/*

Hierachical inheritance is one parent multiple child classes

*/

class Animal{

    eat():void{
        console.log('animal eats')
    }

}

class Dog extends Animal {

    bark():void{
        console.log('barks')
    }

}


class cat extends Animal {

    meow():void{
        console.log('meows')
    }

}

let dogObj = new Dog();
dogObj.bark()
dogObj.eat()

let catObj = new cat();
catObj.meow()
catObj.eat()

/*

No multiple inheritance with classes - one child two parents 

it is possible with inheritance
*/

interface Flyable{
    fly():void;
}

interface swimmable{
    swim():void;
}

class Eagle implements Flyable,swimmable{

    fly():void{
      console.log('flying')
    }

    swim():void{
        console.log('swimming')
    }


}


let EagleObj = new Eagle();


EagleObj.fly();
EagleObj.swim();

/*

Hybrid inheritance

extengs class 
implements interfaces
*/
class Vehicle{

 start():void{
    console.log('vehicle starts')
 }

}

interface GPS{
    navigate():void;
}

class Car extends Vehicle implements  GPS{

   navigate(){
    console.log('GPS Navigation')
   }  

}

let CarObj = new Car();
CarObj.start()
CarObj.navigate()


//method overiding  // inheritance

//100 
//90
//10

// child provides a new implementaion to the parent class method 


