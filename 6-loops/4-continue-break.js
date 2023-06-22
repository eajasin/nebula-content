// 1.   Write a for loop that looks for the letter a
//      The loop should log the letter 'a' to the console
//      STOP immediately after finding the letter 'a'

// const string = "I went to the zoo and observed two aardvarks."

// for(let i = 0; i < string.length; i++){
//     let currentLetter = string[i]
//     if(currentLetter === "a"){
//         console.log(currentLetter)
//         console.log("There it is finally!")
//     break;
//     } else {
//         i++
//         console.log(currentLetter)
//     console.log("That's not it")}
// }


// 2.   Write a for loop that looks for a number
//      The loop should log 'at index _ there is the number _' to the console 
//      Stop immediately after finding that number
//      ex: Input: ['a','b','c', 100,'e']
//          Output: 'at index 3 there is the number 100'

// let num = 34689869486948561
// let foundNum = 3

//     for(let i = 0; i < num.length; i++){
//         let currentNum = num[i]
//         if(currentNum === foundNum){
//             console.log(`at index ${currentNum} there is the number ${foundNum}`)
//             break;
//         } 
//             }
    





// 3.   Using the continue keyword loop over an array of numbers & strings
//      If the current element is a number skip it
//      Otherwise add the element to an array
//      After finishing the loop log the new array to the console

    const newArray = [3, "dog", 26, "cow", "chicken", 17]
    let arrayofStrings = []

   for(let i = 0; i < newArray.length; i++){
        let currentElement = newArray[i]
        let num = newArray[0, 2, 5]
        let string = newArray[1, 3, 4]
              if(currentElement = num){ //can use "typeof" but how to make true/false?
             continue;     
              } else if(currentElement = string){
                currentElement += string
                    arrayofStrings.push(currentElement)
              }
            }
                               
    console.log(arrayofStrings)