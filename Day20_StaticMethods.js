// static methods or static variables are belongs to class

class Empdetails{

static company ='XYZ';  // static variable

name; // instance 

Empdetails(name){
    this.name = name;
}

}

// let emp1 = new Empdetails('Ramesh');
// let emp2 = new Empdetails('suresh');

console.log(Empdetails.company)


class MathOperations{

    static add(a,b){  // static method
        return a+b;
    }

    multiply(a,b){  // instance methods
        return a*b;
    }
}

let result = MathOperations.add(2,3)

console.log(result)

  let calobj = new MathOperations()

calobj.multiply(5,7)


//Promise
