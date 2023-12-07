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



//Contains Dupplicates (Easy)
//sort the array
//use for loop to determine if the current number is equal to the adjacent number then return true

// var containsDuplicate = function(nums){
// nums.sort((a,b) => a - b)

// for(let i = 0; i < nums.length - 1; i++){
//     if(nums[i] === nums[i+1]){
//         return true
//     }
// }
// return false
// }

// console.log(containsDuplicate([1,2,3,4, 1]))

//set() only takes in unqique nums; use for duplicates!!
//new Set(nums).size !== nums.length

//Valid Anagram (Easy)
//test (anagram or not) and oringal work (strings) => "true"/"false" if anagram is/is not anagram of each other (boolean)
//convert to array using "split" and alphabtize with sort, then convert back to string
//compare strings to each other (joined back to string because not checking the actual values of array)not primitive vAlue so checking references in memory); 
//compare strings because it is primitive, non-primitives have differnet memory references
//return true/false

// let string1 = "rat"
// let string2 = "tar"

// const isAnagram = (s, t) => {

//         let sAnagram = s.split("").sort().join("") //convert to array, alphabatize, convert back to string
//         let tAnagram = t.split("").sort().join("")
//         //  let sArray = sAnagram.split("") //
//         //  let tArray = tAnagram.split("")
//         //  let sortedS = sArray.sort()
//         //  let sortedT = tArray.sort()

//          //console.log(sArray)
//         //  if(sortedS.join("") === sortedT.join("")) {
//            if(sAnagram === tAnagram){
//          return true
//          } 

//         return false

// }

// console.log(isAnagram(string1, string2))


// //array.fill(26)

//Best Time to Buy and Sell Stock
//input: array of prices, output: integer representing maximum profit you can achieve

// let array = [7, 1, 5, 3, 6, 4]

// const maxProfit = (prices) => {
//         let minimumPrice = Infinity
//         let maximumProfit = 0

//         for(let i = 0; i < prices.length; i ++){
//                 if (prices[i] < minimumPrice){
//                         minimumPrice = prices[i]
//                 } else if (prices[i] - minimumPrice > maximumProfit){
//                         maximumProfit = prices[i] - minimumPrice
//                 }

//         }
//         return maximumProfit
// }

// console.log(maxProfit(array))

//Binary Search

// var search = function(nums, target, firstIndex, lastIndex) {
  
//         if (firstIndex > lastIndex) {
//           return -1;
//         }
      
//         let midIndex = Math.floor((firstIndex + lastIndex) / 2)
      
//         if (nums[midIndex] === target) {
//           return midIndex
//         } else if (nums[midIndex] < target) {
//           return search(nums, target, firstIndex + 1, lastIndex)
         
//         }
//       }
      
//       console.log(search([-1,0,3,5,9,12], 9,))
      
//       //NOT DONE