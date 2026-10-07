


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




//slice 

let str13 = 'playwright'
console.log(str13.slice(0,4))
console.log(str13.slice(4))

//today assignment substring vs slice


//split  it will take a delimiter and split the string into array of strings

let str14 = 'I am mohan' // ['I','am','mohan']

let arr = str14.split(' ')
console.log(arr)

let str15 = 'ravaviarama'  // [r,v,vi,r ,m]

console.log(str15.split('a'))   // "Vegetables,fruits,grains"

//repeat  it will repeat the string n times

let str16 = '*'
console.log(str16.repeat(20))


//trim     "            fruits     "  => "fruits"
//trimStart "fruits     ""
//trimEnd  "       fruits"

let str17 = '     fruits     '

console.log(str17.trim())

//padding 
//padStart  it will add padding to the start of the string
//padEnd  it will add padding to the end of the string

console.log("5".padStart(3,'0') )




//+

console.log('hello'+ ' ' + 'ram') 

console.log('hello '+ 'ram')
console.log('hello'+ ' ram')
//

console.log('hello'.concat(' ','ram'," how are you") ) 


// "ravi".length => 4

//  index or charAt   => "ravi"[1] => a  "Ravi".charAt(1) => a


//  "   Ravi   ".trim()

// "Ravi is good"

// "   ramesh and raju are good    "

console.log("Ravi is good".substring(8))

let arrayOfwords = "   ramesh and raju and ravi and vent are good    ".trim().split(' ')

console.log(arrayOfwords[arrayOfwords.length-1] )

// "ravi".includes('a') => true



//reverse a string 

let strname = "ravi"  //=> ivar 
let rev = ""  // r


// for(let char of strname ){   // a
// rev = char +rev   // i+v+ a+r
// }

// console.log(rev)


for(let i=strname.length-1; i>=0; i--)
{
    rev = rev + strname[i];
}

console.log(rev)

//["p","l","a","y","w","r","i","g","h","t"]
//["t","h","g","i","r","w","a","l","p"]
console.log("playwright".split('').reverse().join(''))


//palindrome 

//count of vowels in a string


//occurance programs   => map or object
//count each character in a string 
//count each word in a sentence 
//duplicate characters 
//unique characters 
//first non repeating character
//first duplicate character


let str18 = 'mmoohan'
let charcount ={}
//{p:2,}
for(let char of str18){  //m
if(charcount[char]){  //1
 charcount[char] = charcount[char]+1
}else {
charcount[char] = 1
}
}

console.log(charcount)

for(let char in charcount){

if(charcount[char]==1){

  console.log(char + " occurance is " + charcount[char])
}

}






















