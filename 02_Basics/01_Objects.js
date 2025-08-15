// ++++++++++++++  Objects +++++++++++++++

// Singleton 
// const tinderUser = new Object() --Sindleton

const tinderUser = {}

tinderUser.id = "112211"
tinderUser.name = "Sammmy"
tinderUser.isLoggedIn = false
// console.log(tinderUser);

const User = {
    email : "some@gmail.com",
    fullname: {
        userName: {
            FirstName: "Fizza",
            LastName: "Tariq"
        }
    }
}
// console.log(User);
// console.log(User.fullname.userName);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

// const obj4 = Object.assign({}, obj1, obj2, obj3)
// const obj5 = {...obj1, ...obj2}
// console.log(obj4);

const users = [
    {
        id: 1,
        email:"someone@gmail.com"
    },
    {
        id: 1,
        email:"someone@gmail.com"
    },
    {
        id: 1,
        email:"someone@gmail.com"
    },
    {
        id: 1,
        email:"someone@gmail.com"
    },
    {
        id: 1,
        email:"someone@gmail.com"
    },
    {
        id: 1,
        email:"someone@gmail.com"
    },

]

// console.log(users[1].email);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));


const course = {
    coursename: "JS Tutorial",
    price: "999",
    courseInstructor: "Hitesh"
}
// console.log(course.courseInstructor);
// ++++ Destructure of an Object +++++++++
const {courseInstructor: instructor} = course

console.log(instructor);





// Object Literals
const mySym = Symbol("mykey")
const JsUser ={
    name: "Fizza Tariq",
    age: 22,
    location: "karachi",
    [mySym]: "myKey1",
    "fullname": "FTM",
    email: "tariqfizza70@gmail.com",
    isLoggedIn: false,
    lastLoggedInDays: ["Monday", "Tuesday", "Friday"]
}
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["fullname"]);
// console.log(typeof JsUser[mySym]);

JsUser.email = "Fizza@google.com"

// Object.freeze(JsUser)
JsUser.email = "Fizza@chatgpt.com"
// console.log(JsUser);

JsUser.greeting = function(){
    // console.log("Hello JS User");
    
}
JsUser.greetingTwo = function(){
    // console.log(`Hello Js Users, ${this.name}`);
    
}
// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());
