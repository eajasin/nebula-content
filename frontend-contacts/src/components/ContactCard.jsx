import React, { useState } from "react";

export default function ContactCard({ contact, deleteContact, updateContact }) {
  const [editing, setEditing] = useState(false);
  const [updatedName, setUpdatedName] = useState(contact.name);
  const [updatedEmail, setUpdatedEmail] = useState(contact.email_address);
  const [updatedAge, setUpdatedAge] = useState(contact.age);

  return (
    <div className="contactCard">
      <h3>{contact.name}</h3>
      <p>{contact.email_address}</p>
      <p>{contact.age}</p>
      <p
        style={{ cursor: "pointer" }}
        onClick={() => {
          deleteContact(contact.id);
        }}
      >
        🗑️
      </p>
      <button onClick={() => setEditing(!editing)}>Edit</button>
      {editing ? (
        <div className="contactCard" key={contact.id}>
          <p>Name: </p>
          <input
            value={updatedName}
            field="name"
            placeholder="name"
            onChange={(e) => {
              setUpdatedName(e.target.value);
            }}
          />{" "}
          <br />
          Email:
          <br />
          <input
            value={updatedEmail}
            field="email_address"
            placeholder="email"
            onChange={(e) => {
              setUpdatedEmail(e.target.value);
            }}
          />
          <br />
          Age:
          <br />
          <input
            value={updatedAge}
            field="age"
            placeholder="age"
            onChange={(e) => {
              setUpdatedAge(e.target.value);
            }}
          />
          <button
            onClick={() => {
              setEditing(!editing);
            }}
          >
            Cancel
          </button>
          <button
            onClick={() => {
              updateContact(contact.id, {
                id: contact.id,
                name: updatedName,
                email_address: updatedEmail,
                age: updatedAge,
              });
              setEditing(!editing);
            }}
          >
            Update
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
