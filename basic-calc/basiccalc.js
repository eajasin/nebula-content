
// const subtractbtn = document.getElementById('subtractbtn')
// const multiplybtn = document.getElementById('multiplybtn')
// const dividebtn = document.getElementById('dividebtn')

// <-- ADD FUNCTION START -->

const addbtn = document.getElementById('addbtn')
const resultdisplay = document.getElementById('result')

function add(num1, num2) {
    return parseInt(num1) + parseInt(num2)
}



addbtn.addEventListener('click', () => {
const num1 = document.getElementById('num1').value
const num2 = document.getElementById('num2').value
const result = add(num1, num2)  
resultdisplay.innerText = `Result: ${result}`


}) 
   

// <-- ADD FUNCTION END -->




// function subtract(num1,num2) {
//     return num1 -= num2
// }

// function multiply(num1,num2){
//     return num1 *= num2
// }

// function divide(num1, num2){
//     return num1 /= num2
// }


// subtract.addEventListener('click', subtract => {
//     subtract.preventDefault()
// })
// multiply.addEventListener('click', multiply => {
//     multiply.preventDefault()
// })

// divide.addEventListener('click', divide => {
//     divide.preventDefault()
// })

