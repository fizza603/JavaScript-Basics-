

function sayMyName(){
    console.log("F");
    console.log("I");
    console.log("Z");
    console.log("Z");
    console.log("A");

}
// sayMyName()

// function addNumbers(num1, num2){
//     console.log(num1 + num2);
    
// }


function addNumbers(num1, num2){
    let result = num1 + num2
    return result
    
}
const result = addNumbers(3, 4)
// console.log("Result: ",result);
// function loginMsg(username){
//     if(username === undefined){
//         console.log("Please enter your username");
//         return
//     }
//     return `${username} just logged in`
// }
// console.log(loginMsg())
//console.log(loginMsg("fizza"))

function calCartPrice(...num1){
    return num1
}
console.log(calCartPrice(200, 400, 450))


const  user = {
    username: "Fizza",
    price: 199
}
function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
    
}
// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600];

function returnTwoValues(arr) {
  return [ arr[1], arr[2] ];
}

console.log(returnTwoValues(myNewArray)); 
