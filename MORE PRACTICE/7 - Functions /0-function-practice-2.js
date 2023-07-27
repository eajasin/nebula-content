// 1. Write a function that multiplies 3 input numbers together.



// 2. Write a function that takes in a number and logs all odd numbers leading up to that number

// let oddNumber = [2, 4, 6, 7, 9]

// const oddNum = (numArray) => {
// for(i = 0; i < numArray.length; i++){
//     let currNum = numArray[i]
//     if(currNum % 2 === 1) {
//     return currNum
//     break;
//     }
// }
// }
// console.log(oddNum(oddNumber))

// 3. Write a function that takes in a list of names and returns a list of initials. The names will be formatted: 'Peter Parker'. 

 
//each bname [0][0] + eachName[1][0]

// 4. Write a function which takes in two numbers and a mathematical operator and performs Math on those two numbers utilizing that operator

let number1 = 5
let number2 = 4
let operator = "*"


const mathOp = (num1, num2, operation) => {

    let result; 


    switch(operation) {
    case "+":
        result = parseInt(num1) + parseInt(num2);
        break;
    case "-":
        result = parseInt(num1) - parseInt(num2);
        break;
    case "*":
        result = parseInt(num1) * parseInt(num2);
        break;
    case "/": 
        result = parseInt(num1) / parseInt(num2);
        break;
    
                     
}
    return result.toLocaleString()
}
console.log(mathOp(number1, number2, operator))
// const mathOp = (num1, num2, operation) => {

//     switch(operation) {
//     case "+":
//         return parseInt(num1) + parseInt(num2);
//         break;
//     case "-":
//         return parseInt(num1) - parseInt(num2);
//         break;
//     case "*":
//         return parseInt(num1) * parseInt(num2);
//         break;
//     case "/": 
//         return parseInt(num1) / parseInt(num2);
//         break;
    
    
// }
// }
// console.log(mathOp(number1, number2, operator))

// return(eval(`${num1}`${operation} ${num2})) //do not use this 

// 5. Write a function which takes in two arrays and returns those arrays combined together. 




