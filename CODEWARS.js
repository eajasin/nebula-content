// alphabetPosition = (text) => {
//   let textAsArray = text.split(" ")
//   let alphabet = ["a", "b", "c"]
//   for(i = 0; i < alphabet.length; i++){
//     if alphabet[i] === 

//   return text.indexOf[alphabet[i]]
// }
// }
// let strin = "We wish you a Merry Christmas."
// const disemvowel = (str) => {
//   let vowels = "aeiou"
//   let newStr = ""

//   for(let i = 0; i < str.length; i++){
//       if(!vowels.includes(str[i].toLowerCase())){

//   } 
//   }  return newStr += str[i]  
// }

// console.log(disemvowel(strin))

// const disemvowel = (str) => {
//   return str.replace(/[aeiouAEIOU]/g, '');

// } candu

// console.log(disemvowel(strin))
// function median (array){
//   let indexOfMidNum = array.length / 2
//   if (array.length % 2 === 0){
//       return (array[indexOfMidNum] + array[indexOfMidNum - 1]) / 2
//   } else {
//       return (array[indexOfMidNum])
//   }
// }
//   console.log(median(footballTeamScores))

// let word = "candyi"
// const getMiddle = (s) => {
//   let index = s.length / 2
//        if (s.length % 2 === 0 ){
//           return s.charAt(index - 1) + s.charAt(index) 

//       } else {
//   } return s.charAt(index)


// }

// console.log(getMiddle(word))

// let array = [-1, 2, 4, -9]

// const positiveSum = (arr) => {
//   let sum = 0 //arr => sum of nums
//   for(let i = 0; i < arr.length; i++){//loop through all nums in arr
//     if(arr[i] > 0) {
//       sum += arr[i] //consider and add only pos nums
//   } 
//   } return sum 
// }
// console.log(positiveSum(array))

// let string = "fjskhu"

// const accum = (s) => { //input s; convert to arr; output s  
//   let lowerString = s.toLowerCase() //make all letters lower-case  
//   let empArray = []	// push letters into empty array 
//     for(let i = 0; i < lowerString.length; i++){//iterate through each letter in lowercase
//     let repPart = lowerString[i].repeat(i+1) // repeat lowercase string by its index plus 1
//     let capString = repPart[0].toUpperCase() + repPart.slice(1)//capitalize 1st letter and adding on repeated part wit the cap letter sliced offf
//          empArray.push(capString)// add string with upper case and repeated part into empty array
//     } 
//     return empArray.join('-')//insert '-' between each capstring
//   }

// console.log(accum(string))

// const accum = (s) => {
//   let lowerString = s.toLowerCase()
//   for(i = 0; i < lowerString.length; i++){
//     let currLett = lowerString[i]
//     for(j = 0; j < ; j++){

//     }
//   }

// }



//Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

// let number = 3

// const countSheep = (num) => {
//   let sleepString = ""
//     for(let i = 1; i <= num; i++){ //iterate through all numbers up to num, starting at 1
//       sleepString += `${i} sheep...` //input all numbers into string, adding by 1 digit increments
//     }
//         return sleepString// add "..." alongside each number
//   } 

// //need to increase 
// console.log(countSheep(number))

//Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.
/*
1) input array, output array
2) rermove second element
3) push the second-element-less element into a new array
*/

// let array = ["school", "shoes", "car", "candy", "cup", "church"]

// const removeEveryOther = (arr) => {
//   let newArr = []
//   for(let i = 0; i < arr.length; i+=2){
//       newArr.push(arr[i])
//     } return newArr
//   } 

// console.log(removeEveryOther(array))

/*array => number

return using min.max methods
*/

// let array = [2, 6, 90, 59, -3]

// const min = (list) => {

//     return Math.min(...list)
// }

// const max = (list) => {

//     return Math.max(...list)
// }

// console.log(max(array))

/*  -INPUT POSITION AND NUMBER
    - multiply rroll by two
    -add this figure position
    
*/

// const move = (position, roll) => {
//   return (roll * 2) + position
// }
// console.log(move(2,5))

// string=> string
//do reverse loop (i--, i > 0, start a)
//return string backwards
//
//let string = "bootcamp"

// const solution = (str) => {
//   let newStr = ""
//   for(let i = str.length-1; i >= 0; i--){
//       newStr += str[i]
//   } 
//     return newStr
// } 

// console.log(solution(string))

// let str = "gdgjd dgjkdjg djgkdj"

// const noSpace = (x) => { //string => string
//   let newStr = ""  //placeholder string
//   for(i = 0; i < x.length; i++){ //loop through string 
//     if(x[i] !== " "){ //identifies the spaces
//      newStr += x[i]} //add non-spaces to new string
//   }
//   return newStr
// }  

// console.log(noSpace(str))
// let string = "bootcamp"

// const removeChar = (str) => { //string => string
//   let noFirstAndLast = str.slice(1, -1)//need to identify indices of first str[1] and last char str[-1] in string and extract their range
//      return noFirstAndLast 
//     }                                

// console.log(removeChar(string))   

// console.log(removeChar(string))
//   //return string with first and last index removed

// let array = ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]

// const findNeedle = (haystack) => {  //array => string
//                                     //iterate through array to find index of element "needle"
//    for(let i = 0; i < haystack.length; i++){
//     if(haystack[i] === "needle"){
//       return "found the needle at position" +" "+ i
//     }
//    }
//   //output string containing index of needle
// }

//YOU ONLY NEED ONE - BEGINNER

//array and value => true/false

// let array = [1, 2, 3]
// let value = 5
// const check = (a, x) => {
//   if(a.includes(x)){return true}
//   return false
// } 

//  console.log(check(array, value))


//Square(n) Sum

// let array = [2, 1, 3]

//   const squareSum = (numbers) => {  //array of integers => integer
//     let sumOfNumbers = 0  //create placeholder for final return
//     for(let i = 0; i < numbers.length; i++){ //iterate through array
//        sumOfNumbers += Math.pow(numbers[i], 2)                //square each number and add the squares
//     }  
//    return sumOfNumbers                       
// } 

// console.log(squareSum(array))                                      

//Anagram Detection
//test (anagram or not) and oringal work (strings) => "true"/"false" if anagram i/is not anagram of each other (boolean)
//convert to array using "split"
//lowercase all letters and alphabatize (sort - an array method)
//convert arrays back into strings using "join" and compare them to each other (joined back to string because not checking the actual values of array)not primitive vAlue so checking references in memory); 
//compare strings because it is primitive, non-primitives have differnet memory references
//return true/false

// let anagram = "foefet"
// let word = "toffee"


