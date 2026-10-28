
let b:number;

b= 50;

//b='Ram'  => type checking


//inference come into picture
let c = true;  // boolean
 //c= 'Ram'


 //union types
let Id:number|string;  // strict checking
 Id = 123;
 Id = 'ID123';

 let empId:any;  // breaking strict checking




 function calculateTotalPrice(price:number,quantity:number):number{
    return price*quantity;
 }

// type allais => creating your own dataype
 type TestStatus = "pass"|"fail"|'skippped'

 let runstatus:TestStatus;

 runstatus ="pass"


 //interface


 function displayId(id: number|string):string{
    if(typeof id === 'string'){
        return id.toUpperCase();
    }else{
        return 'error'
    }
}
console.log(displayId("3129"));




