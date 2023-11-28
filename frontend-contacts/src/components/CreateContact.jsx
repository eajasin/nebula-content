import React, { useState } from "react";

export default function CreateContact({ addContact }) {
  const [hidden, setHidden] = useState(true);
  const [newContact, setNewContact] = useState({
    name: "",
    email_address: "",
    age: "",
  });

  return (
    <div>
      CreateContact
      {hidden ? (
        <button onClick={() => setHidden(!hidden)}>Add New Item</button>
      ) : (
        <div className="contactCard">
          <h3>
            Name:&nbsp;
            <input
              onChange={(e) =>
                setNewContact({ ...newContact, name: e.target.value })
              }
              value={newContact.name}
              placeholder="name"
            />
          </h3>
          <br />
          <p>
            Email:&nbsp;
            <input
              onChange={(e) =>
                setNewContact({ ...newContact, email_address: e.target.value })
              }
              value={newContact.email_address}
              placeholder="email"
            />
          </p>
          <br />
          <p>
            Age:&nbsp;
            <input
              onChange={(e) =>
                setNewContact({ ...newContact, age: e.target.value })
              }
              value={newContact.age}
              placeholder="age"
            />
          </p>
          <br />
          <button
            onClick={() => {
              addContact(newContact);
              setHidden(!hidden);
            }}
          >
            Submit
          </button>
        </div>
      )}
    </div>
  );
}
