/*
 operators => symbols usded to perform operations on variables or values


 1)Arthmetic operators  => +, -,*,/, %,  **
 2)Assignment operators  => assign the or update the values 
 =
 +=    => x+=6   => x = x+6
 -=
 *=
 /=
 %=

 3)Comparision operators  => used to compare two values or variables 

 ==    !=
 ===  !==
>
<
>=
<=


 4)logical operators
 5)String operators 
 6)ternary operator
 7)imcrement/decrement operator

*/


let a =10;
let b =3;
 console.log(a+b)  // 3

 console.log(a/b) 
 
 console.log(a%b)  // 


 let x =2;
 let y = 3;
 console.log(x**y)   // 2 power of 3


 /*
  =
 +=    => x+=6   => x = x+6
 -=6
 *=
 /=
 %=

 */

 let m;  // undefine 

 m = 10;  // 10   ,

// m = m+5;

m+=5;

console.log(m)

let sal = 123;
let sal2 = '123';

console.log(sal==sal2)  //true // content

console.log(sal===sal2)  // content + datatype

console.log(2>5) //false 
console.log(2<5)  //true
console.log('123'!==123) //  string number //true

console.log(null == undefined) //true  
console.log(null === undefined)

//logical &&  ||   !   => true or false

//&& => if all conditions it will return true othercases it will return false 
//  || => one of them is true => true  

console.log(5>2 &&  6>1)  //true

console.log( 5>10 || 2>1)  // false || true

console.log(!(5>2))  //false

//String operator + 

console.log(10+2)  //12
console.log('Ram'+2)  //Ram2
console.log('10'-2)  //nan , 8

console.log('Ram'-2)  //Nan

//ternary operator if else 


    // increment or decremnt operators 
 //preincrement , post increment 
 //pre decrement, post decrement
 //++ => by 1
 //-- => by -1

 let num1= 5;

 console.log(num1++)  //5    console.log(num1)  num1 = num1+1;
 
 


 console.log(num1)  // 6

 let num2 =6;
 console.log(num2++)  
 console.log(++num2) 
 console.log(num2)
 
 







