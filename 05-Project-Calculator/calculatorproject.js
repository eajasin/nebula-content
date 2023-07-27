const resultdisplay = document.getElementById('displayscreen')
let numberbtns = document.querySelectorAll('.numberbtns')
let operatorbtns = document.querySelectorAll('.operatorbtns')
let num1 = null;
let num2 = null;
let separator = null;
let operatorClicked = false;

// <-- START OF DISPLAYING CONCATENATED  NUMBERS -->


numberbtns.forEach(button =>{
button.addEventListener('click', e => {
   if(!operatorClicked){
    num1 = num1 ? num1 + button.dataset.number : button.dataset.number

   } else {
    num2 = num2 ? num2 + button.dataset.number : button.dataset.number
   }
    document.querySelector('#displayscreen').innerText += button.dataset.number


})
})

//<-- END OF DISPLAYING CONCATENATED NUMBERS -->


//<-- START OF DISPLAYING OPERATORS -->

operatorbtns.forEach(button=>{
    button.addEventListener('click', e =>{
        operatorClicked = true
      resultdisplay.innerText += button.dataset.operator
})
})
    
//<-- END OF DISPLAYING OPERATORS -->

// <-- START OF SEPARATING STRINGS -->

const splitStr = (num1, num2, separator) => {
    if(!Number.isNaN(Number(num1)) && !Number.isNaN(Number(num2))){
        return num1 + separator + num2
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

    //<-- OPERATOR FUNCTIONALITY END -->

    //<-- EQUAL BUTTON START HERE -->

    let equalbtn = document.getElementById('equalbtn')

equalbtn.addEventListener('click', e => {
 const concatenatedString = document.querySelector('#displayscreen').innerText
    //console.log(concatenatedString)

try {
    const separator = ' '
    const numsWithOperator = splitStr(concatenatedString, separator)
    
const [num1, num2, operator] = numsWithOperator.split(separator)

const result = mathOp(num1, num2, operator);
resultdisplay.innerText = parseFloat(result);

} catch (error) {
    resultdisplay.innerText = error.message;
}

})

//<-- EQUAL BUTTON END HERE -->








    // let result = mathOp(splitStr(num1, num2, separator))
    // resultdisplay.innerText = result
   



    // let selOperator = operatorbtns.e.target.innerText
    // let result = mathOp(number1, number2, selOperator)
    // resultdisplay.innerText = result


// // <-- BACKSPACE BUTTON START -->

const backspacebtn = document.getElementById('backspacebtn');

// Function to handle backspace functionality
const backspace = () => {
    const currentText = document.querySelector('#displayscreen').innerText;
    if (currentText.length > 0) {
             document.querySelector('#displayscreen').innerText = currentText.slice(0, -1);

    }
};

backspacebtn.addEventListener('click', backspace);

// // <-- BACKSPACE BUTTON END -->







