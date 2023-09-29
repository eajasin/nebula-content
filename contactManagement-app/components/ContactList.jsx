import React from "react"
import { useState } from "react"


export default ContactList(){
    const[contact, setContact] = useState([])

    function createContact(nameText, emailText, phoneNumber){
        let id = Math.floor(Math.random() * 9000)//need key to differentiate between each addition, gnerte keys randomly
        let contact = {id: id, name: nameText, email:emailText, number:phoneNumber}  
        setContact([...contacts, contact]) //as update todos, also adding previous todos (everything that was already in it)
    }

    return (
        <>
        <CreateContact />
        </>
    )
}
