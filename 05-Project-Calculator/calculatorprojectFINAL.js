const resultdisplay = document.getElementById('displayscreen')
let numberbtns = document.querySelectorAll('.numberbtns')
let operatorbtns = document.querySelectorAll('.operatorbtns')
let allbtns = document.querySelectorAll("button")
let num1 = '';
let num2 = '';
let separator = '';
let operatorClicked = false;
let result = null;

//<-- DARK MODE START -->
const darkModebtn = document.getElementById("displayscreen")

darkModebtn.addEventListener('click', () => {
    // Toggle the "dark-mode" class on the <body> element
    document.body.classList.toggle('dark-mode');
});
//<-- DARK MODE END -->


// // <-- ON/OFF BUTTON START -->


//make bees static upon off
let onoffbtn = document.getElementById("onoffbtn")
let images = document.querySelectorAll('.bee img')

let isOn = false;


function turnOn() {
    isOn = !isOn
    updateCal();

}

function updateCal() {
    if (isOn) {
        resultdisplay.innerText = "On";
        allbtns.forEach(button => {
            button.disabled = false;
        });
        startAnimation(); // Call the function to start the animation
    } else {
        resultdisplay.classList.add("animate"); // Add the "animate" class to trigger the animation on resultdisplay
        resultdisplay.innerText = "OFF";
        num1 = "";
        num2 = "";
        operatorClicked = false;
        allbtns.forEach(button => {
            button.disabled = true;
        });
        stopAnimation(); // Call the function to stop the animation
    }
}

function startAnimation() {
    images.forEach((img, index) => {
        img.classList.add('animate');
    });
}

function stopAnimation() {
    images.forEach((img, index) => {
        img.classList.remove('animate');
    });
}

onoffbtn.addEventListener('click', turnOn)

// // <-- ON/OFF BUTTON END -->




// <-- START OF DISPLAYING CONCATENATED  NUMBERS -->


numberbtns.forEach(button => {
    button.addEventListener('click', e => {
        resultdisplay.innerText += button.dataset.number


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
    resultdisplay.innerText = -num1;

    if (num2) {
        num2 = parseFloat(num2) * -1
        resultdisplay.innerText = result
    }

})
// // <-- MAKE NEG NUMBER END -->




// // <-- MAKE PERC NUMBER START -->

let percentbtn = document.getElementById("percentbtn")

percentbtn.addEventListener('click', e => {
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


function handleKeyDown(event) {
    const key = event.key;
  
    // Check if the pressed key is a number (0-9) or the period (.)
    if (!isNaN(key) || key === '.') {
      resultdisplay.innerText += key;
    }
  
    // Check if the pressed key is an operator (+, -, *, /, ^)
    else if (key === '+' || key === '-' || key === '*' || key === '/' || key === '^') {
      operatorClicked = true;
      num1 = resultdisplay.innerText;
      separator = key;
      resultdisplay.innerText = '';
    }
  
    // Check if the pressed key is the equal sign (=) or Enter key
    else if (key === '=' || key === 'Enter') {
      num2 = resultdisplay.innerText;
      result = mathOp(num1, num2, separator);
      resultdisplay.innerText = result;
    }
  
    // Check if the pressed key is the Backspace key
    else if (key === 'Backspace') {
      backspace();
    }
  
    // Check if the pressed key is the Escape key (to clear the calculator)
    else if (key === 'Escape') {
      resultdisplay.innerText = '';
      num1 = null;
      num2 = null;
      operatorClicked = false;
    }
  
    // ... add more conditions to handle other keys if needed ...
  }
  
  // Add the 'keydown' event listener to the document
  document.addEventListener('keydown', handleKeyDown);

  








