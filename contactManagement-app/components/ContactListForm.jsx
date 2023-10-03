import { useState } from "react"
import ContactList from "./ContactList";
import ContactItem from "./ContactItem";

export default function ContactListForm({addContact}){

   
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    function addContactFunc(){
        let id = Math.floor(Math.random() * 999999999)
        let newContact = {
            id,
            name,
            email,
            phone
        }
        addContact(newContact)
    }


    return(
        <div className="nameField">
        <input
          onChange={(e) => {
            setName(e.target.value);
          }}
          type="text"
          value={name}
          placeholder="Name"
        />
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="text"
          value={email}
          placeholder="Email"
        />
        <input
          onChange={(e) => {
            setPhone(e.target.value);
          }}
          type="text"
          value={phone}
          placeholder="Phone"
        />
        <button
          onClick={() => {
           addContactFunc()
          }}
        >
          Add Contact
        </button>
        
      
      </div>
    );
    
}