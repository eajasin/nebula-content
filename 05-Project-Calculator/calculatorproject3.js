const resultdisplay = document.getElementById('displayscreen')
let numberbtns = document.querySelectorAll('.numberbtns')
let operatorbtns = document.querySelectorAll('.operatorbtns')
let num1 = null;
let num2 = null;
let separator = null;
let operatorClicked = false;
let result = null

// <-- START OF DISPLAYING CONCATENATED  NUMBERS -->


numberbtns.forEach(button =>{
button.addEventListener('click', e => {
   if(!operatorClicked){
    num1 = num1 ? num1 + button.dataset.number : button.dataset.number
   
   } else {
    num2 = num2 ? parseFloat(num2 + button.dataset.number) : parseFloat(button.dataset.number)
  
   }
    document.querySelector('#displayscreen').innerText += button.dataset.number
  
   if(num1 && separator){
    resultdisplay.innerText = num2
   }

// if(result){
//     num1 = result;
//     result = null;
//     operatorClicked = false
//     separator = null;
//     num2 = null
// }
console.log(num1, num2, separator, result)

})
})

//<-- END OF DISPLAYING CONCATENATED NUMBERS -->


//<-- START OF DISPLAYING OPERATORS -->

operatorbtns.forEach(button=>{
    button.addEventListener('click', e =>{
        operatorClicked = true
      resultdisplay.innerText += button.dataset.operator
    separator = button.dataset.operator  
    
})
})
    
// //<-- END OF DISPLAYING OPERATORS -->


//<-- CLEAR BUTTON START -->

const clearbtn = document.getElementById('clearbtn')

clearbtn.addEventListener('click', e => {
resultdisplay.innerText = ''
num1 = null
num2 = null
operatorClicked = false;

})
// <-- CLEAR BUTTON END -->




// // <-- MAKE NEG NUMBER START -->

// let negnumbtn = document.getElementById('negnumbtn')

// negnumbtn.addEventListener('click', e => {
//     let negatedNum1 = -parseFloat(num1);
//     num1 = negatedNum1

//     // let negatedNum2 = -parseFloat(num2);
//     // num2 = negatedNum2

//     resultdisplay.innerText = negatedNum1;
//     // resultdisplay.innerText = negatedNum2
// })

// // <-- MAKE NEG NUMBER END -->



// //<-- OPERATOR FUNCTIONALITY START -->


const mathOp = (num1, num2, operation) => {

    let = result;

    switch(operation) {
    case "+":
        result = parseFloat(num1) + parseFloat(num2);
        break;
    case "-":
        result = parseFloat(num1) - parseFloat(num2);
        break;
    case "*":
        result = parseFloat(num1) * parseFloat(num2);
        break;
    case "÷": 
        result = parseFloat(num1) / parseFloat(num2);
        break;
    case "√":
        result =  Math.sqrt(num1)
    case "%":
    result =  num1 * .1
                             
} return result
}

//     //<-- OPERATOR FUNCTIONALITY END -->

//     //<-- EQUAL BUTTON START HERE -->

let equalbtn = document.getElementById('equalbtn')


equalbtn.addEventListener('click', e => {
result = mathOp(num1, num2, separator);

try {
    
resultdisplay.innerText = parseFloat(result);

 } catch (error) {
     resultdisplay.innerText = error.message;
 }

})

// //<-- EQUAL BUTTON END HERE --> 


  
let powerbtn = document.getElementById('powerbtn')

powerbtn.addEventListener('click', e => {
 let result = parseFloat(num1) ** parseFloat(num2)
console.log(result)
 resultdisplay.innerText = result

})

//     // let result = mathOp(splitStr(num1, num2, separator))
//     // resultdisplay.innerText = result
   



//     // let selOperator = operatorbtns.e.target.innerText
//     // let result = mathOp(number1, number2, selOperator)
//     // resultdisplay.innerText = result


// // // <-- BACKSPACE BUTTON START -->

const backspacebtn = document.getElementById('backspacebtn');

// Function to handle backspace functionality
const backspace = () => {
    const currentText = document.querySelector('#displayscreen').innerText;
    if (currentText.length > 0) {
             document.querySelector('#displayscreen').innerText = currentText.slice(0, -1);

    }
};

backspacebtn.addEventListener('click', backspace);

// // // <-- BACKSPACE BUTTON END -->


// // <-- ON/OFF BUTTON START -->



// // <-- ON/OFF BUTTON END -->






