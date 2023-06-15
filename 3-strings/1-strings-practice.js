// Turn the following string into all lowercase letters
const noCaps = 'This Should Not Have Capital Letters!'
console.log(noCaps.toLowerCase())

// Turn the following string into all uppercase letters
const loud = "i'm very loud!";
console.log(loud.toUpperCase())

// Join the prior two variables together.
 
console.log(noCaps.concat(loud))

// Turn the following string into an array of names
const stringOfNames = 'Ally Becca Carlos Drake Edgar Felicity Greta Hector';

console.log(stringOfNames.split(' '))

// Make your own mad-libs using a template literal

let word1 = "ice cream"
let word2 = "cars"
let word3 = "friendship"

console.log(`Have fun by eating ${word1}, driving fast ${word2} and maintaining a good ${word3}.`)

// Given the name Tony Stark, get his initials
const ironMan = "Tony Stark"
let firstI = ironMan.slice(0,1)
let secondI = ironMan[5]
let initials = firstI + secondI
console.log(initials)

/*/ Given the string "Hey now, you're an all-star!" get the string, "all-star" and save it to a new variable
const string = "Hey now, you're an all-star!"
let newString = string.slice("all-star")
console.log(newString)
*/

/*/ Using the string "How are you?" extract the question mark.
const string1 = "How are you?" 
console.log(string1.split(?))
*/


/*/ Given the following variables, add them together to get 15 
const ten = '10';
const five = '5';
*/


// Given the following sentence, turn it into an array.

const sentence = 'Welcome to the jungle!'; 
console.log(sentence.split(" "))
