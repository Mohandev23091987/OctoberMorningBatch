// async and await 

//async will promise

// function step1(){
//  return new Promise((resolve,reject)=>{
//       resolve(10);
//  })
//  }
//   function step2(num){
//      return new Promise((resolve,reject)=>{
//       resolve(num*2)  // 20
//      })
//  }
//   function step3(num){
//   return  new Promise((resolve,reject)=>{
//       resolve(num+10)  //30
//      })
//  }

//  step1()  // promoise with 10 result
//  .then((result)=>{
//     return step2(result)  // promise with 20 result
//  })
//  .then((result)=>{
//     return step3(result)   // promise 30 
// })
// .then((result)=>{
//    console.log(result)
// })




async function step1(){
 return new Promise((resolve,reject)=>{
      resolve(10);
 })
 }


  async function step2(num){
     return new Promise((resolve,reject)=>{
      resolve(num*2)  // 20
     })
 }

  async function step3(num){
  return  new Promise((resolve,reject)=>{
      resolve(num+10)  //30
     })
 }


 
let result2 =await step1();
let result3 = await step2(result2);
let finalresult = await step3(result3);


//.click  .fill
//await 

//make our sync 
//await while calling 


async function login(){
  Promise.resolve('login successful')
}

async function checkorders(){
    Promise.resolve('checkorder')
}

await fun1();
await fun2();








// async => you have to use wait

// normal => await 
