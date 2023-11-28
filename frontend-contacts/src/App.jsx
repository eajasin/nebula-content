import { useState, useEffect } from "react";
import ContactCard from "./components/ContactCard";
import CreateContact from "./components/CreateContact";
function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    getContacts();
  }, []);

  function addContact(newContact) {
    fetch(`http://localhost:3030/contacts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newContact),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        newContact.id = res[0].id;
        setContacts([...contacts, newContact]);
      });
  }

  function getContacts() {
    fetch("http://localhost:3030/contacts")
      .then((res) => res.json())
      .then((res) => setContacts([...res]));
  }

  function deleteContact(id) {
    // Send fetch request method DELETE to delete contact in db
    fetch(`http://localhost:3030/contact/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    // Delete contact from local memory/storage (client-side)
    let newContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(newContacts);
  }

  function updateContact(id, updatedContact) {
    let updatedContacts = contacts.map((contact) => {
      if (contact.id === id) {
        let newContact = {
          id: contact.id,
          name: updatedContact.name,
          email_address: updatedContact.email_address,
          age: updatedContact.age,
        };
        return newContact;
      }
      return contact;
    });
    fetch(`http://localhost:3030/contacts`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedContact),
    })
      .then((res) => res.json())
      .then(() => setContacts(updatedContacts));
  }

  return (
    <div className="App">
      <header className="App-header">
        <CreateContact addContact={addContact} />
        {contacts.map((contact) => {
          return (
            <ContactCard
              contact={contact}
              key={contact.id}
              deleteContact={deleteContact}
              updateContact={updateContact}
            />
          );
        })}
      </header>
    </div>
  );
}

export default App;
