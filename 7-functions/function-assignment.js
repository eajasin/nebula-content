// 1. Write a function that takes in an array of numbers and returns a new array containing the numbers with one added to each
// Example you pass in the following array [1, 2, 3] the function should return [2, 3, 4]

let firstArray = [10, 11, 12, 13, 14, 15]
let newArray = []

const arrayOfNums = (arr) => {
  let arrayofNewNums = []
  for (i = 0; i < arr.length; i++) {

    arrayofNewNums.push(arr[i] += 1)
  }
  return arrayofNewNums
}

console.log(arrayOfNums(firstArray))

//


// 2. Write a function that takes in a string, and a letter, and returns true or false if the string contains the letter.
// Example string = "happy birthday", letter = "a", should return true
// Example string = "happy birthday", letter = "q" should return false

let sampleString = "onomatopoeia"
let letterInString = ""

const findTheLetter = (string, letter) => {
  for (let i = 0; i < string.length; i++) {
    let currLetter = string[i];
    if (currLetter === letter) {
      return true
    }
  }
  return false
}

console.log(findTheLetter(sampleString, letterInString))




// 3. Write a function that takes in an array of full names (formatted "firstName lastName"), and returns a new array containing only first names.
// Example array = ["Tom Smith", "Bob Jones", "Bill Williams"] returns ["Tom", "Bob", "Bill"]

 let soloMotownArtists = ["Marvin Gaye", "Stevie Wonder", "Smokey Robinson", "Diana Ross"]
  let newArray1 = []

const arrayOfNames = (array) => {
let arrayOfFirstNames = []
for(let i = 0; i < array.length; i++){
    let currElement = array[i];
            let eachName = currElement.split(" ")
            arrayOfFirstNames.push(eachName[0]) 
  } 
  return arrayOfFirstNames
}

console.log(arrayOfNames(soloMotownArtists))

//  can do all this without a placeholder

// 4. Write a function that takes in a name and a greeting and logs a string greeting the person to the console.
// Example name = "John Boy" greeting = Goodnight, returns "Goodnight John Boy"

let sampleName = "Elizabeth"

const greeting = (name) => {
  return `Bonjour, Mademoiselle ${name}!`
}
console.log(greeting(sampleName))






// 5. Write a function that takes in the year someone was born and returns their age.
// Example: birth year: 2000 returns 23

let yearOfBirth = 2000

const age = (birthYear) => {
  const currDate = new Date() // gives current date
  let currYear = currDate.getFullYear() // give current year
  return currYear - birthYear  // gives difference between current year and birth year
}

console.log(age(yearOfBirth))

