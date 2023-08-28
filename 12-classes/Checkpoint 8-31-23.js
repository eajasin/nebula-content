

//2. What is a class?

//A class is a a template that can be used to create instances that have shared properties and functions.

//3. Write a class for an elevator. It has properties that include, a current floor, whether it's in transit, and if it is being occupied.

class Elevator {
  constructor(currentFloor, inTransit) {
    this.currentFloor = currentFloor,
    this.inTransit = inTransit,
    this.occupied = false
  }
}

//4. Add a method to the elevator that you created in the problem above which logs the current floor

class Elevator {
  constructor(currentFloor, inTransit) {
    this.currentFloor = currentFloor,
    this.inTransit = inTransit,
    this.occupied = false
  }
  logFloor(){
    console.log(`The elevator is on floor ${this.currentFloor}.`)
  }
}


//5. Add a method to the elevator that you created in the problem above which changes the elevators current floor to a new floor.

class Elevator {
  constructor(currentFloor, inTransit) {
    this.currentFloor = currentFloor,
    this.inTransit = inTransit,
    this.occupied = false
  }

  logFloor(){
    console.log(`The elevator is on floor ${this.currentFloor}.`)
  }

  if(inTransit = true)
  changeFloor(newFloor){
    this.currentFloor = newFloor
    console.log(`The elevator has moved to floor ${this.currentFloor}.`)
  }
}
 

//6. Create a class for an animal and two different child classes for two different animals

class Animal {
  constructor(type, lifeSpan, sound){
    this.type = type,
    this.lifeSpan = lifeSpan,
    this.sound = sound
  }
}

class Parakeet extends Animal {
  constructor(lifeSpan, sound){
    super("parakeet", lifeSpan, sound)
  }
}

class Frog extends Animal {
  constructor(type){
    super(type, 10, "ribbit")
  }
}



//7. Create your own higher-order function which takes in two numbers and a callback function. The callback function should perform subtraction on those numbers.
//NOTE: Do not use any existing higher order functions, write your own callback function. You should be creating two functions, the higher order function & the callback. 

const subtractTwoNums = (num1, num2, subtract) => {
  let difference = num1 - num2
  return subtract(difference)
}

//8. Using existing higher order functions, write a line of code that simplifies all numbers in an array into one number that is the product of all numbers multiplied together. 

let array1 = [1, 2, 3, 4, 5]

return array1.reduce((product, num) => product * num)


//9. Using existing higher order functions, write a line of code that returns an array with the strings reversed: Ex: ['hello', 'hi'] returns ['olleh', 'ih'].

let array2 = ["hello", "ciao", "bonjour"]

return array2.map(greeting => greeting.split("").reverse().join(""))


//10. Using a higher order function on an array of strings, return all strings shorter than 5 characters 

let array3 = ["apple", "pear", "fig", "kiwi", "mango"]

return array3.filter(fruit => fruit.length < 5)

//11. Given an array of objects order the array from greatest to least based on an id property. 

let array1 = [1, 2, 3, 4, 5]

return array1.sort((a, b) => b - a)

