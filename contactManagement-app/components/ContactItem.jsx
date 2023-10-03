import React from "react";
import { useState } from "react";

export default function ContactItem({ contact, deleteContact, editContact }) { //deletebtn, edibtn

  const [editing, setEditing] = useState(false)

  const [nameText, setNameText] = useState(contact.name)
  const [emailText, setEmailText] = useState(contact.email)
  const [phoneText, setPhoneText] = useState(contact.phone)


  function handleUpdate() {
    let newContact = {
      id: contact.id, name: nameText, email: emailText, phone: phoneText
    }
  editContact(newContact, contact.id)
  setEditing(!editing)
}

return (
  <>

    <div>
      {editing ? (
        <div>
          <input
            type="text"
            value={nameText}
            onChange={(e) => {
              setNameText(e.target.value)
            }}
          />
          <input
            type="text"
            value={emailText}
            onChange={(e) => {
              setEmailText(e.target.value)
            }}
          />
          <input
            type="text"
            value={phoneText}
            onChange={(e) => {
              setPhoneText(e.target.value)
            }}
          />
          <button onClick={() => { handleUpdate() }}>Update</button>

        </div>
      ) : (
        <div>{contact.id} | {contact.name} | {contact.email} | {contact.phone}  <button onClick={() => { setEditing(!editing) }} >Edit</button><button onClick={() => { deleteContact(contact.id) }} >Delete</button></div>
      )

      }
    </div>
  </>
)


}

