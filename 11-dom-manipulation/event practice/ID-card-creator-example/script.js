const form = document.querySelector('form') //accesses first occurrence of form
const newImage = document.getElementById('avatarimage') //access avatar image


//create function that display each element of the form
const createNewID = (fname,lname, idnumber, address, city, state, zipcode, funfact) => {
    
    //this is for accessing the output box inside idcontainer
    const outputcontainer = document.body.querySelector(".outputcontainer")
    //created new value that access values of form and 'sends' them to the outputcontainer
    const IDOutputs = document.createElement('div')
    //appended the 'child' (outputcontainer) 
    outputcontainer.appendChild(IDOutputs)

      
    //this is for displaying the values inside the outputcontainer; used template literal for desired spacing
    //innertext method removes displaythe actual text inside the <div> tag
    IDOutputs.innerText =   `ID#: ${idnumber}

                            ${lname}, ${fname}
                            
                            ${address}
                            
                            ${city}, ${state} ${zipcode}
                            
                            ${funfact}`
    
}

//this function creates the event (createID fucntion) upon clicking 'submit'
form.addEventListener("submit", e => {
    e.preventDefault()  //stops auto-submissions

    //value is the input typed into the form fields
    let fname = e.target.fname.value 
    let lname = e.target.lname.value
    let idnumber = e.target.idnumber.value
    let address = e.target.address.value
    let city = e.target.city.value
    let state = e.target.state.value
    let zipcode = e.target.zipcode.value
    let funfact = e.target.funfact.value
    //changes the source of the photo
    newImage.src= "WWImage.png"
    createNewID(fname, lname, idnumber, address, city, state, zipcode, funfact)


}) 



    // function displayfields(){
    // const inputcontainer = document.querySelector('.outputcontainer')
    // const output = document.createElement("P")
    // .inputcontainer.appendChild(output)

    













// form.addEventListener('submit', (displayfields) => {
//     displayfields.preventDefault()
//     let fname = 
//     console.log(fname)





// })








// const fname = document.getElementById('fname').value
// // const lname = document.getElementById('lname').value
// // const submitbtn = document.getElementById('submit')
// const showoutput = document.querySelector('.output')

// const displayfields= (inputvalues) => {
//     showoutput.innerText = inputvalues

    
// } 

// // submitbtn.addEventListener('submit', (e) => {
// //     e.preventDefault();
// //     displayfields(fname.value);
// //     displayfields(lname.value);
    
// // })

// // // output.innerHTML = fname.value
// // //     output.innerHTML = lname.value
// // //do form values to do them all at once

// form.addEventListener('submit', (displayfields) => {
//     displayfields.preventDefault() //prevents from autosubmitting
    
    

//     let fname = document.getElementById('fname').value
//     console.log(fname)
//     let lname = document.getElementById('lname').value
//     console.log(lname)
//     // let idnumber = document.getElementById('idnumber').value
//     // let address = document.getElementById('address').value
//     // let city = document.getElementById('city').value
//     // let state = document.getElementById('state').value
//     // let zipcode = document.getElementById('zipcode').value
//     // let funfact = document.getElementById('funfact').value
    
//         // idnumber, address, city, state, zipcode, funfact)


// //SHOULD ALSO BE ABLE TO CONCATENATE FIELDS THAT GO TOGETHER {E.G., NAME}; FIRSTNAME = "" LASTNAME

// })
 



//use innerHTML - property of p tag (output) and looks at its contents












/*
-GOAL is to have empty id, and when enter the info,
well-formatted info would show up 
-need to make all fields of form required
-need to be able to output all fields at once

*/