// const isAnagram = (test, original) => {
//   let lTest = test.toLowerCase().split("").sort().join("")
//   let lOrig = original.toLowerCase().split("").sort().join("")
//   // let testArray = lTest.split("")
//   // let origArray = lOrig.split("")
//   // let sortedTest = testArray.sort()
//   // let sortedOrig = origArray.sort()


// // console.log(sortedTest)
// // console.log(sortedOrig)
//   // if(sortedTest.join("") === sortedOrig.join("")) {
//   //   if(lTest === lOrig){
//   // return true
//   // } return false
//   return lTest === lOrig
// }

// console.log(isAnagram(anagram, word))

// Isogram
// string ==> boolean
// test str to see if has any repeating chracters in it; if it does, true, if not false
// lowercase all letters
// iterate through str twice and compare the two for same characters
// return false if letters do not equal

// let string = "owll"

// const isIsogram = (str) => {
//   let lStr = str.toLowerCase()
//   for(let i = 0; i < lStr.length; i++){
//     for(let j = 0; j < lStr.length; j++){
//     if(i !== j){ //check if equal only when they are not on the same index; could also do j=i+1 to circumcent comparing the same characters
//       if(lStr[i] == lStr[j]){
//       return false
//   } 
// } 
// }
//   }
// return true
// }
// console.log(isIsogram(string))

//for(let char of str) - when indices not relevant



// //Friend or Foe (7) - if name has 4 characters they are a friend; input = list of names and output = list of name with 4 characters
// let list = ["alvin", "simon", "theo"]

// const friend = (friends) => {
//   let fArray = [] //placeholder array for list of friends with 4 chars

//     for(let i = 0; i < friends.length; i++){             //for loop will iterate through each name
//        if(friends[i].length === 4){               //compare length (# of indices) of each each name to 4
//        fArray.push(friends[i])                    //adds only 4 letter names into new list (array)
//        } 
//    }
//    return fArray      //return final array
// }  
// console.log(friend(list))


//Categorize New Member (7) - input is an array of integer pairs (one for age and one for the person's handicap); output = array of string values of "Open" or "Senior"
//seniors are 55+ and have a handicap greater than 7 (standing range of -2 to 26)
//create placeholder array for return
//two for loop to iterate through array, and place condition that if index[0] is 55+ and index[1] > 7, return senior

// let list = [[55, 6], [100, 7], [45, 8]] //should return [Open, Senior, Open]

// const openOrSenior = (data) => {



// }

//Is this a triangle

//input 3 integer values, and determine if third side can be built with the sides of a given length
//output is a boolean
//sum of two sides has to be larger than the third one
// if statement and use logic operator 

// let side1 = 2;
// let side2 = 3;
// let side3 = 4

// const isTriangle = (a,b,c) => {

// if(a + b > c && a + c > b && b + c > a) {
//   return true
// } 
//   return false
// }


// console.log(isTriangle(side1, side2, side3))



//find the stray number
//input us an arrary of numbers with an odd length
//output is number that is not equal to the otther numbers
//create placeholder for the odd integer out

// let array = [17, 17, 3, 17, 17, 17, 17]


// const stray = (numbers) => {


// let sortedArray = numbers.sort((a,b) => a-b)

// if(sortedArray[0] ===sortedArray[1]){
//   return sortedArray[sortedArray.length-1]
// } else {
//   return sortedArray[0]
// }
// }
// //console.log(sortedArray)
// // let firstNum = sortedArray[0]
// // let secondNum = sortedArray[1]
// // let thirdNum = sortedArray[2]



// console.log(stray(array))

//Credit Card Mask (7)
//input = string of words/numbers, output = string of words/numbers with all but last 4 digits redacted with '#'
//  let example = "Elizabeth"

//  const maskify = (cc) => {


//     if(cc.length <= 4){ //return string as is because only 4 digits
//         return cc


//     } else {  //if greater, splice the last 4 characters and concatenate them to string replaced with #
//               //first piece of string should splice off the last 4

//     let normalLastFour = cc.slice(-4)
//     let ccWithRedaction = cc.slice(0, -4).replace(/./g ,'#') //matches any character in string except for new line// check out regex (regular expressions); regex101 and 

//          return ccWithRedaction  += normalLastFour 
//     }

//     }
//   // if (cc.length > 4){  //for all strings that are greater than 4 characters


// console.log(maskify(example))


//Find the off int (6)
//input is array of integers, output is integer that appears an odd number of times
//find out how many occurrences each number in array has
//find the number that occurres an odd amount of times

// let array = [1,2,2,3,3,3,4,3,3,3,2,2,1] 

//  const findOdd = (A) => {
//     const frequency = {}; //object placeholder; frequency will be an object 
//       for(let i = 0; i < A.length; i++){
//         let result = 0   //placeholder
//         let currNum = A[i];
//         frequency[currNum] = (frequency[currNum] || 0) + 1 /*increments count of current number; freq[num] accesses the frequency property by the num (number in array:frequency number); 0 part checks logic
//         (does number occur and if doesnt, skips; if yes, add 1 to frequency of number however many times it occurs)
//         */
//         //return frequency

//         // if(frequency[currNum] % 2 == 1){
//         //  return result
//       }
//       for(let key in frequency){  //iterates through object (key is the numbers in array, value is the frequency)
//         if(frequency[key]%2 == 1){
//           //console.log(typeof(key))
//           return parseInt(key) //this converts back to an integer because every key of an object is a string
//         }
//       }
//     //console.log(frequency[currNum])

//   }





//   console.log(findOdd(array))



// //REMOVE FIRST AND LAST CHARACTER (8)
// let string = "happy"

// const removeChar = (str) => {
//   let newstr = str.substring(1, str.length-1)

//   return newstr
// }

// // console.log(removeChar(string))

// // Make a function that does arithmetic (7)
// // -input is two numbers and a an operator; output is a number
// // create a switch statement to evaluate the expressesion (operator)
// // case is the operator, and the function will return the value of a and b when the expressions is applied



// const arithmetic = (a, b, operator) => {

//   switch (operator){
//   case "+":
//      return a + b; 
//      break;

//   case "-":
//      return a - b; 

//   case "*":
//      return a * b;

//   case "/":
//      return a / b;

// }
// }

// console.log(arithmetic(20, 2, "+"))



// Your order, please (6) NOT SOLVED
//input string, output string (in order of the numbers in the string)
//convert string to array and determine if a number is in it
//create empty array into which newly arranged arr will go; at end will join back together
//loop through the elements and determine if there is an integer in it (regex)
//if there is a number, have function that can then sort the numbered strings in order of number in them


// let weirdStr = "is2 Thi1s T4est 3a" 

// const order = (word) => {

// let result = []


//if there is a number in each element (expression) of arr

//     let arr = word.split(' ')
//     let wordindices = {}

//     for(let i = 0; i < arr.length; i++){
//       arr.match


//      console.log(arr[i].match(/\d/))




