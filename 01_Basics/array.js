const myArray = [0, 1, 2, 3, 4, 5]
console.log(myArray[4]);

const myUsers = ["Fizza", "Hafsa", "Salman", "Sana", "Saif"]
const myArray2 = new Array(1, 2, 3, 4)


// Array methods
myArray.push(6)
myArray.pop()
myArray.shift()
console.log(myArray);
console.log(myArray.includes(9));
console.log(myArray.indexOf(4));


// slice and splice
console.log("A", myArray);
const myn1 = myArray.slice(1,3)
console.log(myn1);

console.log("B", myArray);

const myn2 = myArray.splice(1,3)
console.log(myn2);


const marvel_heroes = ["thor", "Ironman", "spiderman"]
const dc_heroes = ["superman", "flash", "batman"]
marvel_heroes.push(dc_heroes)
console.log(marvel_heroes);
const allHeroes = marvel_heroes.concat(dc_heroes)
console.log(allHeroes);


// spread operator
const new_heroes = [...marvel_heroes, ...dc_heroes]
// console.log(new_heroes);


console.log(Array.isArray("Fizza Tariq"));

console.log(Array.from("Fizza Tariq"));

console.log(Array.from({name: "Fizza Tariq"}));

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));





