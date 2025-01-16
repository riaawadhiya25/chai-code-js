const accountId =101; //it can not change 
let accountEmail ="riya@gmail.com";
var accountPassword ="12345"; 
accountCity ="jaipur";  //its also a way but its incorrect way
let accountState;
// { scope } 
// accountId =2;
accountEmail ="riyaaaa@gmail.com";
accountPassword = "55555";
accountCity="jabalpur";
console.table([accountId, accountEmail,  accountPassword, accountCity, accountState] );
/* 
perfer not to use var 
because of issue block and functional scope
*/ 

"use strict"; //treat all js code as newer version 

// alert(3+3);  

console.log(3+3); 
console.log("riya");

// Data types

//number => 2^53
//bigint 
//boolean => true/false
//undefined
//null => standalone value
//symbol => when we talk about unique
//typeOf => it is used to  define type 

console.log(typeof null);  //object type
console.log(typeof undefined); //undefined
console.log(typeof accountEmail); //string
console.log(typeof accountId);  //number
