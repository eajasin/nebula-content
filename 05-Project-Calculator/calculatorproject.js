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
     } else {
       throw new Error("Error")
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




equalbtn.addEventListener('click', e => {
 const concatenatedString = document.querySelector('#displayscreen').innerText
    
try {
    const separator = ' '
    const numsWithOperator = splitStr(concatenatedString, separator)

const [num1, num2, operator] = numsWithOperator.split(separator)

const result = mathOp(num1, num2, operator);
resultdisplay.innerText = result;

} catch (error) {
    resultdisplay.innerText = error.message
}

})


//<-- OPERATOR FUNCTIONALITY END -->




    // let result = mathOp(splitStr(num1, num2, separator))
    // resultdisplay.innerText = result
   



    // let selOperator = operatorbtns.e.target.innerText
    // let result = mathOp(number1, number2, selOperator)
    // resultdisplay.innerText = result


// // <-- BACKSPACE BUTTON START -->

// const backspacebtn = document.getElementById('backspacebtn')

// function backspace(input) {
//     return input.slice(0, -1)
   
// }

// backspacebtn.addEventListener('click', e => {
//     resultdisplay.value = backspace(resultdisplay.value)
  
// })

// // <-- BACKSPACE BUTTON END -->







