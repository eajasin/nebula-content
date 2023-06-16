// Given the following list:
// Change the element at index zero to equal itself times 10 
let numArr = [1,2,3,4,5];

let multipliedElement = numArr[0] *= 10
console.log(multipliedElement)

// Add an additional element to the prior array

numArr.push(6)
console.log(numArr)

// In one line, remove the last element from the prior array and set that element to a variable called 'removedItem'

numArr[numArr.length - 1] = "removedItem"
console.log(numArr)

// Check if the prior array contains the number 1
//   If it does, log true, if it doesn't, log false

numArr.includes("1") ? console.log(true) : console.log(false)

// Remove the first element from the prior array and set that element to a variable called 'removedFirstItem'

//numArr.shift(numArr[0]) = "removedFirstItem"
//console.log(numArr)

// Add that item back


// Given the following array, sort it using an array method
//let sortThis = ["dairy", "banana", "cherry", "apple", "eel"];
//let sorted = sortThis.sort(sortThis)
//console.log(sorted)

// Now reverse the prior array


  
// Write a string stating your favorite 3 foods. 
//  Ex: 'My favorite foods are za, pineapple, hawaiian-pizza'

let string = "fruits, vegetables, junk food"

// Convert the prior string into an array of words (don't worry about where punctuation lands). 
//  Ex: ['My', 'favorite', 'foods', 'are', 'za,', 'pineapple,', 'hawaiian-pizza']

let foodArray = ["fruits", "vegetables", "junk food"]

// Convert the output from the prior example back into a string, but with dashes between the words. 
//  Ex: 'My-favorite-foods-are,-za,-pineapple,-hawaiian-pizza'

//foodArray.split()
//console.log(foodArray)

// Given the following array: [1,2,3,4,5,7,8,9,10]
// insert the number 6 into its logical location

const sampleArray = [1,2,3,4,5,7,8,9,10]
sampleArray.splice(5, 0, 6)
console.log(sampleArray)
//HOW TO INSERT NEW ELEMENT INTO EXISTING
//arr.splice(index, 0, item); will insert item into arr at the specified index (deleting 0 items first, that is, it's just an insert).

// Create two arrays and, using JavaScript join them together

const array1 = ["red", "blue", "yellow"]
const array2 = ["green", "orange", "purple"]

console.log(array1 + array2)

// Create a multi-dimensional array

const mdArray = [[1,2,3], [4,5,6], [7,8,9]]