//       result.push[arr[i]]


//     } 


//   return result.join(' ')
// }
// order(weirdStr)


// Exes and Ohs (7)
//input is string, output is boolean

// const XO = (str) => {

//     let x = str.match(/x/gi) //find the number of occurrences for each letter, taking case into account

//     let o = str.match(/o/gi)

//     return (x && x.length) === (o && o.length) //determine if there is any occurrence and if the number of occurrences equals each other

//     }

//Unique In Order (6)
//input is string/array; output is string/array in original order of elements

// let stringarr = "fjksjfkjsfjsjkf"
// const uniqueInOrder = (iterable) = {
// // let newArray = iterable.split('')//split into array

// // let numberOcc = iterable.match(/[0-9]/gi)
// // let letterOcc = iterable.match(/[a-z]/gi)
// let newiterable = iterable.replace(/[0-9]/gi, "").replace(/[a-z]/gi, "")
// console.log(newiterable)

//    //identify and remove characters that occur more than once

// }
// console.log(uniqueInOrder(stringarr))

// let string = "ABDBDBDBBDDDB"


// const uniqueInOrder = (iterable) => {



// let empArr = []
//  for(let i = 0; i < iterable.length; i++){

//   if(iterable[i] !== iterable[i+1]){
//     empArr.push(iterable[i])
//   }
//  }
// return empArr
// }
// console.log(uniqueInOrder(string))


// Delete occurrences of an element if it occures niore than n times (6)

// loop through list and count how many times each number appears
// push count to an object to see number of occurrences
// if count is equal to "n", delete any extras using pop

// let array = [1,2,3,1,2,1,2,3];
// let freq = 2

// const deleteNth = (arr,n) => {
//  let freqOfOccur = {} //object placeholder; frequ will be an object
//  let newArr = []  //placeholder to store new array 

//   for(let i = 0; i < arr.length; i++){ //iterate through each element in array
//       let currNum = arr[i]  //create variable for each number in array
//       freqOfOccur[currNum] = (freqOfOccur[currNum] || 0) + 1 //increments count of curr number however many times it occurs
//   if(freqOfOccur[currNum] <= n){ //number should only appear as many times as n
//     newArr.push(currNum) //push new array into placeholder
//     }
//   }
//     return newArr
// }

// console.log(deleteNth(array, freq))





//Find the off int (6)
//input is array of integers, output is integer that appears an odd number of times
//find out how many occurrences each number in array has
//find the number that occurres an odd amount of times

// let array = [1,2,2,3,3,3,4,3,3,3,2,2,1] 

//  const findOdd = (A) => {
//     const frequency = {}; //object placeholder; frequency will be an object 
//       for(let i = 0; i < A.length; i++){
//         let result = 0   //placeholder
//         let currNum = A[i];
//         frequency[currNum] = (frequency[currNum] || 0) + 1 /*increments count of current number; freq[num] accesses the frequency property by the num (number in array:frequency number); 0 part checks logic
//         (does number occur and if doesnt, skips; if yes, add 1 to frequency of number however many times it occurs)
//         */
//         //return frequency

//         // if(frequency[currNum] % 2 == 1){
//         //  return result
//       }
//       for(let key in frequency){  //iterates through object (key is the numbers in array, value is the frequency)
//         if(frequency[key]%2 == 1){
//           //console.log(typeof(key))
//           return parseInt(key) //this converts back to an integer because every key of an object is a string
//         }
//       }
//     //console.log(frequency[currNum])

//   }


//Stop gninnipS My sdroW! (6)
//input: string, output: string with some words reversed; 

// let string = "Hey fellow warriors"

// const spinWords = (string) => {
//  let arr = string.split(" ") //convert string into an array
//  let newArr = [] //placeholder array to store the new array with reversed words


//  for(let i = 0; i < arr.length; i++){ //loop over each word in array to identify those that have 5 or more letters with if statement
//     if(arr[i].length >= 5){
//       arr[i] = arr[i].split("").reverse().join(""); //if true (have 5 or more letters, convert words to strings of letters, reverse them, then rejoin them )
//     }
//   newArr.push(arr[i]) //push normal words and modified (reversed) words into placeholder array

//  }

//  return newArr.join(" ") //return the new array as a string using join

// }

// console.log(spinWords(string))



// Persistent Bugger (6)
// input: positive number, output: returns number of times to multiply its digits until reach a single digit

// let number = 999

// function persistence(num) {
//   let numOfPers = 0

//     while (num >= 10) { //need a conditional loop to keep running until number of digits is 1
//     let numAsStr = num.toString()//need to convert number to string to determine the number of digits it has
// //                //need to iterate over each digit in stringed num and multiply them
//        let product = 1  
//         for(let i = 0; i < numAsStr.length; i++){
//           product *= parseInt(numAsStr[i]) 
//         }
//       num = product
//       numOfPers++ //add 1 count for each iteration

//    }
//    return numOfPers
//  }



// console.log(persistence(number))


//Duplicate Encoder (6)
//goal:replace each character with ( if letter appears once and ) if it appears more than once
//input string, output string of parentheses
//convert all to lower case
//convert to array for better handling
//count number of times each character appears using object/loop
//Loop through again using an if statement:
//if appears more than once, replace with ( 
//if appears once, replace with )
//revert array back to string
//return the new string

// let string = "recede"

// const duplicateEncode = (word) => {
//     let charCount = {};
//     let wordAsArray = word.toLowerCase().split("");
//     let pArray = [];

//     for (let i = 0; i < wordAsArray.length; i++) {
//         charCount[wordAsArray[i]] = (charCount[wordAsArray[i]] || 0) + 1;
//     }

//     for (let i = 0; i < wordAsArray.length; i++) {
//         if (charCount[wordAsArray[i]] === 1) {
//             pArray.push("(");
//         } else {
//             pArray.push(")");
//         }
//     }
//     return pArray.join('');
// }

//console.log(duplicateEncode(string))
//can do the same with a string (str += to add parentheses to the string)




// Build Tower (6)
// goal: build pyramid-shaped tower as an array/string with n nFloors
// input is the number of floors, output is the pyramid of asterisks
//need placeholder for the pyramid array
//need to iterate through the number of floors, adding 2 asterisks per floor, starting at one and <= the floor
// each level of pyramid after 1 adds 2 astericks, repeat them accordingly
//display the pyramid with each set of asterisks on different lines

// let nFloor = 5

// const towerBuilder = (numOfFloors) => {

// let pyr = []

// for (let i = 1; i <= numOfFloors; i++ ){
//  let asterisks = '*'.repeat(2 * i - 1)
//  let wSpaces = ' '.repeat(numOfFloors-i)
// pyr.push(wSpaces + asterisks + wSpaces)
// }
// return pyr

