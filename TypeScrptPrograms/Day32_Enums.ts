/*

Enums => are used to store a group of related constansts

//instead of writing hardcoded values everywhere 



*/

// without enums 

let status =1

if(status ===1){
    console.log('active')
}else{
    console.log('inactive')
}

/*
nobody knows everythigs
difficult to maintains
*/

enum Status{
Active,
Inactive,
Pending
}


let status1= Status.Active; 



// syntax for enum 
/*
enum EnumName{
value1,
value2,
value3,
.....
}

example:


enum Driections{
north,
south,
east,
west
}


*/

//numeric enums
enum Driections{
north,   //0
south,   //1
east,   // 2
west    //3
}


console.log(Driections.north);



//Auto increment enums

enum Numbers{
a =15,  // 0
b,       // 16
c        //17
}

console.log(Numbers.c)

//string Enums

enum Browsers{
Chrome = 'CHROME',
Firefox = 'FIREFOX',
Edge = 'EDGE'
}

//heterogeneous ENums => both numbers and strings 

enum Heterogeneou{
    yes = 1,
    no = 'NO'
}


//custom enums
enum apiSatusCode{
    Sucess =200,
    CreationSucess = 201,
    NotFound =404,
    ServerError=500
}


console.log(apiSatusCode.Sucess)
//reverse mapping
console.log(apiSatusCode[200])  //success

//const enums

const enum Days{
  Monday,  // 0
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,

}







