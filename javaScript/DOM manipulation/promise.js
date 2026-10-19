// let firstPromise = new Promise( (resolve,reject ) =>{
//     console.log("firstPromise");  
//     resolve(1000);
// // } );

// let promise1 = new Promise((resolve, reject)=>{
//     let sucess = false;
//     if(sucess)resolve("promise FulFilled");
//     else reject("REJECT");
// }) ;

// promise1.then(( message) =>{
//     console.log( "then ka message is"+message);
// })

// promise1.catch(( error) =>{
//     console.log( " error is: "+error);
// })

// async  function getData(){
//     setTimeout(function(){
//         console.log("i am inside block")
//     }, 5000);
//  }

//  getData();

// async function getdata(){
    
//     // get request -async
   
//     let response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    
//     //parse josn - async
    
//     let data = await response.json();
    
//     // let t2 = performance.now();
//     // for(let i =0; i<=10000000;i++){

//     // }
//     //  let t1 = performance.now();
//     // console.log( "total time to parse the data is: "+ (t1-t2))

//     console.log(data);
// }
// getdata();

//closure------------------------------------------
function outer(){
    let name = "babar";
    function innerFunction(){
        console.log(name);
    }
   return innerFunction;
    
}
let inner = outer();
inner();