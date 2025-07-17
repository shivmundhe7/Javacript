console.log("Hello iam Opertor")

let age = 17;
let grace = 1

// Arithmatic Operators
// console.log(age + grace) Addition 
// console.log(age - grace) Substractrion
// console.log(age / grace) Division
// console.log(age * grace) Multiplication
// console.log(age ** grace) Exponentional
// console.log(age % grace) Modulus

console.log(age + grace)

// Assignment Operators

// ==   (x=y)
// +=   (x=x+y)
// -=   (x=x-y)
// *=   (x=x*y)
// /=   (x=x/y)
// %=   (x=x%y)
// **=  (x=x**y)
age += grace
console.log(age)

if (age == 18) {
    console.log("You can drive");
}

else if (age == 0) {
    console.log("Are you kidding?")
}

else if (age == 1) {
    console.log("Are you again kidding?")
}

else {
    console.log("You cannot drive");
}


a = 6;
b = 8;
let c = a > b ? (a - b) : (b - a);