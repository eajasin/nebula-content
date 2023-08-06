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


let onoffbtn = document.getElementById("onoffbtn")
let img = document.getElementsByClassName('bee')

let isOn = true;


function turnOn() {
    //console.log(greeting)
    isOn = !isOn
    updateCal();
    //startAnimation()
}

function startAnimation() {
    for (item of img) {
        item.classList.add('beeanimation')

    }
    // resultdisplay.innerHTML = '<span id="hi" class="hello">Hello :)</span>'
    // let heading = document.getElementById("hi")
   
// Create a new <span> element
const helloSpan = document.createElement("span");

// Set the text content of the <span>
helloSpan.textContent = "Hello";

// Add the "bounce-text" class to the <span>
helloSpan.classList.add("hello");

// Append the <span> to the "displayscreen" div
// displayscreen.appendChild(helloSpan);
    
    // heading.classList.add('hello')
   
    // resultdisplay.innerText = 
    // }
}

function stopAnimation() {
    for (item of img) {
        item.classList.remove('beeanimation')

    }


}


function updateCal() {

    if (isOn) {
        resultdisplay.innerText = "";
        allbtns.forEach(button => {
            button.disabled = false;

        });

        startAnimation()
        // Call the function to start the animation
    } else {
        // Add the "animate" class to trigger the animation on resultdisplay
        resultdisplay.innerText = "OFF";
        num1 = "";
        num2 = "";
        operatorClicked = false;
        allbtns.forEach(button => {
            button.disabled = true;

        });
        onoffbtn.disabled = false
        stopAnimation()
            ; // Call the function to stop the animation
    }
}


window.addEventListener("load", turnOn)
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
        case "@":
            result = Math.sqrt(num1);
            break;
    } return result
}

//     //<-- OPERATOR FUNCTIONALITY END -->

// // <-- MAKE NEG NUMBER START -->

let negnumbtn = document.getElementById('negnumbtn')

negnumbtn.addEventListener('click', e => {

    resultdisplay.innerText = parseFloat(resultdisplay.innerText) * -1;

})
// // <-- MAKE NEG NUMBER END -->


// // <-- MAKE PERC NUMBER START -->


let percentbtn = document.getElementById("percentbtn")

percentbtn.addEventListener('click', e => {
    resultdisplay.innerText = parseFloat(resultdisplay.innerText) / 100
}

)

// // <-- MAKE PERC NUMBER END -->


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


    if (!isNaN(key) || key === '.') {
        resultdisplay.innerText += key;
    }


    else if (key === '+' || key === '-' || key === '*' || key === '/' || key === '^' || key === '@') {
        operatorClicked = true;
        num1 = resultdisplay.innerText;
        separator = key;
        resultdisplay.innerText = '';
    }


    else if (key === '=' || key === 'Enter') {
        num2 = resultdisplay.innerText;
        result = mathOp(num1, num2, separator);
        resultdisplay.innerText = result;
    }


    else if (key === 'Backspace') {
        backspace();
    }


    else if (key === 'Escape') {
        resultdisplay.innerText = '';
        num1 = null;
        num2 = null;
        operatorClicked = false;
    }

}

document.addEventListener('keydown', handleKeyDown);










