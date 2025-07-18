let random = Math.random()

let a = prompt("Enter First Number")
let b = prompt("Enter Second Number")
let c = prompt("Enter Operation")

let obj = {
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**"
}



if (random > 0.1) {
    alert(`The Result is ${eval(`${a} ${c} ${b}`)}`);
} else {
    alert(`The Result is ${eval(`${a} ${c} ${b}`)}`);
    c = obj[c]
}