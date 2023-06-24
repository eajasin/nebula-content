// 1.   Write a for loop that looks for the letter a
//      The loop should log the letter 'a' to the console
//      STOP immediately after finding the letter 'a'

const string = "I went to the zoo and observed two aardvarks."

for(let i = 0; i < string.length; i++){
    let currentLetter = string[i]
    if(currentLetter === "a"){
        console.log(currentLetter)
        console.log("There it is finally!")
    break;
    } else {
        i++// did I need this?
        console.log(currentLetter)
    console.log("That's not it!")}
}


// 2.   Write a for loop that looks for a number
//      The loop should log 'at index _ there is the number _' to the console 
//      Stop immediately after finding that number
//      ex: Input: ['a','b','c', 100,'e']
//          Output: 'at index 3 there is the number 100'

let numArray = [34, 56, 95, 80, 23, 18, 75]
let numToBeFound = 95


for(let i = 0; i < numArray.length; i++){
  let currNum = numArray[i]
  let currIndex = numArray.indexOf(currNum)
    if(currNum === numToBeFound){
      console.log(`At index ${currIndex} there is the number ${numToBeFound}`)
      break;
  }
}






// 3.   Using the continue keyword loop over an array of numbers & strings
//      If the current element is a number skip it
//      Otherwise add the element to an array
//      After finishing the loop log the new array to the console

let mixedArray = [3, "dog", 26, "cow", "chicken", 17]
let newArray = []

for (let i = 0; i < mixedArray.length; i++){
  let currElement = mixedArray[i];
  if(typeof currElement == 'string'){
    newArray.push(currElement)
          }
  }
console.log(newArray)










