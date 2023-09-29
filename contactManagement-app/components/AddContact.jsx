import { useState } from "react"

export default function AddContact(addId){

    const [text, setText] = useState("") 

    return (
        <div>
            <input value={text} onChange={e => {setText(e.target.value)}}/>
        <button onClick={() => {CreateContact(text); setText("")}}>Add New Contact </button>
        
        </div>
    )
}

function addContact(contactName) {
    let newContacts = [
      ...contacts,
      { id: Math.floor(Math.random() * 99), name: contactName }
      // Math.floor(Math.random() * 99) <-- gets random num from 1-99
    ];
    setContacts(newContacts);
    console.log(contacts);
  }