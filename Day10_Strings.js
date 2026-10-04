


let str = 'mohan'

console.log(typeof(str))

//we can strings 
 let way1 = 'ravi'
 let way2= "ravi"
 let way3 = ` this is ${way2}`  // template literal

//acessing a string

let str2 = 'ravi'    // sequence of character  // array of characters 


 //strings are immutable

 let str3 = 'ravi'

str3 = 'mohan'

console.log(str3)


let empname = 'Ravi'

empname[0]="K" 



console.log(empname)


// escape characters     '  n  t

//hi hello "mohan"

let str6 = "hi hello \n mohan"    //   hi hello "mohan"

console.log(str6)
//   \n   \t


let str9 = 'playwright'

//toUpperCase 

console.log(str9.toUpperCase())

console.log("RAVI".toLowerCase())

console.log("ravi".length)  //4

console.log('playwright'.charAt(15)) 

console.log('plagywright'.indexOf('z'))  // -1

//includes 
console.log('I am mohan'.includes('am',4)) // true

let str11 = 'playwright'
console.log("aeiouAEIOU".includes(str11[5]))  //true

let message = "error : provide aadhar"

if(message.startsWith('warning')){
    console.log('its a warning message')
}else if(message.startsWith('error')){
    console.log('its a error message')
}

console.log("Ravi".startsWith("Rav"))

console.log("Ravi".endsWith('vi'))


//substring it will fetch part of the string 

console.log('Hello'.substring(0))  // Hello 
console.log('Hello'.substring(1))  //ello
console.log('Hello'.substring(1,4))

//replace  replaces only its first occurance

console.log('raavi'.replace("a","k"))  //rkavi 

//replaceall
console.log('raavi'.replaceAll("a","k"))

let str10 = "mohan";
let vowelcount =0;


for(let i=0; i<str10.length-1; i++){

if("aeiouAEIOU".includes(str10[i])){
    vowelcount++;
}
}

console.log(vowelcount)

let numbersting = '1234gjhgj6456^**^*^&*'





