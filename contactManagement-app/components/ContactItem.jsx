import React from "react";
import { useState } from "react";





export default function ContactItem({ contact, deleteContact, editContact }) { //deletebtn, edibtn

  const [editing, setEditing] = useState(false)

  const [nameText, setNameText] = useState("")
  const [emailText, setEmailText] = useState("")
  const [phoneText, setPhoneText] = useState("")

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
              type="number"
              value={phoneText}
              onChange={(e) => {
                setPhoneText(e.target.value)
              }}
            />
           
            
          </div>
        ) : (
          <div>{contact.id} | {contact.name} | {contact.email} | {contact.phone}  <button onClick={() => { setEditing(!editing)}} >Edit</button><button onClick={() => { deleteContact(contact.id) }} >Delete</button> </div>
        )

    }
      </div>
    </>
  )


}