// }
// console.log(towerBuilder(nFloor))


// Replace every nth (7)

// input is string, number of occurence to change char, the targeted char, and the replacement char; output is new string
//create variable using regex that identifies occurrence of char
//use the replace method to replace new char with the old

//iterate through each letter in text and get char at current index


//creat placeholder for empty string (output)
//have count that will track the number of occurrences of oldvalue
//with if statement, see how many times the char equals to the old value and count number of times
//then create another if statemetn to see if this coun has reached the value of n; if so, add newValue to the empty string
//need to then go on to the next character(?) and begin count again and run through each of the if statements

//NOT DONE
// let string = "Vader said: No, I am your father!"
// let occ = 1
// let oldV = "*"
// let newV = "y"

// const replaceEveryNthChar = (text, n, oldValue, newValue) => {
//   let result = '';
//   let count = 0;

//     for (let i = 0; i < text.length; i++) {
//     let char = text.charAt(i);
//     if (char === oldValue) {
//       count++;
//       if (count === n) {
//         result += newValue;
//         count = 0


//       }
//     }
//     result += char;
//   }

//   return result;
// }

// console.log(replaceEveryNthChar(string, occ, oldV, newV))


//Number of People on the Bus (7)
//input array of people that get on the bus and the number of people who get off (contains subarray), output is an array, number of people left on the bus
//create placeholder to count number of stops
//create loop to iterate through each bus stop


// const number = (busStops) => {
//     let numOfP = 0;
//   for (let i = 0; i < busStops.length; i++) {
//     numOfP += busStops[i][0]; //for each stop, adds the number of people getting onto the bus
//     numOfP -= busStops[i][1]; //for each stop, subtracts the number of people getting off
//   }
//   return numOfP; //return number of people on bus at last stop

// }
//Find the Capitals (7)

//input is string, output is array of the indices of all capital letter in string 
//create placeholder array for final array
//create for loop to iterate through string
//create if statement tht identifies the capital letters and their indices
//push the indices into the placeholder

// let string = "HapPy"

// const capitals = (word) => {
// let indOfCapital = []

// for (let i = 0; i < word.length; i++){
//   if (word[i].toUpperCase() === word[i]){
//     indOfCapital.push(i)
//   }
// }
// return indOfCapital
// };

// console.log(capitals(string))



//Highest Scoring Word (6)
//input is a string of words, output is the highest scoring word in the string
//create placeholder string to store final string
//create placeholder for score of each word
//create alphabet string 
// split the words so they are an array, split by space 
//create function that calculates the score of each word by iterating through word, and addes the indices number to the score
//create another function that iterates through each word again
//thius time use if statemnt that sets the highestscore to the score of the word and the highestword to word argument
//finally return the highestWord


// let string = "add char index to word score" 

// const high = (x) => {
//   let highestWord = ""
//   let highestScore = 0
//   let alphabet = "abcdefghijklmnopqrstuvwxyz"
//   let xAsArray = x.split(" ")


// const calcScore = (word) => {
//   let score = 0

//   for(let i = 0; i < word.length; i++){
//     let indOfChar = alphabet.indexOf(word[i]) + 1
//     score += indOfChar
//   }
//  return score
// }

//   for (const word of xAsArray){
//     const score = calcScore(word)

//     if(score > highestScore){
//       highestScore = score
//       highestWord = word

//     }


//   }
//   return highestWord
// }




// Categorize New Member (7)
//input is an array of integer pairs (one for age and one for the person's handicap); output = array of string values of "Open" or "Senior"
// seniors are 55+ and have a handicap greater than 7 (standing range of -2 to 26)
// create placeholder array for return
// iterate over each pair with a for loop, extracting the age and handicap (since a subarray; if both 55+ and 8+, push into array as senior
// otherwise, psuh into array as "open"
// let list = [[55, 6], [100, 8], [45, 8]] //should return [Open, Senior, Open]

// const openOrSenior = (data) => {
//   let newArray = []
//   for(const [age, handicap] of data){
//     if(age>=55 && handicap > 7){
//       newArray.push("Senior")
//     } else {
//       newArray.push("Open")
//     }
//   }
//   return newArray
// }

// console.log(openOrSenior(list))


//Split Strings (6)
//input: string; output: array of string split into 2 (if even) or with _ appended to last letter (if odd)
//create placeholder array
//use for loop to iterate over every two chars and push the extracted substring into array
//create if statement for string of odd lengths
//in placeholder array, access the last char and append an underscore to it

// let string = "abcde"

// const solution = (str) => {
//   let splitArr = []

//       for(let i = 0; i < str.length; i+= 2){
//         splitArr.push(str.substr(i, 2))
//       }
//     if(str.length % 2 > 0){
//       splitArr[splitArr.length-1] += '_'
//     }
//      return splitArr
// }



// console.log(solution(string))


//Thinkful - Logic Drills: Traffic light (8)

// let light = 'red'

// const updateLight = (current) => {

//     switch(current){
//       case 'green':
//         return 'yellow'
//       case 'yellow':
//         return 'red'
//       case 'red':
//         return 'green'
//     }
// }

// console.log(updateLight(light))

//Basic Mathematical Operations (8)

// function basicOp(operation, value1, value2) {

// switch(operation){
//   case '+':
//     return value1 + value2;

//   case '-':
//     return value1 - value2;

//   case "*":
//     return value1 * value2;

//   case "/":
//     return value1 / value2;
// }

// }

// console.log(basicOp('+', 2, 3))


//Three added characters (6)

// string1 = "hello"
// string2 = "aheallao"

// function addedChar(s1, s2){
//   let freqOfCharS1 = {}
//   let freqOfCharS2 = {}

//     for(const char of s1){
//       freqOfCharS1[char] = (freqOfCharS1[char] || 0) + 1
//     }
//     console.log(freqOfCharS1)
//     for(const char of s2){
//       freqOfCharS2[char] = (freqOfCharS2[char] || 0) + 1
//     }
//     console.log(freqOfCharS2)
//     for(const char in freqOfCharS2){
//       if(freqOfCharS2[char] === 3 && !(char in freqOfCharS1)){
//         return char
//       }
//     }
//     return null
//   }


// console.log(addedChar(string1, string2))

//Testing 1-2-3 (7)
//input is array, output is array
//use map method because 1) returns an array and 2) as iterates through array, applies a method to each element 
// create two parameters, one representing each element and the other its index
//with each iteration, starting at 0, add one to index of the curr element using a template literal (instead of concatenation)


// const number = (array) => {

//   return array.map((currentElement, index) => `${index + 1}: ${currentElement}`);


