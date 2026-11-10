//without overloading

function getUserByEmpId(id:number){
//logic
}

function getUserByEmailID(emailId:string)  // signarture 
//implementaion or body of a function
{
//logic    // 
}

//funciton overloading concept
//step1 : all the method/function signature
 
function getUser(id:number):void;
function getUser(emaild:string,age:number,id:number):void;
//function getUser(x:boolean):void;

//step 2: providing the implementation it should all the signatures

function getUser(input:string|number,age?:number,id?:number):void{
  console.log('fecth the user detail and print it')
}

getUser(123)
getUser('ram',29,123)



//





