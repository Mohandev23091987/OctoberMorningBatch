let num1 = 10 
let num2 = 30 
let num3 = 40 

// Array is variable which will store multiple values


//let numarr = [10,30,40]

let carsArr = ['baleno','bmw','audi']

let personDetail =['Ravi',30,234.45,true]

console.log(typeof(numarr))

// through command -> ctrl+j 


// accessing array by using index 
let numarr = [10,30,40]

console.log(numarr[2])


//array length  => number of elements in an array

console.log(numarr.length)

//first element 
console.log(numarr[0])
//last element 
console.log(numarr[numarr.length-1])
//last second element 
console.log(numarr[numarr.length-2])

//modifying using index
let numarr2 = [30,40,50,60]

numarr2[1]= 90;

console.log(numarr2)

//predefined 
//mutates mehtods - it will modify original array directly
//iterate methods 
//search methods 
//boolean methods
// new array methods 


let numarr3 = [30,40,50,60]

//push => add one or more elements to the end
//it will return modified array length
// syntax => arrayname.push(ele1, ele2 .......)

let len = numarr3.push(70,80,90)  // [30,40,50,60.70,80,90]

console.log(numarr3)
console.log(len)



//pop => remove the last element from an array and return it
// syntax => array.pop()  //90

console.log(numarr3.pop())

console.log(numarr3)

//shift - removes and retruns first element

let numarr4 = [1,2,3,4]
console.log(numarr4.shift())
console.log(numarr4)

//unshift(ele1,ele2...)

numarr4.unshift(6,7,8)

console.log(numarr4)


// includes => check value is exist in an rray or not

let numarr5 =[5,4,6,8,2,3,45]

if(numarr5.includes("ravi")){
    console.log('num is present in an array')
}

// indexOf

let arr3 = ['orange','mango','amla']

console.log(arr3.indexOf('amla'))  // 2


//slice => part of your array 
 let arr4 = [2,4,6,8,10]

 console.log(arr4.slice(1,4))

 console.log(arr4)

 // concat 
 let arr5 = [12,14]

 console.log(arr4.concat(arr5))
 console.log(arr4)
 

 //reverse 

 let arr10 = [2,4,5]

 arr10.reverse()
 console.log(arr10)

 //sort  // mutate

 // (a,b)=>a-b

 let num11 = [89,25,1,-1,70]  // [] 

 num11.sort((a,b)=>a-b)   // (a,b)=>a-b

 console.log(num11)

 let stringsarray = ['bmw','audi','wolkvogen']
 stringsarray.sort()

 console.log(stringsarray)



 //iterate 
 //normal for loop
 //for of
 //for each

 let num15 = [2,4,6,7,9]

 console.log("**********")
 for(let i=0; i<num15.length;i++){  // 1
    console.log(num15[i])  // 2  4
 }


 for( let num of num15){
    console.log(num)
 }



console.log("*".repeat(12))
num15.forEach( (a)=>{

console.log(a)

}  )


// array 
//map()  => all elements
//filter()  => filtering the data
//reduce  => it into single value


console.log("1".repeat(20))


// all are building blocks of java script
