// Write a statement that checks if 3 is greater than 2

function greaterThan (num1, num2){
    if(num1 > num2){
        return true
    } return false
}
console.log(greaterThan(3, 2))
// Reverse the prior statement and check if 3 is less than 2

function lessThan (num1, num2){
    if(num1 < num2){
        return true
    } return false
}
console.log(lessThan(3, 2))

// Check if 4 is less than or equal to 4.4

function lessThanOrEqual (num1, num2){
    if(num1 <= num2){
        return true
    } return false
}
console.log(lessThanOrEqual(4, 4.4))

// Reverse the prior statement and check if 4 is greater than or equal to 4.4

function greaterThanOrEqual (num1, num2){
    if(num1 >= num2){
        return true
    } return false
}
console.log(greaterThanOrEqual(4, 4.4))

// Check if the string value of 19 is greater than the numeric value of 2

let stringValue = "19"

function stringGreaterThanOrEqual (str, num2){
    if(str >= num2){
        return true
    } return false
}
console.log(lessThanOrEqual(stringValue, 2))