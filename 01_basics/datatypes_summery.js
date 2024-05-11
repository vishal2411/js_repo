//  1)Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// 2)Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3


/* if we are using typeof function then we get this value of datatypes
Undefined	"undefined"
Null	"object"
Boolean	"boolean"
Number	"number"
String	"string"
Object (native and does not implement [[Call]]) =	"object"
Object (native or host and does implement [[Call]]) =	"function"
Object (host and does not implement [[Call]]) =	Implementation-defined except may not be "undefined", "boolean", "number", or "string". */


//stack (primitive) heap (non-primitive)

let youtubename = "vishal@youtubename.com"
let anothername = youtubename
anothername = "codewithvishal"

console.log(anothername);
console.log(youtubename);

let userone = {
    email:"vishal@gmail.com",
    upi:"vishal@yble"
}
let usertwo = userone

usertwo.email = "googel@gmail.com"

console.log(userone.email)
console.log(usertwo.email)