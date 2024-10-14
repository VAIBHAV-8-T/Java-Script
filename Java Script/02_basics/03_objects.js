// object literals
const mySym = Symbol("key1")

const JsUser ={
    name :"vaibhav ",
    "full name" : "Harshit Vaibhva",
    [mySym] : "mykey1",
    age : 24,
    location : "bhopal",
    email : "vaibhav@google.com",
    isLoggedIn : "false",
    lastLoggedinDays : ["monday,tuesday"]
}
// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

// JsUser.email = "vaibh@yahoo.com"
// Object.freeze(JsUser)
// JsUser.email = "har@opera.com"
// console.log(JsUser);


JsUser.greeting = function(){
    console.log(`Hello JS User,${this.name}`);

}

JsUser.greetingTwo = function(){
    console.log("Hello JS User");
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
