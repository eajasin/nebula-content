// Given the following list:
// Change the element at index zero to equal itself times 10 
let numArr = [1,2,3,4,5];

let multipliedElement = numArr[0] *= 10
console.log(multipliedElement)

// Add an additional element to the prior array

numArr.push(20)
console.log(numArr)

// In one line, remove the last element from the prior array and set that element to a variable called 'removedItem'

numArr[numArr.length - 1] = "removedItem"
console.log(numArr)

// Check if the prior array contains the number 1
//   If it does, log true, if it doesn't, log false

numArr.includes("1") ? console.log(true) : console.log(false)

// Remove the first element from the prior array and set that element to a variable called 'removedFirstItem'

//numArr[numArr.shift()] = "removedFirstItem"
//console.log(numArr)
// I CAN DO IT THIS WAY: numArr[0] = "removedFirstItem", BUT HOW WOULD I USE SHIFT?

// Add that item back

numArr.unshift(1)
console.log(numArr)


// Given the following array, sort it using an array method
let sortThis = ["dairy", "banana", "cherry", "apple", "eel"];
console.log(sortThis.sort())
//   DEFAULT IS TO SORT IN ALPHABETICAL ORDER?

// Now reverse the prior array

console.log(sortThis.length = 0)
//NEED ASSISTANCE WITH THIS ONE

  
// Write a string stating your favorite 3 foods. 
//  Ex: 'My favorite foods are za, pineapple, hawaiian-pizza'

let string = "fruits, vegetables, junk food"

// Convert the prior string into an array of words (don't worry about where punctuation lands). 
//  Ex: ['My', 'favorite', 'foods', 'are', 'za,', 'pineapple,', 'hawaiian-pizza']

let foodArray = ["fruits", "vegetables", "junk food"]

// Convert the output from the prior example back into a string, but with dashes between the words. 
//  Ex: 'My-favorite-foods-are,-za,-pineapple,-hawaiian-pizza'

let foodArrayAsString = foodArray.toString
console.log(foodArrayAsString.replace(" ","-"))
//NEED ASSISTANCE WITH THIS ONE

// Given the following array: [1,2,3,4,5,7,8,9,10]
// insert the number 6 into its logical location

const sampleArray = [1,2,3,4,5,7,8,9,10]
sampleArray.splice(5, 0, 6)
console.log(sampleArray)
//arr.splice(index, 0, item); will insert item into arr at the specified index (deleting 0 items first, that is, it's just an insert).


// Create two arrays and, using JavaScript join them together

const array1 = ["red", "blue", "yellow"]
const array2 = ["green", "orange", "purple"]

console.log(array1 + array2)

// Create a multi-dimensional array

const mdArray = [["do","re"], ["mi", "fa"], ["sol", "la"], ["ti", "do"]]
