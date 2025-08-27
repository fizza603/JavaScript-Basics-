// Immidiately Invoked Function Expressions (IIFE)
(function db(){
    console.log(`DB CONNECTED`);
    
})();
// global scope ky pollution se pb hoti ha kai baar global scope ky jo variable ha usko hatane ky liye hum paranthesis use krte ha 
( (name) => {
    console.log(`DB CONNECTED To ${name}`);
    
})('fizza');