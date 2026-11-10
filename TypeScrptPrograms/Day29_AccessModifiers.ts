class Animal{
    private  sound:string ='Roar';

    displayinParent(){
        console.log(this.sound);
    }

}

// class Lion extends Animal{
//     display(){
//         console.log(this.sound);
//     }
// }

// let lion = new Lion();
//  lion.display()

 //console.log(lion.sound)


 let animal = new Animal();
 animal.displayinParent();

 animal.sound