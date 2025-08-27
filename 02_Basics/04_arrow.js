const user = {
    username : "Fizza",
    price: 999,
    welcomeMessage: function() {
        console.log(`${this.username}, welcome to the website`);
        
    }
}
// user.welcomeMessage()
// user.username = "Lasma"
// user.welcomeMessage()
// This keyword current context to refer krta ha 


// function first(){
//     let username = "Fizza"
//     console.log(this.username);
    
// }
// first()
//function ky ander this work nh kr raha object ma kar raha ha 


// const first = function(){
//     let username = "fizza"
//     console.log(this.username);
    
// }
// first()


// const first = () => {
//     let username = "fizza"
//     console.log(this);
    
// }
// first()

// const addTwo = (num1,num2) => {
//     return num1 + num2
// }
//implicit arrow funtion
// const addTwo = (num1,num2) =>  (num1 + num2)

const addTwo = (num1,num2) =>  ({username: "fizza"})

console.log(addTwo(3, 4));

const myArray = [2, 3, 5, 7. 8]
myArray.forEach()



