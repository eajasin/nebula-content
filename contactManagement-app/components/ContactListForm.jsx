import { useState } from "react"
import Contact from "./ContactItem"

export default function ContactListForm(){

    const [id, setId] = useState('')
    // const [name, setName] = useState('')
    // const [email, setEmail] = useState('')
    // const [phone, setPhone] = useState('')


    function createContact(text){
        let id = Math.floor(Math.random() * 9000)//need key to differentiate between each addition, gnerte keys randomly
        let contact = {id: id, name:nameText, email:emailText, phone: phoneNumber}
    }
       
    const handleSubmit = e => {
        e.preventDefault()

    }

       // const handleNameChange = e => {
    //     setName(e.target.value)
    // }

    // const handleEmailChange = e => {
    //     setEmail(e.target.value)
    // }

    // const handlePhoneChange = e => {
    //     setPhone(e.target.value)
    // }

    return (
        <form className="contactListForm" onSubmit={handleSubmit}>
        <input className="id" placeholder ="Id" type="text" value={id} onChange={(e)=> e.target.value}></input>
        {/* <input className="name" placeholder ="Name" type="text" value={name} onChange={handleNameChange}></input>
        <input className="email" placeholder ="Email" type="text" value={email} onChange={handleEmailChange}></input>
        <input className="phone" placeholder ="Phone" type="number" value={phone}onChange={handlePhoneChange} ></input> */}
        <button type="submit">Add New Contact </button>
        </form>
    )
}






