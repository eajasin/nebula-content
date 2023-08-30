//8/28/23

//Rot13 (5)
//input string, output string ciphered with Rot13
//a: 97
//z: 122
//A: 65
//Z: 90
//NOT DONE
let string = "school"

function rot13(message){
    let splitMessage = message.split("") //split into array of letters

    let rot13 = splitMessage.map(letter => {
        if (letter.match(/[a-zA-Z]/)) {  //refer only to letters (low/upp)

    console.log(rot13)
        let letterCharCode = letter.charCodeAt(0) //create variable to represent each charcode

        if (letterCharCode >= 65 && letterCharCode <= 90) { //handle lower case first
        return String.fromCharCode((letterCharCode - 65 + 13) % 26 + 65) //convert code back into a character
        } 
        if (letterCharCode >= 97 && letterCharCode <= 122){ //then upper case
        return String.fromCharCode((letterCharCode - 97 + 13) % 26 + 97)
        }
    }
    
})
return rot13.join("")
}


console.log(rot13(string))
    



