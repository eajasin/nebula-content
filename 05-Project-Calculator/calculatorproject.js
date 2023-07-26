const resultdisplay = document.getElementById('displayscreen')
let numberbtns = document.querySelectorAll('.numberbtns')
let operatorbtns = document.querySelectorAll('.operatorbtns')
let num1 = null;
let num2 = null;
let separator = null

// <-- START OF DISPLAYING CONCATENATED  NUMBERS -->


//WITH CLICK
numberbtns.forEach(button =>{
button.addEventListener('click', e => {
   document.querySelector('#displayscreen').innerText += button.dataset.number

 num1 = document.querySelector('#displayscreen').innerText 
 num2 = document.querySelector('#displayscreen').innerText 

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

// <-- START OF SEPARATING STRINGS -->

const splitStr = (numstr1, numstr2, separator) => {
    if(!Number.isNaN(Number(numstr1)) && !Number.isNaN(Number(numstr2))){
        return numstr1 + separator + numstr2
    // } else {
    //     "Error"
    }   
}

// <-- END OF SEPARATING STRINGS -->




// <-- CLEAR BUTTON START -->

const clearbtn = document.getElementById('clearbtn')

clearbtn.addEventListener('click', e => {
    resultdisplay.innerText = ''
})
// <-- CLEAR BUTTON END -->


//<-- OPERATOR FUNCTIONALITY START -->

let equalbtn = document.getElementById('equalbtn')


const mathOp = (num1, num2, operation) => {

    let = result;


    switch(operation) {
    case "+":
        result = parseFloat(num1) + parseFloat (num2);
        break;
    case "-":
        result = parseFloat(num1) - parseFloat (num2);
        break;
    case "*":
        result = parseFloat(num1) * parseFloat (num2);
        break;
    case "/": 
        result =  parseFloat(num1) / parseFloat (num2);
        break;
                         
} return result
    }
const onebtn = document.getElementById('onebtn')

// const onclick = () => {
//     = displayscreen.value

// function that can split the string by the non-number


   
// }   

// zerobtn.addEventListener('click', e => {
//    console.log(e)
   
//     //resultdisplay.innerText = zerobtn.innerText
// })





// equalbtn.addEventListener('click', e => {
    
//     let result = mathOp(splitStr(num1, num2, separator))
//     resultdisplay.innerText = result
   



    // let selOperator = operatorbtns.e.target.innerText
    // let result = mathOp(number1, number2, selOperator)
    // resultdisplay.innerText = result





})


//<-- OPERATOR FUNCTIONALITY END -->





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