//Consecutive strings (6)
//find the longest grouping of consecutive strings
//input array of string and amount of elements to concatenate by, output is concatenation of strings that produce the longest length
//need a way to count length of array
//iterate over concatenation of each respesctive index
//make sure array has elements in it, that k is greatrer than the length, adn that k is not a negative number
//use slice to extract the strings that needs to be extracted from the strings/array


// let strarr1 = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"]
// let k1 = 2

// function longestConsec(strarr, k) {
//     let longestEl = "";
//     let highestLength = 0;

//     for(let i = 0; i < strarr.length + k; i++){
//       let currEl = strarr[i]
//       if(currEl.length > highestLength){
//       highestLength = currEl.length
//       longestEl = currEl
//       }
//       longestEl += currEl
//     }
//   return longestEl
// }

// console.log(longestConsec(strarr1, k1))

// NOT DONE



//   }
// //   return highestWord
// function longestConsec(strarr, k) {
//   const n = strarr.length;
//   if (k <= 0 || k > n || n === 0) {
//     return '';
//   }

//   let longestStr = '';
//   let max_length = 0;

//   for (let i = 0; i <= n - k; i++) {
//     let currentStr = strarr.slice(i, i + k).join('');
//     if (currentStr.length > max_length) {
//       max_length = currentStr.length;
//       longestStr = currentStr;
//     }
//   }

//   return longestStr;
// }

//Break Camel Case (6)

//input is a string, output is a string (if have camel case, return with space before capitalized letter)
//create placeholder string for final result
//use for loop to iterate through the string 
//use if statement for if any of the letters are uppercase, add it to the palceholder with a space just before it
//if not, add string as is to the placeholder

// let str = "camelCasing"

// function solution(string) {
//   let brokenCamStr = ''

//   for(let letter of string){
//     if(letter === letter.toUpperCase()){
//       brokenCamStr += ` ${letter}`
//     } else {
//       brokenCamStr += letter
//     }
//     }

//     return brokenCamStr
// }

// console.log(solution(str))

//Find the missing letter(6)
//input is array, output is a missing element from array (string)
//need to be able to 1) identify code for each letter (lower and uppercase) and identify when a number is skipped
//need to iterate through array
//check the difference in character codes for each consecutive char using reduce
//need to be able to convert the code back to a letter (string)

// let arr = ['a','b','c','d','f'] 

// // function findMissingLetter(array) {
// //   const missingLetter = array.reduce((firstLetter, currLetter) => {
// //     console.log(firstLetter)
// //     if ((currLetter.charCodeAt(0) - firstLetter.charCodeAt(0)) > 1){ //shows there is a missing letter as codes increment by 1
// //         return firstLetter + 1
// //     } 
// //       return currLetter.charCodeAt(0)

// //   })
// //     return String(missingLetter);
// // }

// // console.log(findMissingLetter(arr))

// // //NOT DONE

// //Equal Sides of An Array (6)
// //input arr; output is index where sum of numbers on each side are equal
// //need to iterate multiple times through the array:
//   //1) through full length
//   //2) through left side (when new loop is less than current index)
//   //3) through right side (when new loop is greater than current index), starting at the index to rightr of index
// //have placholder for both left side and right side of index 
// //for each iteration, add current index to each sum
// //compare the two sums to see if they're equal
// //if equal, return i
// //return -1 if balance never occurs

// let array = [1,2,3,4,3,2,1]

// const findEvenIndex = (arr) => {


//   for(let i = 0; i < arr.length; i++){
//     let sumOfLeft = 0
//     let sumOfRight = 0


//     for(let j = 0; j < i; j++){
//       sumOfLeft += arr[j]
//     }
//       for(let k = i + 1; k < arr.length; k++){
//         sumOfRight += arr[k]
//       }

//         if(sumOfLeft === sumOfRight){
//           return i
//         }
//   }

//   return -1

// }

//console.log(findEvenIndex(array


//Move Zeros to the End (5)
//input is array, output is array with zeros extracted and pushed to end
//placeholder for new array
//filter for all the zeros and all non zeros
//push all zeros into the nonZero object
//return new nonZero

// let array = [false,1,0,1,2,0,1,3,"a"]

// const moveZeros = (arr) => {

//   let zeros = arr.filter(e => e === 0)
//   console.log((zeros))
//   let nonZeros = arr.filter(e => e !== 0)
//   console.log(nonZeros)

// nonZeros.push(...zeros)
// return nonZeros



// }

// console.log(moveZeros(array))


//The Supermarket Queue (6)
//input is array (element: customers, value: time required to check out) and number of self-checkout tills (registers);
//return time required to check out all customers
//need a way to run all tills at on time; naturally, the more tills the faster "line" will go
//multithread: each worker (till) needs to handle a portion of the customers
//create a till as the main thread

// let lineTime = ([5,3,4], 2)

// function queueTime(customers, n) {

//   if(n >= customers.length){
//     return Math.max(...customers)
//   }

//   const chunkSize = Math.ceil(customers.length / n) //approximate # of customers to be processed by each till
//   const workers = []
//   let totalTime = 0

//   for(let i = 0; i < n; i++){ //iterates n times to create n tills, determine range of customers worker will process
//     const startIndex = i * chunkSize
//     const endIndex = Math.min((i +1) * chunkSize - 1, customers.length - 1) //

//     const worker = new Worker('CODEWARS copy.js'); //create workers inside the loop
//     worker.onmessage = function(e) { //onmessage event is attached to the worker to listen for messages sent back to worker
//       totalTime += e.data

//       if(workers.length === n){
//         console.log(totalTime)
//       }
//     }
//     worker.postMessage({  //provides workers with necessary data to perfrom calculation
//       customers: customers,
//       startIndex: startIndex,
//       endIndex: endIndex
//     })
//     workers.push(worker)
//   }


// }

// console.log(queueTime(lineTime))

// NOT DONE - how to do without using workers
//DEVON SOLUTION

// function queueTime(customers, n) {
//   console.log('===========')
//   console.log(customers,'customers')
//   // If there is only one till, return the sum of all the customers' checkout times
//     if (n === 1) {
//         return customers.reduce((a, b) => a + b, 0);
//     }

//     // If the number of tills is greater than or equal to the number of customers,
//     // return the maximum checkout time since every customer has their own till
//     if (n >= customers.length) {
//         return Math.max(...customers);
//     }

//     // If there are multiple tills and more customers than tills:
//     // Initialize the tills with the checkout times of the first `n` customers
//     let tills = customers.slice(0, n);

//     // For each remaining customer
//     for (let i = n; i < customers.length; i++) {
//       console.log(tills)
//         // Find the till with the minimum checkout time (i.e., the next till that will become free)
//         let minIndex = tills.indexOf(Math.min(...tills)); // getting the index of the lowest number in the array
//         // Assign the next customer to this till
//         tills[minIndex] += customers[i];
//     }

