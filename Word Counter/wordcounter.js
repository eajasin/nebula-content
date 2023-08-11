//perform counts as entering them into textbox
//INPUT: letters, phrase; OUTPUT is number of words, and selected counter
//get error when input numbers
//should be able to recognized any case of letters

let vowelsbtn = document.getElementById('vowels')
let consonantsbtn = document.getElementById('consonants')
let punctuationbtn = document.getElementById('punctuation')
let wordcounterbtn = document.getElementById('wordcounter')
const tempDisplay = document.getElementById('tempDisplay')
const textbox = document.getElementById('textbox')


textbox.addEventListener('input', () => {
  const text = textbox.value;

  let wordCount = 0;
  let indexInWord = false;
  
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    
    if (char === ' ' || char === '\n' || char === '\t') {
      indexInWord = false;
    } else if (!indexInWord) {
      wordCount++;
      indexInWord = true;
    }
  }

  tempDisplay.innerText = `Word Count is ${wordCount}`;
});







vowelsbtn.addEventListener('click', e => {
  const text = textbox.value

  let vowelCount = 0
  let vowels = "aeiouAEIOU"

  for (let i = 0; i < text.length; i++) {
    if (vowels.includes(text[i])) {
      vowelCount++;
    }
  }
  
  // if(textbox.value = " "){
  //   return tempDisplay.innerText = "Please enter text."
  // }
  ////have way of detecting if display is empty and display appropriate text.


  if (vowelCount >= 1) {
    tempDisplay.innerText = `Vowel count is ${vowelCount}.`
      
  } else if 
    (tempDisplay.innerText = "There are no vowels."); 
  //clicking vowels button will transition to vowel counting mode only
})

consonantsbtn.addEventListener('click', e => {
  const text = textbox.value

  let consonantsCount = 0
  let consonants = "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ"

  for (let i = 0; i < text.length; i++) {
    if (consonants.includes(text[i])) {
      consonantsCount++
    }
  }

  if (consonantsCount >= 1) {
    tempDisplay.innerText = `Consonant count is ${consonantsCount}.`
      
  } else if 
    (tempDisplay.innerText = "There are no consonants."); 

})

punctuationbtn.addEventListener('click', e => {
  const text = textbox.value

  let punctuationsCount = 0
  let punctuation = '.,?!:;"'

  for (let i = 0; i < text.length; i++) {
    if (punctuation.includes(text[i])) {
      punctuationsCount++
    }
  }

  if (punctuationsCount >= 1) {
    tempDisplay.innerText = `Punctuation count is ${punctuationsCount}.`
      
  } else if 
    (tempDisplay.innerText = "There are no punctuations."); 

})






