let a = prompt("Enter First Number")

let b = prompt("Enter Second Number")
if(isNaN(a) || isNaN(b)){
    throw SyntaxError("Sorry This is not allowed")
}
let sum = parseInt(a) + parseInt(b)


let x  =5
try {
    console.log("The sum is ", sum*x)
} catch (error) {
    console.log("Error aa gya bhai!!")
}finally{
    console.log("Files are close and DB Connection is being closed")
}