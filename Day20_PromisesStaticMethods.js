
// Promise.resolve(value)
let resolvedPromise = Promise.resolve('validation successfull')


resolvedPromise.then(result=> {console.log(result)})

// Promise.reject(error)


let rejectPromise = Promise.reject('error in login')


resolvedPromise
.then(result=> {console.log(result)})
.catch(error=>{
   console.log(error) 
})

//multiple independent promises 

// Promise.all([promise1,promise2,promise3 ......])

// get all 3 promises results
// if one of then got failed it will treat all are failed


let promise1 = Promise.resolve('fetch data ')
let promise2 = Promise.resolve('checkorders')
let promise3 = Promise.resolve('userprofile')


Promise.all([promise1,promise2,promise3])
.then(result=> {console.log(result)})
.catch(error=>{console.log(error)})

let promise4 = Promise.resolve('fetch data ')
let promise5 = Promise.resolve('checkorders')
let promise6 = Promise.reject('userprofile')


Promise.all([promise4,promise5,promise6])
.then(result=> {console.log(result)})
.catch(error=>{console.log(error)})


//Promise.allSettled()

let promise7 = Promise.resolve('fetch data ')
let promise8 = Promise.resolve('checkorders')
let promise9 = Promise.reject('userprofile')


Promise.allSettled([promise7,promise8,promise9])
.then(result=> {console.log(result)})


// Promise.race([p1,p2,p3............])

let raceP1= new Promise((resolv,reject)=>{

setTimeout(()=>{reject('Ramesh- error')},500)

})

let raceP2= new Promise((resolve)=>{

setTimeout(()=>{resolve('suresh')},2000)

})

let raceP3= new Promise((resolve)=>{

setTimeout(()=>{resolve('Dev')},1000)

})

Promise.any([raceP1,raceP2,raceP3])
.then((result)=>{console.log(result)})
.catch((error)=>{console.log(error)})

// assignment 
//Promise.any()

