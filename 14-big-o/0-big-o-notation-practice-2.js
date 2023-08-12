// 1.   What is the big O of the following function. Describe what the function does and use that as the reasoning for your answer.

function multipleSteps(num) {
  let final = 4 * num
  return final * 3
}

//The big O is O(1) regardless of the size of num, the computer will be doing the same amount of "work" to achieve the answer.

// 2.   What is the big O of the following function. Describe what the function does and use that as the reasoning for your answer.

function backwardsArr(arr) {
  let arrReversed = []
  for (let i = arr.length - 1; i >= 0; i--) {
    arrReversed.push(arr[i])
  }
  return arrReversed
}

//The big O is O(n).  Even though the loop is reversing the array, it only iterats through once, just backwards.
//The larger the array is, the more iterations the loop has to perform.

// 3.   What is the big O of the following function. Describe what the function does and use that as the reasoning for your answer.

function multiplyAll(arr1, arr2) {
  if (arr1.length !== arr2.length) return undefined
  let total = 0
  for (let i of arr1) {
    for (let j of arr2) {
      total += i * j
    }
  }
  return total
}

//The big O is O(n^2) because it has one loop running (complexity of O(n)) with another nested within (also O(n)).

// 4.   What is the big O of the following function. Describe what the function does and use that as the reasoning for your answer.

let nums = [10,20,30,40];
nums.push(50);

//The big O is O(1) because the computer only "works" to add to the end of it.  The length of the input arary is inconsequential.

// 5.   What is the big O of the following function. Describe what the function does and use that as the reasoning for your answer.

let nums2 = [10,20,30,40];
nums.unshift(0);

//The big O is O(n).  Although the function only adds one element to the front of the array,
//the shift is mapping (loopinng) over the entire array and adding 1 to each of their indices.

// 6.   What is the big O of the following function. Describe what the function does and use that as the reasoning for your answer.

function logTime(arr) {
  let numberOfLoops = 0
  for (let i = 1; i < arr.length; i *= 2) {
    numberOfLoops++
  }
  return numberOfLoops
}

//The big O is O(n) because it is growing according to the size of the arr.  The longer arr.length, the more interations there needs to be.