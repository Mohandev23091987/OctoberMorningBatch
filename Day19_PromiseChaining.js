 
 function step1(){
 return new Promise((resolve,reject)=>{
      resolve(10);
 })
 }
  function step2(num){
     return new Promise((resolve,reject)=>{
      resolve(num*2)  // 20
     })
 }
  function step3(num){
  return  new Promise((resolve,reject)=>{
      resolve(num+10)  //30
     })
 }

 step1()  // promoise with 10 result
 .then((result)=>{
    return step2(result)  // promise with 20 result
 })
 .then((result)=>{
    return step3(result)   // promise 30 
})
.then((result)=>{
   console.log(result)
})



function step6(){

return new Promise((resolve)=>{

  resolve('mohan')

})
}


function step7(str){

return new Promise((resolve)=>{

  resolve(str+ 'Dev')

})
}




step6().then(result=>{  return step7(result) }).then((result)=>{console.log(result)})


// static promise function 

//difference betwen static methods and instance methods in javascript




let promise12 = new Promise((resolve,reject)=>{

})













function step1(){
 return new Promise((resolve,reject)=>{
      resolve(10);

 })
 }
  function step2(){
     return new Promise((resolve,reject)=>{
      resolve(20)
     })
 }
  function step3(){
  return  new Promise((resolve,reject)=>{
      resolve(30)
     })
 }

 step1()
 .then((result)=>{
    console.log(result)
    step2
})
 .then(step3)