//     // Return the maximum checkout time among all the tills
//     return Math.max(...tills);
// }

//Mexican Wave (6)
//input: string; output: array
//create placeholder for output
//iterate through each character in str
//create another variable within loop that:
//1) using slice, extracts all letters from 0 index to i so they stay uncapitalized
//2) capitalizes i
//3) also using slice, extracts all letters after i (i+1) to end so they stay uncapitalized
//4) concatenates them altogether

// let string = "hello"

// function wave(str){


//   let wavedArr = []

//   for (let i = 0; i < str.length; i++) {
//     let createWave = str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1);

//     wavedArr.push(createWave);
// }

// return wavedArr

// }

// console.log(wave(string))

// //NOT DONE

//Count of positives/sum sum of negatives (8)
//input is array; output is array with first being count of pos nums and second the sum of neg nums

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]

// function countPositivesSumNegatives(input) {

//   if (input.length === 0 || input === null){
//     return []
//     }
//   let posCount = 0
//   let negSum = 0

//   for(let num of input){
//     if(num > 0){
//       posCount++
//     } else if(num < 0){
//         negSum += num
//     }
//   }
//    return [posCount, negSum]

// }

// console.log(countPositivesSumNegatives(array))


//Fix string case (7)
//input string, output string with 
//iterate through to determine count of upper and lower case
//return d to capital if more lower than upper
//return e to lower if more upper than lower
//return all lower if upper and lower are equal

// let string = "coDE"

// function solve(s){
//   let upperCount = 0
//   let lowerCount = 0 

// for(let i = 0; i < s.length; i++){
//   if(s[i] === s[i].toUpperCase()){
//     upperCount++
//   } else {
//     lowerCount++
//   }
// }

// if(lowerCount >= upperCount){
//   return s.toLowerCase()
// }
// return s.toUpperCase()


// }

// console.log(solve(string))


//Pair of Gloves (6)
//input is array of glove colors, output is integer (number of pairs that can be constituted)
//create placehodler object
//use handydandy objects formula to count frequency of each element (or each color)
//using the object of color, create 
// to check for total pairs, divide each value by 2 and return that amount

// let input1 = ["red", "green", "red", "blue", "blue"]
// let input2 = ["red", "red", "red", "red", "red", "red", "yellow", "yellow"]


// function numberOfPairs(gloves){

//   let gloveColorCount = {}

//   for(let color of gloves){
//   gloveColorCount[color] = (gloveColorCount[color] || 0) + 1
//   //console.log(gloveColorCount)
//   }

//   let totalGlovePairs = 0


//   for (let count of Object.values(gloveColorCount)){


//     totalGlovePairs += Math.floor(count/2)
//   }

// return totalGlovePairs
//   //My hands are freezing
// }

// console.log(numberOfPairs(input2))

//Write Number in Expanded Form (6)
//input is number; output is number in expanded form (array)
//change number to a string to make it iterable
//if num has one digit, return the digit
//iterable through string
//if any string digit is 0, skip over it
//for each digit, concatenate 0s onto it (depending on its length: length minus the indices left)

// let number = 70304

// const expandedForm = (num) => {

//   let numToStr = num.toString()
//   let result = []

//   for(let i = 0; i < numToStr.length; i++){
//     if(numToStr[i] !== '0'){
//       result.push(numToStr[i] + '0'.repeat(numToStr.length - i - 1))
//       //console.log(numToStr.length - i)
//     }
//   }

//     return result.join(' + ')


// }

// console.log(expandedForm(number))


//Fold an Array (6)
//input array; output is array with mid num folder and sum of nums on the opposite side of middle num
//

//  let arr = [1, 2, 3, 4]
//  let fold = 2

// const foldArray = (array, runs) => {

//   let left = 0
//   let right = array.length - 1 //last number

//   let temporaryArr = array.slice()

//   while (runs > 0){ //will always be a positive number
//   console.log(temporaryArr)  
//   let foldedArray = []
//   left = 0
//   right = temporaryArr.length - 1


//   while (left < right){ //denotes even number of nums in array
//     let sum = temporaryArr[left] + temporaryArr[right]
//     foldedArray.push(sum) 
//     left++ //adding to index, so moving right
//     right-- //chipping away at index from the right, so moving left

//   }
//   console.log(foldedArray)


//   if(left === right){ //denotes odd number of nums in array because there is one element in the center
//     foldedArray.push(temporaryArr[left])


//   }
//   temporaryArr = foldedArray.slice()
//   runs--
// }
// return temporaryArr
// }
//console.log(foldArray(arr,fold))

//expected output is [4,2]

//Descending Order (7)

// let num = 42145

// function descendingOrder(n){

//   let arr = Array.from(String(n), Number)
//   const desc = arr.sort((a,b) => b - a )

//   return parseInt(desc.join(''))

// }

// console.log(descendingOrder(num))

//Complementary DNA (7)

// let string1 = "ATTGC"
// let string2 = "GTAT"

// function DNAStrand(dna){


//   let newString = ""

//   for(let i = 0; i < dna.length; i++){
//     if(dna[i] === "A"){
//       newString += "T"

//     } else if (dna[i] === "T"){
//       newString += "A"

//     } else if (dna[i] === "C"){
//     newString += "G"

//     } else if (dna[i] === "G"){
//     newString += "C"
//     }
//   }
//    return newString
//   }


//   console.log(DNAStrand(string1))
//   console.log(DNAStrand(string2))


//Who Likes This? (6)
//input is array of names; output is display text (string)
//count number of elements and return the specific message
//use template literal for the message

// let listOfNames = ["John", "Peter", "Jerry", "Max", "Mark", "Jacob"]

// function likes(names){
//   let likesMessage = ''



//   switch(names.length){
//     case 0:
//       likesMessage = 'no one likes this'
//       break
//     case 1:
//       likesMessage = `${names} likes this`
//       break
//     case 2:
//       likesMessage = `${names[0]} and ${names[1]} like this`
//       break
//     case 3: 
//       likesMessage = `${names[0]}, ${names[1]} and ${names[2]} like this`
//       break
//     default:
//       likesMessage = `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
//       break

// }

//   return likesMessage
// }

// console.log(likes(listOfNames))

//Length of missing array (6)
//input is array of arrays; output is length (integer) of missing array
//sort the arrays in order of length
//loop over new array and check the difference in indices from one to the other
//missingLength will be the length of the current index, where this rings true, minus 1

// let array = [[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]]
// let array2 = [[5, 2, 9 ], [4, 5, 1, 1 ], [ 1 ], [ 5, 6, 7, 8, 9]]

// function getLengthOfMissingArray(arrayOfArrays) {

//   if(arrayOfArrays.length === 0 || arrayOfArrays === null){
//     return 0
//   }

