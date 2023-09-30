import { useState } from "react"
import ContactList from "./ContactList";

export default function ContactListForm(){

    const [contact, setContact] = useState([]);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    let newContacts = [
        ...contact,
        {
          id: Math.floor(Math.random() * 999999999),
          name: name,
          email: email,
          phone: phone
        }
      ];
    
      setContact(newContacts);

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
            setName("");
            setEmail("");
            setPhone("")
          }}
        >
          Add Contact
        </button>
        
      
      </div>
    );
    
}