export let add = (a, b) => a + b;

export let sub = (a, b) => a - b;

export let mul = (a, b) => a * b;

export class Student {

    //variables 
    studentname;
    id;

    //constructor
    constructor(studentname, id) {
        this.studentname = studentname;
        this.id = id;

    }

    //methods
    displayDetails() {
        console.log(`student name is ${this.studentname} and his id is ${this.id} `)
    }
}

export default function concat(a, b) {
    return a + b;
}

// export{add,sub,mul,concat};

//export{add as addition,sub as substraction,mul as multiplication,concat as concatination};

