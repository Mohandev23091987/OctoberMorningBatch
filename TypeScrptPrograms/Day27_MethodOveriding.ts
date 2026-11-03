class Animal{

    run():void{
      console.log('all animals runs')  
    }

    sound():void{
        //100 lines
        console.log('every animal makes sound')
    }
}

class Dog extends Animal{

    
    sound():void{
        super.sound();
        console.log('dog barks')
    }

    loyal():void{
        console.log('its loyal')
    }
}

let DobObj = new Dog();
DobObj.sound();

//polymorphism => method overriding + method overriding 


