
//without overloading
class Calculator{

    // // add two numbers

    // addNumbers(a:number,b:number):number{
    //  return a+b;
    // }

    // addStrings(a:string,b:string):string{
    //  return a+b;
    // }

    //signatures 
    add(a:number,b:number):number;
    add(a:string,b:string):string;
    
    //number|string  => union types
    //implementation
    
    
    add(a: string|number,b:number|string):number|string{
      
        if(typeof(a)==='number' && typeof(b)==='number'){
        return a+b;
        }
        
        if(typeof(a)==='string' && typeof(b)==='string'){
        return a+b;
        }
        throw new Error('Invalid arguments')


    }


  


}


let obj = new Calculator();


console.log(obj.add('Ram','sita'))

console.log(obj.add(7,9))

