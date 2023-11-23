'use strict';

// function calcAge(birthYear) {
//     const age = 2023 - birthYear

//     function printAge() {
//         const output = `You are ${age}, born in ${birthYear}`
//         console.log(output)

//         if (birthYear >= 18 && birthYear <= 1996) {
//             var millenial = true
//             const str = `Oh, and you're a millenial, ${firstName}`
//             console.log(str)
//         }

//         console.log(millenial)
//     }

//     printAge()

//     return age
// }

// const firstName = 'Jonas'

// calcAge(1991)

// Variables
// console.log(me)
// console.log(job)
// console.log(year)


// var me = 'Jonas'
// let job = 'teacher'
// const year = 1991

// //Functions

// console.log(addDecl(2, 3))
// console.log(addExpr)
// console.log(addArr)

// function addDecl(a, b) {
//     return a + b
// }

// const addExpr = function(a, b) {
//     return a + b
// }

// var addArr = (a, b) => a + b;

// Example

// if (!numProducts) deleteShoppingCart()

// var numProducts = 10

// function deleteShoppingCart() {
//     console.log('All products deleted')
// }

// console.log(numProducts === window.numProducts)

// console.log(this)

// const calcAge = function(birthYear) {
//     const age = 2023 - birthYear
//     console.log(this)
// }

// calcAge(1991)

// const calcAgeArrow = (birthYear) => {
//     const age = 2023 - birthYear
//     console.log(this)
// }

// calcAgeArrow(1991)

// const jonas = {
//     year: 1991,
//     calcAge: function() {
//         console.log(this)
//         console.log(2037 - this.year)
//     }
// }

// jonas.calcAge()

// const matilda = {
//     year: 2017
// }

// // method borrowing
// matilda.calcAge = jonas.calcAge;

// matilda.calcAge()

// // Leads to TypeError: undefined
// const f = jonas.calcAge
// f()

// var usage creates properties on global object (which is bad practice)
// var firstName = 'Matilda'

// const jonas = {
//     firstName: 'Jonas',
//     year: 1991,
//     calcAge: function() {
//         // console.log(this)
//         console.log(2037 - this.year)

//         // 'this' is undefined within a regular function, so assigning it to a variable
//         const self = this
//         const isMillenial = function() {
//             console.log(self)
//             console.log(self.year >= 1981 && self.year <= 1996)
//         }

//         isMillenial()
//     },
//     // leads to undefined error as arrow function does not have 'this' keyword, so uses keyword from parent scope (global)
//     // greet: () => console.log(`Hey ${this.firstName}`)
//     greet: function() {
//         console.log(`Hey ${this.firstName}`)
//     } 
// }

// jonas.greet()
// jonas.calcAge()

// const jonas = {
//     firstName: 'Jonas',
//     year: 1991,
//     calcAge: function() {
//         // console.log(this)
//         console.log(2037 - this.year)

//         // use of arrow function means 'this' inherits this keyword from parent scope (so jonas object), this code works
//         const isMillenial = () => {
//             console.log(this)
//             console.log(this.year >= 1981 && this.year <= 1996)
//         }

//         isMillenial()
//     },
//     // leads to undefined error as arrow function does not have 'this' keyword, so uses keyword from parent scope (global)
//     // greet: () => console.log(`Hey ${this.firstName}`)
//     greet: function() {
//         console.log(`Hey ${this.firstName}`)
//     } 
// }

// jonas.greet()
// jonas.calcAge()

// const addExpr = function(a, b) {
//     console.log(arguments)
//     return a + b
// }

// addExpr(2, 5, 7)

// // arguments is undefined for arrow functions, leading to Reference Error
// var addArr = (a, b) => {
//     console.log(arguments)
//     return a + b
// };

// addArr(2, 5)

// let age = 30
// let oldAge = age
// age = 31
// console.log(age)
// console.log(oldAge)

// const me = {
//     name: 'Jonas',
//     age: 30
// }

// const friend = me
// // changing friend's property changes me's property
// friend.age = 27
// console.log(friend)
// console.log(me)



//Primitive types
// let lastName = 'Will'
// let oldLastName = lastName
// lastName = 'Davis'
// console.log(lastName, oldLastName)

// // Reference Types
// const jessica = {
//     firstName: "Jessica",
//     lastName: 'Williams',
//     age: 27
// }

// const marriedJessica = jessica
// marriedJessica.lastName = 'Davis'
// console.log('Before marriage', jessica)
// console.log('After marriage', marriedJessica)


// Copying Objects with new properties (a new object created in the heap)
// this is a SHALLOW copy so only copies properties of first level
// deep copy copies everything
const jessica2 = {
    firstName: "Jessica",
    lastName: 'Williams',
    age: 27,
    family: ['Alice', 'Bob']
}

const jessicaCopy = Object.assign({}, jessica2)
jessicaCopy.lastName = 'Davis'
jessicaCopy.family.push('Mary')
jessicaCopy.family.push('John')

console.log('Before marriage', jessica2)
console.log('After marriage', jessicaCopy)
