
import { useState } from "react";
import ContactItem from "./ContactItem";
import ContactListForm from "./ContactListForm";

export default function ContactList() {

    const [contacts, setContacts] = useState([]);
    
    


    function addContact(newContact) {

        setContacts([...contacts, newContact])

        console.log("add contact")

    }

    function deleteContact(id) {
        let newContacts = [...contacts].filter((contact) => contact.id !== id);
        setContacts(newContacts);
    }


    function editContact(revisingContact, revisingContactId) {

        const updatedContact = contacts.map((contact) => {
            if (contact.id === revisingContactId) {
                return revisingContact
            }
            return contact
        })
        // const updatedContact 

        setContacts(updatedContact)

        console.log('edit')
    }



    return (
        <>
            <ContactListForm addContact={addContact} />
            <ul>
                {contacts.map((contact) => {

                    return (
                        <ContactItem contact={contact} editContact={editContact} deleteContact={deleteContact} />
                    )
                })}
            </ul>

        </>
    )
}