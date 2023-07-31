const resultdisplay = document.getElementById('displayscreen')
let numberbtns = document.querySelectorAll('.numberbtns')
let operatorbtns = document.querySelectorAll('.operatorbtns')
let num1 = '';
let num2 = '';
let separator = '';
let operatorClicked = false;
let result = null;


// // <-- ON/OFF BUTTON START -->

let onoffbtn = document.getElementById("onoffbtn")

let isOn = false;


function turnOn() {
    isOn = !isOn
    updateCal();

}

function updateCal() {
    if (isOn) {
        resultdisplay.innerText = ""
        

    } else {

        resultdisplay.innerText = ""
        num1 = ""
        num2 = ""
        operatorClicked = false;
       
        numberbtns.forEach(button => {
            button.addEventListener('click', e => {
                document.querySelectorAll('.numberbtns').disabled = true
            })
        })
    }
}

onoffbtn.addEventListener('click', turnOn)




// // <-- ON/OFF BUTTON END -->




// <-- START OF DISPLAYING CONCATENATED  NUMBERS -->


numberbtns.forEach(button => {
    button.addEventListener('click', e => {
        resultdisplay.innerText += button.dataset.number

        //    resultdisplay.innerText = ""

        //     if(!operatorClicked){
        //     num1 += button.dataset.number
        //     resultdisplay.innerText = num1

        //    } else {

        //     num2 += button.dataset.number
        //     resultdisplay.innerText = num2
        //    }
        //document.querySelector('#displayscreen').innerText += button.dataset.number

        //    if(num1 && separator){
        //     resultdisplay.innerText = num2
        //    }

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

operatorbtns.forEach(button => {
    button.addEventListener('click', e => {
        operatorClicked = true
        num1 = resultdisplay.innerText

        separator = button.dataset.operator
        resultdisplay.innerText = ''
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

let negnumbtn = document.getElementById('negnumbtn')

negnumbtn.addEventListener('click', e => {
    //let negatedNum1 = parseFloat(num1)*-1;
    num1 = parseFloat(num1) * -1
    resultdisplay.innerText = num1;

    if (num2) {
        num2 = parseFloat(num2) * -1
        resultdisplay.innerText = result
    }

    // let negatedNum2 = parseFloat(num2)*-1;
    // num2 = negatedNum2

    // resultdisplay.innerText = negatedNum2



})
// // <-- MAKE NEG NUMBER END -->

// // <-- MAKE PERC NUMBER START -->

let percbtn = document.getElementById("percbtn")

percbtn.addEventListener('click', e => {
    if (num1) {
        num1 = parseFloat(num1) / 100
        resultdisplay.innerText = num1
    }

})

// // <-- MAKE PERC NUMBER END -->



// //<-- OPERATOR FUNCTIONALITY START -->


const mathOp = (num1, num2, operation) => {

    let = result;

    switch (operation) {
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
            result = Math.sqrt(num1);
            break;




    } return result
}

//     //<-- OPERATOR FUNCTIONALITY END -->

//     //<-- EQUAL BUTTON START HERE -->



equalbtn.addEventListener('click', e => {
    num2 = resultdisplay.innerText
    result = mathOp(num1, num2, separator);
    resultdisplay.innerText = result



    // try {

    // resultdisplay.innerText = parseFloat(result);

    //   } catch (error) {
    //       resultdisplay.innerText = error.message;
    //   }

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









