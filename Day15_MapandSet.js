/*

map => key value pairs   <key,value>,<key2,value2>

*/


//creating a map 

let student = new Map();
console.log(student)



//adding key value pairs to map  => setmethod 

student.set('Id',123)
student.set('name','Ravi')
student.set('class','vi')
student.set('school','xyz')

console.log(student)

//overriding 
student.set('Id',1234)  

//fetch the values  => get 

console.log(student.get('school'))

console.log('fetching values')
console.log(student.get('address'))

//checking key is persent or not => has
console.log(student.has('result'))

//delete the entries

let student2 = new Map();
student2.set('Id',123)
student2.set('name','Ravi')
student2.set('class','vi')
student2.set('school','xyz')
console.log(student2.size)

//size 



student2.delete('Id')

console.log(student2)
console.log(student2.size)




// student2.set(1,"this number key value")
// student2.set("1","this number key value")


let marks = new Map([['math',45],['science',65]]);   // array of entries

console.log(marks)


//for of 

for(let [key,value] of marks){

console.log( key + ":"+ value)

}

//forEach 

marks.forEach(   (key,value) =>{
console.log(key)
console.log(value)
})




let student3 = new Map();
student3.set('Id',123)
student3.set('name','Ravi')
student3.set('class','vi')
student3.set('school','xyz')
console.log(student3.size)

console.log(student3.keys())
console.log(student3.values())

for( let key of student3.keys()){

    console.log(key + " its value is :"+student3.get(key))

}

for(let value of student3.values()){
    console.log(value)
}

// character occurance 
//duplicate characters in a string 
//first non-repeated character 


//set => it won't allow duplicates 

//avoid duplicates while stroing the values 
//to check value is there or not

let numbers = new Set();

//adding elements  => add
numbers.add(1)

numbers.add(2)
numbers.add(3)
numbers.add(3)

console.log(numbers)

//size 
console.log(numbers.size)


let numbers2 = new Set([1,2,3,4,5,6]);
console.log(numbers2)

//has 
//delete
//clear => it will delete all values

console.log(numbers2[0])

let arr = [1,2,3,3,4,4,5,5,6,6]  // [1,2,3,4,5,6]
let uniquenumbers = new Set();
for(let num of arr){

uniquenumbers.add(num)
}

console.log(uniquenumbers)



let numbers3 = new Set([1,2,3,4,5,6]);
console.log(numbers3)

for(let num of numbers3){
console.log(num)

}

console.log(typeof(numbers3))


// selenium vs playwright 
//playwright advantages

//string programs 
//array programs
//map and set programs


//class and 


















