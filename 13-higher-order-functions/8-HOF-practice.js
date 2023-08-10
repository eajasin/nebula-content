// .sort() Practice

/* Question 1
Write a HOF to sort an array of numbers from largest to smallest */
const nums = [1,25,6,3,88,45,0]

nums.sort((a,b) => a - b)

console.log(nums)

/* Question 2
Write a HOF to sort peoples names by their length */
const partyPeople = [{name: 'John', age: 25}, {name: 'Jordan', age: 18}, {name: 'Frank', age: 50}, {name: 'Anna', age: 12}]

partyPeople.sort((a,b) => a.name.length - b.name.length)

console.log(partyPeople)

/* Question 3
Write an HOF to sort an array of objects of people by their age youngest to oldest */

partyPeople.sort((a,b) => a.age - b.age)

console.log(partyPeople)

/* Question 4
Write an HOF to sort an array of strings by the last letter of the string */
const strings = ['sam', 'john', 'daniel', 'vanessa']

strings.sort((a,b) => {

if(a[a.length-1] < b[b.length-1]){ //compares last character of string a with that of string b. If is alphabetically less than the last of b, it returns -1
    return -1
} if (a[a.length-1] > b[b.length-1]) { //same but compares if greater; if so returns 1
    return 1
} return 0 

})

console.log(strings) 



