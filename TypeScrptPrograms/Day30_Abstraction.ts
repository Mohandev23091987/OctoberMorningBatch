/*
Abstraction => hiding implementation details and exposing only the essentail functionalty to the user

=> user knows what object does 
=> but he doesn't know how it does it




Types of methods:
================
a)Abstract methods 
=> it declares a method
=> it doesn't have any implementation or body
=>if some class extends the abstract class they have to give implementation to the abstract methods 

abstract makepayment(amount:number):void;

b)Concerete method:
===================
paymentSuccess():void{

console.log('payment is success')

}




ways to achieve abstraction:
===========================
1)Abstract class
=> cannot be instantiated(creating an object) directly 
=> it designed to be inherited by other classes

An abstract class can contain
=> abstract methods (methods without body)
=> concrete methods 
=> properties 
=> costructor



2)Interfaces
=> its a other way to achieve abstraction
=> contract defined by interfaces should followed by implemented classes 
=> all your methods should be abstract




*/


//abstract class 

abstract class Payment {

    //abstract method 
    abstract makePayment(amount: number): void;


    //concrete method
    paymentSuccess(): void {
        console.log('payment is success')
    }

}


//=================================
class UPIPayment extends Payment {
    makePayment(amount: number): void {
        // provide logic to do payment using UPI
        console.log(`paid ${amount} using UPI`)
    }

      paymentSuccess(): void {
        console.log('payment is success in child class')
    }



}

let upiPayment = new UPIPayment();

upiPayment.makePayment(20000);
upiPayment.paymentSuccess();


//interfaces

interface Browser {
    lauchBrowser(): void;
    openUrl(url: string): void;
    closeBrowser(): void;
}

interface BrowserActions{
    performBrowserActions():void;
}

// implementing the interface

class ChromeBrowser implements Browser,BrowserActions {
    lauchBrowser(): void {
        console.log('launching chrome browser')
    }
    openUrl(url: string): void {
        console.log(`open the url : ${url}`)
    }
    performBrowserActions():void{
        
    }

    closeBrowser(): void {
        console.log('close the browser')
    }

    
}

let chromeBrowser  = new ChromeBrowser();
chromeBrowser.lauchBrowser();
chromeBrowser.openUrl('');
chromeBrowser.closeBrowser();

//


// typescript = javascript + type features(type notattion, type alias, union) + extended ooops 

//wednesday => plawright  function and methods , arrow functions 










