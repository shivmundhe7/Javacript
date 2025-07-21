// // Question 1 = Use logical operator to find whether the age of A person lies between 10 and 20.
age = 1
if(age>=10 && age<=20){
    console.log("Age Is between 10 and 20")
}else{
    console.log("Age Is not Between 10 and 20")
}

// Question 2 = Write a Javascript program to find whether a number is Divisible by 2 and 3

let number = 11;
if(number % 2 === 0 && number % 3 === 0){
    console.log(number + " is divisible by both 2 and 3.")
}else{
    console.log(number + " is Not divisible by both 2 and 3. ")
}

// Question 3 = Write a JavaScript Program to find whether a number is Divislble By either 2 or 3

let num = 11;
if(num % 2 === 0 || num % 3 ===0){
    console.log(num + " Number is Divisble By Either 2 or 3")
}else{
    console.log(num + " Number is Not Divisible By Either 2 or 3")
}
