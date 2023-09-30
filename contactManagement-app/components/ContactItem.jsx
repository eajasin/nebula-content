import React from "react";
import ContactList from "./ContactList";
import ContactListForm from "./ContactListForm";



export default function ContactItem({ id, name, email, phone }) {



  function deleteContact(id) {
    let newContacts = [...contact].filter((contact) => contact.id !== id);
    setContact(newContacts);
  }

  return (
    <>
    <li>
          {contact.id} | {contact.name} | {contact.email} | {contact.phone}{" "}
          <button
            onClick={() => {
              deleteContact(contact.id);
            }}
          >
            Delete Contact
          </button>
        </li>
    </>
  )
}