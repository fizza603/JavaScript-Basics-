"use strict"; //treat all JS Code as newer version



let Name = "Fizza Tariq"
let age = 22
let isLogin = false
let State;


// number = 2 to power of 53
// bigint
//string => ""
// Boolean => true/false
//null => stand alone value(representation of empty value)
//undefined => variable declare but no value is assigned
//symbol => unique

//object
// console.table([Name,age,isLogin,State]);

// console.log(typeof null);//output:object
// console.log(typeof undefined);  //output:undefined
 
let score = "33qdas"

// console.log(typeof score);

let ValueinNumber = Number(score)
// console.log(typeof ValueinNumber);
// console.log(ValueinNumber);


// "33" => 33
// "33qsd" => NaN
// true=> 1 , false => 0
let isLoggedIn  = "fizza"
let BooleanisLoggedIn = Boolean(isLoggedIn)
// console.log(BooleanisLoggedIn)


// 1 => true ; 0 => false

//Notes of Datatypes
//two type of data types --Premetive  --non premitive

//Premetive

// 7 Types --String --Number --Boolean --null --undefined --Symbol --BigInt

// Non-premetive(Reference)
// Arrays --objects --Functions
const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id == anotherId)



// ++++++++++++++++++++++++++++

//  stack (Primitive), Heap(Non-primitive)

let myEmail = "tariqfizza70@gmail.com"

let anotherEmail = myEmail
anotherEmail = "fizz@gmail.com"

// console.log(myEmail);
// console.log(anotherEmail);

let userOne = {
    email: "user@gmail.com",
    password: "Fizza1245"

}
let userTwo = userOne
userTwo.email = "fizza@google.com"

console.log(userOne.email);




