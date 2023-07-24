const resultdisplay = document.getElementById('displayscreen')
let numberbtns = document.querySelectorAll('.numberbtns')
let operatorbtns = document.querySelectorAll('.operatorbtns')


// <-- START OF DISPLAYING CONCATENATED  NUMBERS -->

numberbtns.forEach(button =>{
button.addEventListener('click', e => {
   document.querySelector('#displayscreen').innerText += button.dataset.number
})
})
//<-- END OF DISPLAYING CONCATENATED NUMBERS --->

operatorbtns.forEach(button =>{
    button.addEventListener('click', e => {
      const operator = e.target.innerText;
      const displayscreen = document.querySelector('#displayscreen')
      displayscreen.innerText += operator
      
    })
    })


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

const addbtn = document.getElementById('addbtn')

function add(num1, num2){
    return parseInt(num1) + parseInt(num2)
}

addbtn.addEventListener('click', () => {
    const num1 = document.querySelector('#displayscreen').innerText
    const num2 = document.querySelector('#displayscreen').innerText
    const result = add(num1, num2)
    resultdisplay.innerText = `result ${result}`


})

// subtractbtn.addEventListener('click', () => {
//     const num1 = document.getElementById('num1').value
//     const num2 = document.getElementById('num2').value
//     const result = subtract(num1, num2)    
//     resultdisplay.innerText = `Result: ${result}`



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

