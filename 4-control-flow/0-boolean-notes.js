/*
null === undefined 

5 == "5" //true

10 !== "10" //true (strictly equal (same value but different data type))

20 === "20" //false (same value but different data type)

20 >= "20" //true (not strictly equal)

30 < 35 //true


let agent = "Johnny Bravo";

if(agent === "James Bond"){
  console.log("Welcome, Bond. Lets go over your mission debrief.");
} else if(agent === "Johnny Bravo"){
  console.log("You again?! Get out of here Johnny, before I ring the alarm.");
} else {
  console.log("Intruder Alert! You have 5 seconds to leave the premises or be dealt with!");
}

//When you have more than one condition, can they be appear in a sequence (e.g. first line 8 and then line 6)
*/

//Create a Horse Racing program that when executed, stores a random number in a variable called position between 1 and 5. 
//The program should then check to see what number is stored in the variable and output the messages indicated in the comments below.

// If position is 1, log to the console: "(Insert horseName) finished in first place!"
// If position is 2, log to the console: "(Insert horseName) finished in second place!"
// If position is 3, log to the console: "(Insert horseName) finished in third place!"
// If position is greater than 4, log to the console: "(Insert horseName) did not finish in the top 3."

let horseName = "BoJack";
let position = Math.ceil(Math.random()*5)
console.log(position)

if(position === 1){
    console.log(`${horseName} finished in first place!`)
} else if(position === 2){
    console.log(`${horseName} finished in second place!`)
} else if(position === 3){
    console.log(`${horseName} finished in third place!`)
} else if(position >= 4){
    console.log(`${horseName} did not finish in the top 3.`)
}

