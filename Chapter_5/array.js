// index = 0,1,2,3

// console.log(arr,typeof arr);
// console.log(arr.length);
// console.log(arr[0])

// console.log(arr, toString())
// console.log(arr.join("and"))

// let obj = {
//     a:1,
//     b:2,
//     c:3,
// }
// for (const key in arr){
//     if(object.hasOwnproperty.call(object, key)) {
//         const element = object[key];
//     }
// }
const numbers = [1,2,3,4]
numbers.splice(2,0,35,76)
console.log(numbers)

// Create an Array
// const num = ["Banana", "Orange", "Apple", "Mango"];

// // At position 2, add "Lemon" and "Kiwi":
// num.splice(2, 0, "Lemon", "Kiwi");
// console.log(num)
// let arr = [1, 13, 5 ,7,11];
// let newArr = []
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newArr.push(element**2)
// }

// let newArr = arr.map((e, index, array)=>{
//     return e**2
// })

// console.log(newArr)
// const greaterThanSeven = (e)=>{
//     if(e>7){
//         return true
//     }
//     return false
// }
// console.log(arr.filter(greaterThanSeven))

// let arr2 = [1,2,3,4,5,6]

// const red = (a, b)=>{
//     return a+b
// }

// console.log(arr2.reduce(red))