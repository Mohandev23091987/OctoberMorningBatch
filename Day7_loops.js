

/*
loops => repeat code until some condition is true

1)For loop

for(intialization;condition;increment/decrement/update){
line1
line2
}

intialization - executes only once
condition => checks every time 
increment/decrement/update  - i++, j++

2)while loop
3)do while loop

//javascript loops
4) for of 
5)for in 


*/

// print 10 numbers 

//let i=1   //1
for(let i=1;i<=10;i++){  //i 2 3 11<=10
console.log(i) ;   //1  2  3 5 6 7 8 9 10 
}

console.log('next line of code')

//print even numbers from 1 to 10

for(let i=1;i<=10;i++){
    if(i%2===0){
       console.log(i)
    }

}

for(let i=2; i<=10; i=i+2){
    console.log(i)
}

// sum of first 10 numbers 

// 15

 let result=0;  //0  1  3  10

 for(let i=1; i<=3;i++){  
    
    result = result + i;
     

 }


  console.log(result)
 //console.log(result)

 // while

 /*

intialization 
while(condition){

incementanddecremnt will go inside the while
}

 */


for(let i=1;i<=10;i++){  //i 2 3 11<=10
console.log(i) ;   //1  2  3 5 6 7 8 9 10 
}

let i =1;

let n=300

while(i<=n){

console.log(i)


i=i+1;  //2  11

if(i==10){
    break;
}
}

// do while
/*
do{

} while(condition)


*/

let num=20;

while(num>20){
    console.log(num)
}

let num2=25;
do{
   console.log(num2) 
}while(num2<20) //





//for in 
//for of 

for(let i=1; i<=10;i++){
    
    if(i===5 || i===6){  
    continue;  // continue => skip ieration and continue
    }

    console.log(i)
    console.log('insideloop')



}

/* 20 
/* 20 


"123" == 123   //true
"123" ===123    // false


// 1 2 3 4 5 7 8 9 10

if else 

    ternary 

*/


