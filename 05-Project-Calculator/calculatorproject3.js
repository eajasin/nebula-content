const resultdisplay = document.getElementById('displayscreen')
let numberbtns = document.querySelectorAll('.numberbtns')
let operatorbtns = document.querySelectorAll('.operatorbtns')
let num1 = null;
let num2 = null;
let separator = null;
let operatorClicked = false;
let result = null
resultdisplay.innerText = '0.00'

// <-- START OF DISPLAYING CONCATENATED  NUMBERS -->


numberbtns.forEach(button =>{
button.addEventListener('click', e => {
   resultdisplay.innerText = ""
   
   
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
resultdisplay.innerText = '0.00'
num1 = null
num2 = null
operatorClicked = false;

})
// <-- CLEAR BUTTON END -->




// // <-- MAKE NEG NUMBER START -->

let negnumbtn = document.getElementById('negnumbtn')

negnumbtn.addEventListener('click', e => {
    let negatedNum1 = parseFloat(num1)*-1;
    num1 = negatedNum1
    
    
    let negatedNum2 = parseFloat(num2)*-1;
    num2 = negatedNum2

    resultdisplay.innerText = negatedNum2
    resultdisplay.innerText = negatedNum1;

   
})
// // <-- MAKE NEG NUMBER END -->

// // <-- MAKE PERC NUMBER START -->

let percbtn = document.getElementById("percbtn")

percbtn.addEventListener('click', e => {
    let percNum1 = parseFloat(num1)*.1;
    num1 = percNum1

    let percNum2 = parseFloat(num2)*.1;
    
    num2 = percNum2

    resultdisplay.innerText = percNum1
    resultdisplay.innerText = percNum2

})

// // <-- MAKE PERC NUMBER END -->



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
    case "^":
        result = parseFloat(num1) ** parseFloat(num2);
        break;
    case "√":
        result =  Math.sqrt(num1)
   
                             
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






