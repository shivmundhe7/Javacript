// Business Name Generator

// Crazy , Amazing , Fire
// Engine , Foods , Garments
// Bros , Limited , Hub

let a = ["Crazy","Amazing","Fire"]
let b = ["Engine","Foods","Garments"]
let c = ["Bros","Limited","Hub"]

let first_name = a [Math.floor(Math.random() *a.length)]+" " +
                 b [Math.floor(Math.random() *b.length)]+" " +
                 c [Math.floor(Math.random() *c.length)];

console.log("This Business Name Generater Made By Shiv Mundhe")
console.log("Generated Business Name : " + first_name)