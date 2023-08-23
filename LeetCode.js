/*Two Sum (Easy)
--input is array and target (sum of two elements in array)
-x+ y = target
-use object to store all the indices
-loop throuhg array and determine the "x" by subtracting current element from the target
-if "x" exists, return the indice of that element and the index of the difference
-if not, just return the index

*/

// let arr = [2,7,11,15]
// let sum = 9

// var twoSum = function(nums, target) {
//     //index(X) + index(Y) = target
//     let allIndices = {}


//     for(let i = 0; i < nums.length; i++){
//         let difference = target - nums[i]

//         if(allIndices[difference] !== undefined){
//             return [i, allIndices[difference]]
//         } else {
//             allIndices[nums[i]] = i
//         }


// }    
//     };

//     console.log(twoSum(arr,sum))

let symbols = ['@', '#', '$', '%', '&', '*']
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

let characterCode = Array.from(Array(26)).map((_, i) => i + 97)
let lowerLetters = characterCode.map(code => String.fromCharCode(code)) 
let upperLetters = lowerLetters.map(letter => letter.toUpperCase())

function generatePassword(length, hasSymbols, hasNumbers, hasLowerLetters, hasUpperLetters){
    let availableCharacters = [
    ...(hasSymbols ? symbols : []),
    ...(hasNumbers ? numbers : []),
    ...(hasLowerLetters ? lowerLetters : []),
    ...(hasUpperLetters ? upperLetters : []),
  
]

let password =  ""
 
if(availableCharacters.length === 0) return "" 
for  (let i = 0; i < length; i++){
    const randomIndex = Math.floor(math.random() * availableCharacters.length) //grabs characters from avaliable characters array randomly
    password += availableCharacters[randomIndex]

}
 return password

}

console.log(generatePassword(4, true, true, true, true))