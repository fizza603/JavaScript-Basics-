let a = 300
if (true){
    let a = 10
    const b = 20
    // console.log("Inner: ",a);//block scope
    
}

// console.log(a);//global scope
//console.log(b);


function one(){
    const username = "Fizza Tariq"
    function two(){
        const website = "IT Networks"
        console.log(username);
        
        
    }
    // console.log(website); --- This is not executed bcz it is outside the scope
    
    
    two()
}
// one()

if (true){
    const username = "Fizza Tariq"
    if (username === "Fizza Tariq") {
        const website = " Youtube"
        // console.log(username + website);
        
    }
    // console.log(website);
    
}
// console.log(username);

// +++++++++++++ Intresting +++++++++++++++++

function addone(num){
    return num+1
}
console.log( addone(5));


const addTwo = function(num){
    return num + 2
}
console.log(addTwo(5));