// let arrInOrder = arrayOfArrays.sort((a,b) => a.length - b.length)

// //console.log(arrInOrder)
// for(let i = 0; i < arrInOrder.length; i++){
//   if (arrInOrder[i].length + 1 !== arrInOrder[i + 1].length){  //checking that the lenght of current plus one is not equal to the length of the next array
//     return arrInOrder[i].length +1  //length of missing by adding 1 to the current array (missing array is its right)
//   }
// }

// }

// console.log(getLengthOfMissingArray(array)) //NOT DONE - keep getting error


//Coding Meetup #1 - Higher-Order Functions Series - Count the number of JavaScript developers coming from Europ (7)
//input is output is object, output is a number 
//have to loop through object to count frequency 
//return frequency

// var list2 = [
//   { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
//   { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
//   { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
//   { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' },
//   { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
//   { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'CSS' }
// ];
// 

// // function countDevelopers(list) {
// //  console.log(list[continent])

// //   let countOfEuropeans = 0

// //   for(let continent in list){




// function countDevelopers(list) {
//   let countOfJsEuropeans = 0;

//   for (let i = 0; i < list.length; i++) {
//     let developer = list[i];

//     if (developer.language === 'JavaScript' && developer.continent === 'Europe') {
//       countOfJsEuropeans++
//     }
//   }

//   return countOfJsEuropeans
// }

// // }



// function count(list){

// let countOfJsEuropeans = list.filter(e => e.language === "Javascript" && e.continent === 'Europe')

// return countOfJsEuropeans

// }

// console.log(countDevelopers(list2))


//Coding Meetup #2 - Greet Developers (7)

//input is array of objects; output is array of objects with new property of greeting
//iterate through array of objects
//create a new property for the greeting
//use a template literal to customize the greeting by name and language

// function greetDevelopers(list) {

//   for(let developer of list){
//     developer.greeting = `Hi ${developer.firstName}, what do you like the most about ${developer.language}?`
//   }
//   return list

// }

// function greetDevelopers (list){

//   let newList = list.map(x.greeting => {x.greeting `Hi ${develop.firstName}, what do you like the most about ${developer.language}?`})

//   return newList
// }


// console.log(greetDevelopers(list2))

//Bit Counting (6)
//

// let num = 1234

// var countBits = function (n) {


//   let numAsBin = ''
//   let ones = 0

//   while (n > 0) {
//     const remainder = n % 2;
//     numAsBin = remainder + numAsBin;
//     n = Math.floor(n / 2);

//     ones += n & 1
//   }


//   return ones
// }    

// console.log(countBits(num))

// let string = "BORN IN 2015!"

// function playPass(s, n) {

//   let arr = s.split("")
//   //console.log(arr)

//   //first command
//   for (let i = 0; i < n; i++) {
//     arr.unshift(arr.pop());

// console.log(arr)
// }




// }

// console.log(playPass(string, 1))
//NOT DONE - Caesar Cipher kata

//Simple Pig Latin (5)
// function pigIt(str){
//     let wordsOfString = str.split(" ");

//   let newWordsOfString = wordsOfString.map(word => {
//    if (word.match(/[a-zA-Z]/)){
//     let firstLetter = word[0];
//     let remainingLetters = word.slice(1);
//     return remainingLetters + firstLetter + "ay";
//    } else {
//     return word
//    }
//   });


//   return newWordsOfString.join(' ');
// }


//Are they the same? (6)
//input is two arrays, output is boolean (if second array contains the squares of the numbers in first array)
//square each number in array1, then sort
//convert to string and compare


// let a = [121, 144, 19, 161, 19, 144, 19]  
// let b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]

// function comp(array1, array2){
//    if(array1 === null || array2 === null){
//     return false
//    }

//    let squaredArray1 = array1.map(e => e * e)

//    let sortedArray1 = squaredArray1.sort((a, b) => a - b)

//    let sortedArray2 = array2.sort((a, b) => a - b)

//    return sortedArray1.toString() === sortedArray2.toString() ? true : false


//   }


//Count characters in your string (6)
//input string, output frequency

// function count(string) {
//   if (string === ""){
//     return {}
//   }

//   let splitString = string.split("")
//   console.log(splitString)

//     let freqOfLetters = {}

//     for (letter of splitString){
//         freqOfLetters[letter] = (freqOfLetters[letter] || 0) + 1
//     }



//     return freqOfLetters
//   } 

//   console.log(count("Haaaaarrrrry Pooottteeeer"))

//Sum Mixed Array (8)
//input array of integers; output: sum of array values

//Multi-tap Keypad Text Entry on an Old Mobile Phone (6)
//input: string; output: number of pressed required to achieve the string 

// function presses(phrase) {
//     let caseFreePhrase = phrase.toUpperCase()

//  let phoneDiagram = [' 0', '1', 'ABC2', 'DEF3', 'GHI4', 'JKL5', 'MNO6', 'PQRS7', 'TUV8', 'WXYZ9', '0']

//  let numOfPresses = 0

//  for (let char of caseFreePhrase) {
//      for (let i = 1; i < phoneDiagram.length; i++) {
//          const key = phoneDiagram[i];
//          const presses = key.indexOf(char) + 1;

//        if(char == '0'){
//          numOfPresses += 2
//          break;
//        } 
//        if (presses > 0) {

//              numOfPresses += presses;
//              break;
//          } if (char === " "){
//              numOfPresses++
//              break;
//          }

//      }
//  }

//  return numOfPresses
// }

//   console.log(presses("WHERE DO U WANT 2 MEET L8R")) //NOT DONE

//Greed is Good (5)
//input: values of dice (1-6); output: score

// function score(dice) {
//     let score = 0 //placeholder score

//     for (let i = 1; i <= 6; i++) { 
//         let occurrence = dice.filter(value => value === i).length //use loop and filter to generate new array that lays out the occurrence of each value of the dice (1-6)

//         if (occurrence >= 3) { //if there are at least three occurrences, and if 1, get 1000, otherwise mukltiple by 100 for other values
//             if (i === 1) {
//                 score += 1000
//             } else {
//                 score += i * 100
//             }
//             //
//             if (occurrence > 3) {
//                 if (i === 1) {
//                     score += (occurrence - 3) * 100
//                 } else if (i === 5) {
//                     score += (occurrence - 3) * 50
//                 }
//             }
//         }
//     }


//     return score
// }

//NOT DONE

//Roman Numerals Decoder (6)

//hard code the numeral values and store as an object
//iterate through the roman numeral and identify both the current numeral and the value of the current numeral
//because roman numerals uses letters in descending order, check is there is a next character and if it is it greater than the current value
//if so subtract the value from the number; otherwise add the value



