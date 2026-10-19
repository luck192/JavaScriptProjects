

 // Arrow functoion;

//  function getExp(x,y){
//     let ans = x**y;
//     return ans;
//  }
//  console.log(getExp(2,10));

// let getExp = function (x,y){
//     let ans = x**y;
//     return ans;
//  }
//  console.log(getExp(2,10));

// let getExp = (x,y) =>{
//     let ans = x**y;
//     return ans;
//  }
//  console.log(getExp(2,10));

//object-------------------------------------

// let obj ={
//     name: "love",
//     age: 25,
//     weight: 55,
//     greet:function(){
//         console.log("helloo");
//     }
// };

// console.log(typeof(obj));
// obj.greet();  

//ARRAYS

// let arr= [1,2,3,4,"love"]
// // console.log(arr);

// let brr = new Array("love", 1 , true);
// brr.push("bbabr");
// brr.splice(1,2,"alj");
// console.log(brr);

// let numbers =[10,20,30,11,21,23,4,5,9];
 
// let evenArr = numbers.filter( (number) =>{
//     if(number&1)return false;
//     return true;
// });
// console.log(evenArr);

// let x = 0;
// for(let i =0; i <5; i++){
//         x+=numbers[i];
// }
// console.log(x);


// let squareNumbers = numbers.map( (num) =>{
//     return num*num;
// });

// console.log(squareNumbers);

// let ans = numbers.reduce( (acc,curr) =>{
//     return acc+curr;
// } ,0);

// console.log(ans);

//------------------------45------------------

function sayMyName(finalName){
    console.log(finalName);
}

sayMyName("babar"); 