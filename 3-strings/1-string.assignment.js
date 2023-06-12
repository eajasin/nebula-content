
// 1. Concatenate "hello" with "goodbye"
 const string1 = "hello"
 const string2  = "goodbye"
 let concatenatedstring = string1 + string2
 console.log(concatenatedstring)

// 2. Save the substring "Friend" from the string "Hello Friend"
const greeting1 = "Hello Friend"
//console.log(greeting1.indexOf("F")) - output is 6
//console.log(greeting1.indexOf("d")) //- output is 11
console.log(greeting1.slice(6,12))
//I get the full word when I enter 12.  Shouldn't it be 11?

// 3. Using 5 or more of the following words, create a template literal that makes a legible sentence.
//    Do not create your own words, use the existing ones below!
const word1 = "hello"; 
const word2 = "horror";
const word3 = "peace";
const word4 = "world"
const word5 = "dislike"; 
const word6 = "umbrella"; 
const word7 = "car"; 
const word8 = "pasta"; 
const word9 = "pizza"; 
const word10 = "movies";
const word11 = "football"; 
const word12 = "soccer"; 
const word13 = "eat"; 
const word14 = "cookie"; 
const word15 = "favorite";
const word16 = "makeup"; 
const word17 = "I"; 
const word18 = "to"; 
const word19 = "my";
const word20 = "is";
const word21 = "and";
const word22 = "also";
const word23 = "like"; 

let legibleSentence = `The best way to ${word13} your ${word15} ${word9} is during a ${word11} game, like the Superbowl, with friends ${word21} family.`
console.log(legibleSentence)

// 4. Given the string of your full name get your initials.
 
let fullName = "Elizabeth Ajasin"
let firstInitial = fullName.slice(0)
let secondInitial = fullName.slice(9)
let myInitials = firstInitial + secondInitial
console.log(myInitials)
/*How do I extract a substring as an individual character (E and second occurence of A), 
not as a range?
*/

// 5. Get the 5th character from the following string: 'Hello World'

const greeting = 'Hello World'
console.log(greeting[5])
//output is blank

// 6. Find the index of the dash from 'Coding-Time!'

const coding = 'Coding-Time!'
console.log(coding.indexOf("-"));

// 7. Write code to grab the final letter from a any string.

const string = "string"
let finalLetter = string[string.length-1]
console.log(finalLetter)

// 8. Write code to grab the first 3 letters from a string. 

const string3 = "string"
console.log(string3.slice(0,3))

// 9. Turn the following string into an array of words: 'This-is-a-sentence';

const array = 'This-is-a-sentence'
let stringArray = array.split('')
console.log(stringArray)
/*How do I find the indices of all characters in a string? 
How do I remove the dashes?  Doing so should lead to an array of words rather
than an array of letters
*/

// 10. Make the string of 12 from the following two numbers:

let one = "1";
let two = "2";
let combinedString = one + two
console.log(combinedString.repeat(6))