// let string = "MDCLXVI"
// function solution (roman) {
//     let numeralValue = {
//         'I': 1,
//         'V': 5,
//         'X': 10,
//         'L': 50,
//         'C': 100,
//         'D': 500,
//         'M': 1000
//     }


//     let number = 0

//     for (let i = 0; i < roman.length; i++) {
//         let currentNumeral = roman[i];
//         let currentValue = numeralValue[currentNumeral];
//         console.log(currentValue)
//         if (i < roman.length - 1 && numeralValue[roman[i + 1]] > currentValue) {

//             number -= currentValue;
//         } else {
//             // Otherwise, add its value
//             number += currentValue;
//         }
//         }


//     return number;
// }

// console.log(solution(string))



/*Tic-Tac-Toe Checker (5)
-input is the game board
-put is a number of winner, draw, or unfinished
-set players and track player moves
-need variable for length of board
-iterate through rows and column; also need way to iterate through diagonals

*/
// let game = [[0, 0, 1],
// [0, 1, 2],
// [2, 1, 0]]

// function isSolved(board) {
//    let boardSize = board.length

//     let player = {
//         1: 'X',
//         2: 'O'
//     }

//     const playerMovesCount = {
//         rows: {},
//         columns: {},
//         firstDiagonal: {1:0, 2:0},
//         secDiagonal: {1: 0, 2: 0}
//     }

//     for (let rows = 0; rows < boardSize; rows++){
//         for(let columns = 0; columns < boardSize; col++){
//         playerMovesCount.rows[rows][player] = (playerMovesCount.rows[rows][player] || 0) + 1
//         playerMovesCount.columns[columns][player] = (playerMovesCount.columns[columns][player] || 0) + 1
//         playerMovesCount.rows = playerMovesCount.rows[rows] || {1:0, 2:0}
//         playerMovesCount.columns = playerMovesCount.columns[columns] || {1:0, 2:0}

//         if(playerMovesCount.rows === playerMovesCount.columns){
//             playerMovesCount.firstDiagonal[player]++
//         }
//         if(playerMovesCount.rows + playerMovesCount.columns === boardSize - 1){
//             playerMovesCount.secDiagonal[player]++
//         }

//     console.log(playerMovesCount)
//     //code for win
//     if(playerMovesCount.rows[rows][player] === size){
//         return 1
//     }
//code for draw


//     //code for unfinished
//         }   
// }
//   }

// console.log(isSolved(game))



// What's in a Name (6)
// create accumulator variable to  track num of chars in string that match those in name
// loop through the string
// if character is in the name, add to the count
// check if there are no more charcaters left in name to be matched 



// function nameInStr(str, name) {

//     str = str.toLowerCase()
//     name = name.toLowerCase()

//     let count = 0

//     for(let i = 0; i < str.length; i++){
//         if (str[i] === name[count]) {
//             count++
//         }
//     }

//     if (name.length === count){
//         return true
//     }

//     return false

// }

/* The Vowel Code (6)
-input is a string, output is string with vowels replaced by numbers
-store the vowels and corresponding numbers
-loops through charcaters in string seraching for vowels and return them with the replacement
-for decode, swithc the values in the hashmap and the letters strings

*/

// function encode(string) {
//     let newString = ""
//     let vowels = {a:1, e:2, i:3, o:4, u:5}

//     for(let i = 0; i < string.length; i++){
//         if (vowels[string[i]]){
//             newString += vowels[string[i]]
//         } else {
//             newString += string[i]
//         }
//     }

//     return newString
//   }

//   function decode(string) {

//     let originalString = ""
//     let vowels = {1:'a', 2:'e', 3:'i', 4:'o', 5:'u'}

//     for(let i = 0; i < string.length; i++){
//         if (vowels[string[i]]){
//             originalString += vowels[string[i]]
//         } else {
//             originalString += string[i]
//         }
//     }


//     return originalString
//   }

// console.log(encode("hello"))

// console.log(decode("h2ll4"))

/*
The Hashtag Generator (5)
- add edge cases
- input string; output is string with hastag in front and first letters capitalized and words combined
- turn to array
- use map to capitalize
- use use split to combine words
-use 

*/
// let string = "    Hello     World   "   

// function generateHashtag (str) {

//     if (str === ""){
//         return false
//     }

//     str = str.trim()

//     let eachWord = str.split(" ")

//     console.log(eachWord)

//     let capitalize = eachWord.map(e => {
//         if (e === ""){
//             return ""
//         }
//          return e[0].toUpperCase() + e.slice(1)
//     })
//     console.log(capitalize)

//     capitalize.unshift('#')

//     let hashtag = capitalize.join("")

//     if (hashtag.length > 140){
//         return false
//     }

//     return hashtag

// }

// console.log(generateHashtag(string))


/*longest_palindrome (6)
-input is string, output is number of length of longest palindrome
-need to see if any part of string is a palindrome (same forward and backward)
-compare which is longest


*/
// let string = "I like cats"

// function longestPalindrome(s) {
//     if (s === "") {
//         return 0
//     }

//     s = s.toLowerCase().split(' ')
//     console.log(s)


//     const reversedSubstrings = s.map(word => {
//         return word.split("").reverse().join("")
//     })

//     //console.log(reversedSubstrings)

//     let lengthOfLongestPalindrome = 0
    
 

//     for (let i = 0; i < s.length; i++) {
//         if (s[i] === reversedSubstrings[i]) { //if palindrome
//             let wordLength = s[i].length

//             console.log(reversedSubstrings)
            
            
//             console.log(wordLength)
            
//             if (wordLength > lengthOfLongestPalindrome) {
//                 console.log("word length", wordLength)

//                 lengthOfLongestPalindrome = wordLength
               
//             }
//         }
//     }
//     return lengthOfLongestPalindrome

// }

// console.log(longestPalindrome(string))

// //NOT DONE


/*Format words into a sentence (6)
-input is array of strings; output is a formatted string
-

*/

// let string = ['ninja', 'samurai', 'ronin']

// function formatWords(words){

//     if (words.length === 0){
//         return ""
//     }

//     if (words.length === 1){
//         return String(words[0])
//     }

//     let firstWord = words.shift()
//     let lastWord = words.pop()
    
//     for (let i = words.length - 1; i >= 0; i--) {
//         if (words[i] === "") {
//             words.splice(i, 1);
//         }
//     } 

//     if (words.length >= 2){
//     return String(firstWord) + ', ' + words.join(', ') + ' and ' + lastWord
        
//     }
// }

// console.log(formatWords(string))

// NOT DONE


/* First character that repeats (6)



*/

let string = "twete"

function firstDup (s) {
 
 for (let i = s.length - 1; i >= 0; i--){
    for(let j = i - 1; j >= 0; j-- ){
        if(s[i] === s[j]){
            return s[i]
        }
    }

 }

return undefined

}

console.log(firstDup(string))