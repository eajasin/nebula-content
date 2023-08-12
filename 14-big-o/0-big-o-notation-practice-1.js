  /* Either by hand, paint, or whatever you prefer draw the following complexities
    • O(1)
    • O(log n)
    • O(n)
    • O(n^2)
    • O(n^3)                                                                     */

// 1.   What is the big O of the following function? Describe what the function does and use that as the reasoning for your answer.
function loopAndPrint(arr){
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
}

//Big O is O(n) because the computer's level of "work" increases with the size of the input (longer arr, greater amount of work)

// 2.   What is the big O of the following function. Describe what the function does and use that as the reasoning for your answer.

function findMax(arr){
    let max = arr[0];

    for(let i = 1; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i]
        }
    }

    return max;
}

//Big O is O(n) because the computer's level of "work" increases with the size of the input (longer arr, greater amount of work)



// 3.   What is the big O of the following function Describe what the function does and use that as the reasoning for your answer.
function printLast(arr){
    console.log(arr[arr.length-1]); 
}

//Big O is O(1) regardless of the size of arr, the computer will be doing the same amount of "work" to achieve the answer (accessing the last letter).


// 4.   What is the big O of the following function. Describe what the function does and use that as the reasoning for your answer.
function everyOther(str){
    let newStr = '';

    for(let i = 0; i < str.length; i+=2){ 
        newStr += str[i]
    }

    return newStr;
}

//Big O is O(n) because the computer's level of "work" increases with the size of the input (longer str, greater amount of work)


// 5.   What is the big O of the following function. Describe what the function does and use that as the reasoning for your answer.

function doubled(num) {
    return 2 * num
}//Big O is O(1) regardless of the size of num, the computer will be doing the same amount of "work" to achieve the answer.
