
/*

Website (Webapplication) => 

    HTML => structure of your webpage 
    CSS - styling => look and feel things (colors, font,layouts and designs)
    javascript => funcationality or behavior to your webpage


  javascript will follow synchronous
    Synchronous execution => it will execute line by line

    once the line1 executed and completed then only it will go to second line
    line 1 to line10


    //Asnchronous execution


*/

//api calls 
//reading files
//datbases 
//timers
//downloading
//promises 
//playwright 

// console.log('Swicth on washing machine')
// console.log('Starting washing once clothes got washed')  // 1 hour
// console.log('switch off washing machine')
// console.log('getready')
// console.log('pack your bag')
// console.log('send your kid to school')


console.log('Swicth on washing machine')

setTimeout(() => {
    console.log('clothes are washed')
}, 3000);


console.log('getready')
console.log('pack your bag')
console.log('send your kid to school')

// we have problem with async also   
// async also very dangerous 


// if you async operations dependened on each other better go sequential executional execution


// await login  => background 
// await home page  // error
//await add a product 
//checkout



//lot of techniques to make your dependent aysnc calls into sequentail

//callback 
//promises 
//async functions with await keyword

setTimeout(() => {
    console.log('Connect to DB')
}, 1000);  //0


setTimeout(() => {
    console.log('fetch the records')
}, 10000);


setTimeout(() => {
    console.log('Edit the records')
}, 2000);

setTimeout(() => {
    console.log('close connection')
}, 1000);



// schronous execution

//aysnc exeuction => work if steps are independent with each other

// async exectuion => if steps are dependent with each other => you have to write logic to make it proper execution



setTimeout(() => {
    console.log('line2')
}, 20000);

setTimeout(() => {
    console.log('line1')
}, 1000);



//call back hell

//pyaramid of doom

setTimeout(() => {
    console.log('Connect to DB')
    setTimeout(() => {
        console.log('fetch the records')
        setTimeout(() => {
            console.log('Edit the records')
            setTimeout(() => {
                console.log('close connection')
            }, 250);
        }, 500);
    }, 1000);
}, 10000);






// promises 
// and aysnc and await


//tuple 
//destructuring 
















