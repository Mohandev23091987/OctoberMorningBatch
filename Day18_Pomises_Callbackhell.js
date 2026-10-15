
 function connectToDB() {

    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log('Connect to DB');
            let dbconnection = true
            if(dbconnection){
              resolve();
            }else{
               reject();
            }
            
        }, 1000);
    })
}


 function fetchRecords() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('fetch the records');
            resolve();
        }, 10000);
    })
}

 function updateRecords() {
    return new Promise((resolve) => {
setTimeout(() => {
    console.log('Edit the records');
    resolve();
}, 2000);
    })
}

 function closeConnection() {
    return new Promise((resolve) => {
setTimeout(() => {
    console.log('close connection')
    resolve();
}, 1000);
    })
}

connectToDB()
.then(fetchRecords)
.then(updateRecords)
.then(closeConnection)
.catch(()=>{
  console.log('Db failed')

})
.finally()




