const resultdisplay = document.getElementById('displayscreen')
let numberbtns = document.querySelectorAll('.numberbtns')
let operatorbtns = document.querySelectorAll('.operatorbtns')


// <-- START OF DISPLAYING CONCATENATED  NUMBERS -->


//WITH CLICK
numberbtns.forEach(button =>{
button.addEventListener('click', e => {
   document.querySelector('#displayscreen').innerText += button.dataset.number
})
})

//WITH KEYDOWN





//<-- END OF DISPLAYING CONCATENATED NUMBERS -->


//<-- START OF DISPLAYING OPERATORS -->

operatorbtns.forEach(button=>{
    button.addEventListener('click', e =>{
      resultdisplay.innerText += button.dataset.operator
})
})
    
//<-- END OF DISPLAYING OPERATORS -->

// <-- CLEAR BUTTON START -->

const clearbtn = document.getElementById('clearbtn')

clearbtn.addEventListener('click', e => {
    resultdisplay.innerText = ''
})
// <-- CLEAR BUTTON END -->





// // <-- BACKSPACE BUTTON START -->

// const backspacebtn = document.getElementById('backspacebtn')

// function backspace(input) {
//     return input.slice(0, -1)
   
// }

// backspacebtn.addEventListener('click', e => {
//     resultdisplay.value = backspace(resultdisplay.value)
  
// })

// // <-- BACKSPACE BUTTON END -->




//<-- ADD FUNCTION START -->

// const addbtn = document.getElementById('addbtn')

// function add(num1, num2){
//     return parseInt(num1) + parseInt(num2)
// }

// addbtn.addEventListener('click', () => {
//     #displayscreen.innerText


// })

// subtractbtn.addEventListener('click', () => {
//     const num1 = document.getElementById('num1').value
//     const num2 = document.getElementById('num2').value
//     const result = subtract(num1, num2)    
//     resultdisplay.innerText = `Result: ${result}`
// })

//<-- ADD FUNCTION END -->







// const arithmetic = (a, b, operator) => {
  
//   switch (operator){
//   case "+":
//      return a + b; 
//      break;
 
//   case "-":
//      return a - b; 
  
//   case "*":
//      return a * b;
  
//   case "/":
//      return a / b;
 
// }
// }

// console.log(arithmetic(20, 2, "+"))


// Exes and Ohs (7)
//input is string, output is boolean

// const XO = (str) => {
  
//     let x = str.match(/x/gi) //find the number of occurrences for each letter, taking case into account
    
//     let o = str.match(/o/gi)
    
//     return (x && x.length) === (o && o.length) //determine if there is any occurrence and if the number of occurrences equals each other
        
//     }

//Unique In Order (6)
 //input is string/array; output is string/array in original order of elements




