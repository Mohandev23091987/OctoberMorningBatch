


let arr = [1,2,3,4,5]  //arr[0], arr[1]

// for(let i=0; i< arr.length;i++){
// console.log(arr[i])

// }

// for(let num of arr ){  // 1
// console.log(num)
// }

let countOfEvenNumbers =0;
let countOfOddNumbers =0;


for(let num of arr ){
    
    if(num%2==0){  //0===0 falsy
         console.log(num+ 'is an even number')
         countOfEvenNumbers++  //1
    }
    else 
    {
        console.log(num+ 'is an odd number' )
        countOfOddNumbers++  //1   
    }
}

console.log(countOfEvenNumbers)
console.log(countOfOddNumbers)

let empname = 'ravi'   // empname =['r','a','v','i']

for(let char of empname){

    if(char =='a' || char =='e' ||char =='i' || char =='o' ||char =='o'){
    console.log(char)
    }
}

//for in 
 let empdetail ={
    name:'Ravi',  // name is a key  , ravi its value  empdetail[name]=> Ravi
    age:30,
    address:'Bengaluru'
 }

 for(let key in empdetail){

    console.log(key + ' vaulue is '+empdetail[key])
    // console.log(empdetail[key])


 }



 //conditional , loops 

