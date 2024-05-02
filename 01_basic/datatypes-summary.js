// primitive

// 7 types : string, Number, boolearn, null, undefined, symbol, BIGINT

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol("123")
const anotherId = Symbol("123")
console.log("id===anotherId")

//Refrerence (Non Primitive)

// Array , Object , functions

const heros = ["shaktiman", "nan", "hameed"]
let myObj = {
    name: "hitesh",
    age:22
}

const myfunction = function(){
    console.log("hello word")
}

console.log(typeof scoreValue)