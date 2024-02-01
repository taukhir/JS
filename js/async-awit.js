/*
 * Async 
 */
async function test(){

console.log('test executed');

return 10;
    
}


// test().then((data)=>console.log(data));
test().then(console.log);


/*
 * await
 */

let asyncOps = new Promise((resolve,reject)=>{

    setTimeout(()=>{
        console.log('executed after timeout');
        resolve('resolved');
    },3000);


});


async function test2(){

    await asyncOps.then((data)=>console.log(data));
    console.log('executed before timeout');
}

