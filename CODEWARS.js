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


