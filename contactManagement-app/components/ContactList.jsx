
import React from "react";
import ContactItem from "./ContactItem";


export default function ContactList({id}) {

  
  
    // const [editingId, setEditingId] = useState(null);
    // const [editedName, setEditedName] = useState("");
    // const [editedEmail, setEditedEmail] = useState("");
    // const [editedPhone, setEditedPhone] = useState("");
  

   
    // function editContact(id, name, email, phone) {}
  
    return (
    <>
     <ul>
    {contact.map((contact) => {
    <ContactItem /> // key={contact.id} name = {contact.name} email={contact.email} phone={contact.phone}/>
      
    })}
  </ul>
    </>
    )
  }