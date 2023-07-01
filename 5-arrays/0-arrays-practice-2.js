// Given the following list:
// Change the element at index zero to equal itself times 10 
let numArr = [1,2,3,4,5];

//let multipliedElement = numArr[0] *= 10
//console.log(multipliedElement)

numArr[0] *= 10

// Add an additional element to the prior array

numArr.push(20)
console.log(numArr)

// In one line, remove the last element from the prior array and set that element to a variable called 'removedItem'

numArr[numArr.length - 1] = "removedItem"
console.log(numArr)

// Check if the prior array contains the number 1
//   If it does, log true, if it doesn't, log false

numArr.includes(1) ? console.log(true) : console.log(false)

// Remove the first element from the prior array and set that element to a variable called 'removedFirstItem'

//numArr[numArr.shift()] = "removedFirstItem"
//console.log(numArr)
// I CAN DO IT THIS WAY: numArr[0] = "removedFirstItem", BUT HOW WOULD I USE SHIFT?
let removedFirstItem = numArr.shift()
console.log(numArr)

// Add that item back

numArr.unshift(removedFirstItem)
console.log(numArr)
//  DID NOT NEED TO REPLACE THE ITEM WITH THE QUOTES, JUST NEEDED TO GET THE ELEMENT REMOVED

// Given the following array, sort it using an array method
let sortThis = ["dairy", "banana", "cherry", "apple", "eel"];
console.log(sortThis.sort())
//   DEFAULT IS TO SORT IN ALPHABETICAL ORDER?

// Now reverse the prior array

console.log(sortThis.reverse())
//NEED ASSISTANCE WITH THIS ONE

  
// Write a string stating your favorite 3 foods. 
//  Ex: 'My favorite foods are za, pineapple, hawaiian-pizza'

let string = "My favorite foods are fruits, vegetables, junk food"

// Convert the prior string into an array of words (don't worry about where punctuation lands). 
//  Ex: ['My', 'favorite', 'foods', 'are', 'za,', 'pineapple,', 'hawaiian-pizza']

console.log(string.split(' '))
//what points to split the words into


// Convert the output from the prior example back into a string, but with dashes between the words. 
//  Ex: 'My-favorite-foods-are,-za,-pineapple,-hawaiian-pizza'


//console.log(string.join('-'))

//console.log(foodArrayAsString.replace(" ","-"))
//NEED ASSISTANCE WITH THIS ONE

// Given the following array: [1,2,3,4,5,7,8,9,10]
// insert the number 6 into its logical location

const sampleArray = [1,2,3,4,5,7,8,9,10]
sampleArray.splice(5, 0, 6)
console.log(sampleArray)
//arr.splice(index, 0, element to insert); will insert item into arr at the specified index (deleting 0 items first, that is, it's just an insert).
//0 is the number of elements to delete; here, none were removed

// Create two arrays and, using JavaScript join them together

const primaryColors = ["red", "blue", "yellow"]
const secondaryColors = ["green", "orange", "purple"]

//console.log(primaryColors + secondaryColors)
//primaryColors=primaryColors.concat(secondaryColors)
//console.log(primaryColors)

// Create a multi-dimensional array

const mdArray = [["do","re"], ["mi", "fa"], ["sol", "la"], ["ti", "do"]]
console.log(mdArray)
//HOW TO AMEND A GIT PUSH