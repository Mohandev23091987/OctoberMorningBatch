/*


conditional statements => to make decisions
based on the decision execute different blocks of code 
based on the true condition

1)if/ else if / else
2)Switch
3)Ternary

if(codition){

}

if(condition){
} else{
    }


    switch(expression){
    
    case value:
        //block
        break;

    case value2:
        //block
        break;

    case value3:
        //block
        break;

     default:

    }


*/
let age = 30;

if (age > 18) { //true
    console.log('eligible for voting')  // if block 
    console.log('if block executed')
}

if (5 == 5)
    console.log('both are equal')

console.log('Program end')

//if else

if (3 > 3) {
    console.log('if block')
} else {
    console.log('else block')
}

// if else if  

let marks = 75;

if (marks > 75) {
    console.log('A')
    console.log('B')
}

else if (marks > 60) {
    console.log('b')
} else if (marks > 40) {
    console.log('C')
} else {
    console.log('failed')
}


let day = 10;

switch (day) {  // 3

    case 1:   // ===
        console.log('Monday')
        break;

    case 2:
        console.log('Tuesday')
        break;

    case 3:
        console.log('Wednesday')
  

    case 4:
        console.log('Thurday')
        break;

    case 5:
        console.log('Friday')
        break;
    
    default: console.log('provide correct input')

}

switch (day) {  // 3

    case 1: 
    case 2:
    case 3:
    case 4:
    case 5: console.log('Weekday') 
    break;
     case 6:
    case 7: console.log('Weekend')
    

}









