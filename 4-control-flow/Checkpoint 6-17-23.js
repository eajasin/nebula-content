/*
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

//"7 divided by 3 is 2 with a remainder of 1" 

/*let dayOff = "I have a day off"
let dayOn = null
if(dayOn){
  console.log("I will sleep in")
}
*/

/*Turn the following sentence into a conditional statement with variables: 
"if a student scored 80-100 they did "excellent", 
60-70 they did "OK", 
and if they got less than 59 they "failed"" */

/*let degreesFahrenheit = -100000

if(degreesFahrenheit >= 65 && degreesFahrenheit <=100){
  console.log("Time for the beach!")
}else if(degreesFahrenheit > 100){
  console.log("You'll burn!");
}else if(degreesFahrenheit >= 20 && degreesFahrenheit <=49){
  console.log("I really hope you're wearing a coat!")
}else if(degreesFahrenheit >= 50 && degreesFahrenheit <=64)
  console.log("Put on a jacket!")
 else(console.log("Time to sit by the fireplace!"))
 */

 //Write a conditional statement that takes in a number and returns a string stating if the number is odd or even
  
 let num = 0

 if(num % 2 === 0){
  console.log("Num is even.")
 } else if(num % 2 === 1){
  console.log("Num is odd.")
 }

//Write a conditional statement that takes in any string and looks to see if the letter 't' is in the string 

let string = "The clothes make the man."

if(string.includes("t")){
  console.log ("There are one or more 't's in this string.")
} else if(!string.includes("t"))
  console.log("There is no 't' in this string.")
