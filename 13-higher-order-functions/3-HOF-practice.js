// .map() Practice

/* Question 1
Using .map() create a new array that doubles all the numbers in a given array */

const numbers = [ 1, 2, 3, 4, 5 ]

const doubleEm = numbers.map(currElement => currElement * 2)

console.log(doubleEm)

/* Question 2
Using .map() create a new array that halves all numbers in a given array */

const splitEmInHalf = numbers.map(currElement => currElement / 2)

console.log(splitEmInHalf)

/* Question 3
Using .map() create a new array that squares all of the numbers in a given array */

const squareEm = numbers.map(currElement => currElement ** 2)

console.log(squareEm)


/* Question 4
Using .map() create a new array of all capital strings from an array of lower case strings */

const lowerCase = ['hello', 'world', 'how', 'are', 'you']

const capStrings = lowerCase.map(currElement => currElement.toUpperCase())

console.log(capStrings)

/* Question 5
Using .map() create a new array of greeting sentences from an array of given people
  Expected output:
    ['Hello Pamela', 'Hello Michael', 'Hello Angela'] */

const people = ['Pamela', 'Michael', 'Angela']

const greeting = people.map(currElement => 'Ciao, ' + currElement + '!')

console.log(greeting)