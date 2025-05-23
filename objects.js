//sigleton 

//object literals

const mysym = Symbol("key1");
// object.cret
const JsUser = {
    "name": "Hitesh",
    "full name":"Hitesh choduty",
    [mysym]:"mykey1",
    age: 18,
    location: "jaipur",
    email: "harshil@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","saturday"]
}


console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mysym]); 

JsUser.email = "harshil$856576";
console.log(JsUser["email"]);

