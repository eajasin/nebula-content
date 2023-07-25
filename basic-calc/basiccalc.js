/*  1) Create HTML structure with appropriate names, ids, etc.
    2) Reference the respective eleemnt from the HTML and create a variable for it
    3) 
*/



// <-- ADD FUNCTION START -->

const resultdisplay = document.getElementById('result') // for area to display result 

const addbtn = document.getElementById('addbtn') //accesses the respective button element named in HTML


function add(num1, num2) { //function that will be invoked when button is clicked
    return parseInt(num1) + parseInt(num2)  //ensures return is an integer, not a string
}

addbtn.addEventListener('click', () => {
const num1 = document.getElementById('num1').value //creates variable for the values added into each textbox
const num2 = document.getElementById('num2').value
const result = add(num1, num2)   //invoke function
resultdisplay.innerText = `Result: ${result}` //display result in specific area as a template literal

}) 
   
// <-- ADD FUNCTION END -->

// <-- SUBTRACT FUNCTION START -->

const subtractbtn = document.getElementById('subtractbtn')

function subtract(num1,num2) {
    return parseInt(num1) - parseInt(num2)
}

subtractbtn.addEventListener('click', () => {
const num1 = document.getElementById('num1').value
const num2 = document.getElementById('num2').value
const result = subtract(num1, num2)    
resultdisplay.innerText = `Result: ${result}`

})

// <-- SUBTRACT FUNCTION END -->

// <-- MULTIPLY FUNCTION START -->

const multiplybtn = document.getElementById('multiplybtn')

function multiply(num1,num2){
   return parseInt(num1) * parseInt(num2)
}

multiplybtn.addEventListener('click', () => {
const num1 = document.getElementById('num1').value
const num2 = document.getElementById('num2').value
const result = multiply(num1, num2)
resultdisplay.innerText = `Result: ${result}`
})


// <-- MULTIPLY FUNCTION END -->


// <-- DIVIDE FUNCTION START -->

const dividebtn = document.getElementById('dividebtn')


function divide(num1, num2){
    return parseInt(num1) / parseInt(num2)
}

dividebtn.addEventListener('click', () =>{
const num1 = document.getElementById(`num1`).value
const num2 = document.getElementById(`num2`).value
const result = divide(num1, num2)
resultdisplay.innerText = `Result: ${result}`

})



// <-- DIVIDE FUNCTION END -->