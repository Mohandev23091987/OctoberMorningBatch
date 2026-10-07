
//splice  => mutate method   - add ,remove, it will replace also 
//array.splice(start,deletecount,iteem1,item2...)


let arr = [3,4,5,6,7]   
arr.splice(2,2)   // [3,4,7]  // delete

console.log(arr)

arr.splice(2,0,6)  //[3,4,6,7]  // added the elements
console.log(arr)

arr.splice(1,1,10) //replacement  // 4
console.log(arr)

let arr20 =[2,3,4,5,6,7,8]  // [2,20,30,6,7,8]

arr20.splice(1,3,20,30)  //

console.log(arr20)


//iterate methods
//map  => it will transforms each element in an array 



/*arr.map((element,index,array)=>{
    
    // business logic
    
    })


    let transormdarray= array.map(element=> element + 2 ) // new transformed [3,4,5]

    */

let arr1 = [1,2,3,4]

let newarr = arr1.map(num => {return num +2})  //  return num+2

console.log(newarr)

let arr10 = ['Ravi','Mohan','Dev']

let lenarray =arr10.map( (ele,index,arr) =>{ 
    //console.log(ele);
    //console.log(index);
    //console.log(arr);
    //console.log(ele)
    return ele.length
}  )

// => ele.length
console.log(lenarray)


//filter 

//array.filter((element,index.array)=>{condition})   // new array 

let arr2 = [1,2,3,4,5,6,7,8]

let evenarray = arr2.filter( num => num%2===0)       // [2,4,6,8]

console.log(evenarray)

//reduce => reduces your output to single value

let arr3 = [1,2,3,4]  //sum=0  sum = sum +element 

//array.reduce( (accumulator,element,index,array) => logic,intialvalue )

let sum = arr3.reduce((result,num)=> result+num,0)  // result =3

console.log(sum)

let rwords =[2,5,3]

// sum =0 ,  sum + ele.lenth

let result = rwords.reduce((product,ele)=>{




return product*ele

},1)

console.log(result)







//search methods 

// find => it will check condition and return first element
 let arr11 = [10,20,20,40]

 console.log(arr11.findLast(num=> num>15))

 //indexOf
 //lastIndexOf

 console.log(arr11.indexOf(20,0))  //1


