// 1.   Write a for loop that looks for the letter a
//      The loop should log the letter 'a' to the console
//      STOP immediately after finding the letter 'a'

const string = "I went to the zoo and saw two aardvarks."

for(i = 0; i < string.length; i++){
    let currentLetter = string[0]
    if(currentLetter === "a"){
        console.log("There's an a!")
    break;
    }
}


// 2.   Write a for loop that looks for a number
//      The loop should log 'at index _ there is the number _' to the console 
//      Stop immediately after finding that number
//      ex: Input: ['a','b','c', 100,'e']
//          Output: 'at index 3 there is the number 100'

// let foundNum = 34689869486948561

// for(i = 0; i < foundNum.length; i++){
//     let currentNumber = foundNum[0]
//     if(currentNumber === 9){
//         break;
//         let numIndex = indexof(9)
//         console.log(`at index ${numIndex} there is the number 9`)
//     }
// }





// 3.   Using the continue keyword loop over an array of numbers & strings
//      If the current element is a number skip it
//      Otherwise add the element to an array
//      After finishing the loop log the new array to the console

// const newArray = ["dog", 3, 26, "cow", "chicken", 17]
// let arrayofStrings = []

// for(i = 0; i < newArray.length; i++){
//     let currentElement = newArray[i]
//     if(currentElement <=0 && currentElement > 0){ //can use "typeof" but how to make true/false?
//         continue;
//     } else
//         console.log(arrayofStrings.push(currentElement))
//     }
//console.log(arrayofStrings)