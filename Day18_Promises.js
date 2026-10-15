/*
promise is an object 


outcome or states of promises:

pending => still your promise is running
success => completed successfully
failure => promised failed with error


*/

//promise syntax
 /*promise then => postivie result
     catch => failure
      finally => you are going to write cleanup code 


    */
     let promise= new Promise( (resolve,reject)=>{
            
            console.log('this is the executor function')
            let sucess = false;

            if(sucess){
                resolve('operation suceeded')
            } else{
                reject('operation failure')
            }
             });


    

      promise
      .then((a)=>{
         console.log(a)
            
      }  
      )
      .catch((error)=>{
        console.log(error)
      })
      .finally(()=>{
        console.log('clean up completed')
      }

      );


     




