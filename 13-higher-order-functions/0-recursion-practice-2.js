// ## Recursion Practice 2

// We will be using Node's baked in console asserts to test our code, don't worry, were not testing you, we are testing our code! The tests will pass if the code is correct, and fail if the code is incorrect.

// Basic syntax of a recursive function
// function recursiveFunction (input) {
//   // Base case
//   if (input === 'base case') {
//     return 'base case'
//   } else {
//     // Recursive case
//     return recursiveFunction(input)
//   }
// }

/*
Question 1:
Write a recursive function that takes in a string and returns the reverse of that string.
  - ex: 'hello' -> 'olleh'
*/

// Solution Here
// function reverseString(str) {
// if(str === ""){
//   return ""
// } else {
//   return reverseString(str.slice(1)) + str[0]
// }
// }
// console.log(reverseString("Harry Potter"))

// Test Case - Logs nothing if test passes
// console.assert(reverseString('hello') === 'olleh', {
//   Expected: 'olleh',
//   Actual: reverseString('hello'),
//   Message: 'Question 1 - Test Failed'
// }) // 'olleh'

/*
Question 2:
Write a recursive function that takes in a number and returns an array of all the factors of that number.
  - Factors are numbers that divide evenly into another number.
  - ex: 12 -> [1, 2, 3, 4, 6, 12]
*/

// // Solution Here
// function factors(n, divisor = 1, currFactors = []) {
//   if (n === 1) { // if 
//     return 1
//   }
//   if (divisor > n) {
//     return currFactors

//   }
//   if (n % divisor === 0) { //number divides evenly into n
//     currFactors.push(divisor)
//   }

//   return factors(n, divisor + 1, currFactors) //divisor increments by 1 each recursion
// }

// console.log(factors(24))




// Test Case - Logs nothing if test passes
// Testing arrays is a little tricky, so we are using the join method to convert the arrays to strings and comparing those.
// console.assert(factors(12).join('') === [1, 2, 3, 4, 6, 12].join(''), {
//   Expected: [1, 2, 3, 4, 6, 12],
//   Actual: factors(12),
//   Message: 'Question 2 - Test Failed'
// }) // 6

// /*
// Question 3:
// Write a recursive function that takes in an array and returns the sum of all the elements in that array.
//   - ex: [1, 2, 3] -> 1 + 2 + 3 = 6
// */

// // Solution Here
// function sumArray (arr, total = 0) {
// if (arr.length === 0){
//   return 0
// }
// if (arr.length === 1){
//   return total += arr.pop()
// }

//   total += arr.pop()
//   return sumArray(arr, total)
// }

// //}

// console.log(sumArray([1, 2, 3]))



// // Test Case - Logs nothing if test passes
// console.assert(sumArray([1, 2, 3]) === 6, {
//   Expected: 6,
//   Actual: sumArray([1, 2, 3]),
//   Message: 'Question 3 - Test Failed'
// }) // 6

// /*
// Question 4:
// Write a recursive function that takes in an array and returns the maximum element in that array.
//   - ex: [1, 2, 3] -> 3
// */

// Solution Here
// function findMax(arr) {

//   if (arr.length === 0) {
//     return 0
//   }
//   if (arr.length === 1) {
//     return arr.pop()
//   }

//   let a = arr.pop()
//   let b = arr.pop()

//   if (a > b) {
//     arr.push(a)
//   } else {
//     arr.push(b)
//   }
  
//   return findMax(arr)

// }
// console.log(findMax([4, 3, 5]))




// // Test Case - Logs nothing if test passes
// console.assert(findMax([1, 2, 3]) === 3, {
//   Expected: 3,
//   Actual: findMax([1, 2, 3]),
//   Message: 'Question 4 - Test Failed'
// }) // 3

// /*
// Question 5:
// Write a recursive function that takes in a tree and returns the number of nodes in that tree.
//   - ex:
//   const tree = {
//     //Root Node -> 1 Node
//     value: 1,
//     children: [
//       //Child Node -> 2 Nodes
//       {
//         value: 2,
//         children: [],
//       },
//      // Child Node -> 3 Nodes
//       {
//         value: 3,
//         children: [],
//       },
//     ]
//   } //-> 3 Nodes
// // */

// // // Solution Here
// function countNodes(tree, totalNodes = 1) {
  
//   if(Object.keys(tree) === 0){
//     return 0
//   }

//  // if(tree.children.length === 0){
//  // totalNodes += 1
//  // } else {
//    for(let children of tree.children){
//    totalNodes += countNodes(children)
//   }
// //}
//   //console.log(totalNodes)
//   return totalNodes
// }

// console.log(countNodes(tree))


//Base case
//   if (input === 'base case') {
//     return 'base case'
//   } else {
//     // Recursive case
//     return recursiveFunction(input)
//   }
// }



// // Test Case - Logs nothing if test passes
// const tree = {
//   value: 1,
//   children: [
//     { value: 2, children: [] },
//     { value: 3, children: [] }
//   ]
// }

// console.assert(countNodes(tree) === 3, {
//   Expected: 3,
//   Actual: countNodes(tree),
//   Message: 'Question 5 - Test Failed'
// }) // 3
