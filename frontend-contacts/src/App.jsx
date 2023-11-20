import './App.css';
import React, { useState, useEffect } from 'react';

function App() {

  const [contacts, setContacts] = useState([])
  const [update, setUpdate] = useState({})

  useEffect(() => {
    console.log('using effect')

    getData()
  }, [])

  function getData() {
    console.log('getting data')
    fetch('http://localhost:3030/contacts')
      .then(res => res.json())
      .then(res => setContacts([...res]))
  }

  function deleteContact(id) {
    console.log(id);
    fetch(`http://localhost:3030/contact/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res, err) => {
      if (res.status == 200) {
        console.log(res.status, "OK");
        setContacts((contacts) => {
          let newArr = contacts.filter((contact) => contact.id != id);
          return [...newArr];
        });
      } else {
        console.log(err, "err");
      }
    });
  }

  const [newContact, setNewContact] = useState({ name: '', email_address: '', age: '' });
  const [hidden, setHidden] = useState(true)

  

  function addItem() {
    console.log('Adding Item');

    fetch(`http://localhost:3030/contacts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newContact),
    })
      .then(res => res.json())
      .then(res => {
        getData()

        console.log(res)
      }

      )
    setHidden(!hidden)
  }

  function updateContact(id){
    const newUpdate = {...update};

    for(let contact in contacts){
      newUpdate[contacts[contact].id] = false;
    }

    id !== undefined ? setUpdate({...newUpdate, [id]: !update[id]}) : setUpdate(newUpdate);
}

const [updatingContact, setUpdatingContact] = useState()

function updateContactInfo(contact, e){
  contact[e.target.getAttribute('field')] = e.target.value;
  for(let i in contacts){
    if(contact.id === contacts[i].id){
      let updatedContacts = [...contacts];
      updatedContacts[i] = contact;
      setUpdatingContact(contact)
      setContacts([...updatedContacts])
    }
  }
}

  return (
    <div className="App">
      {hidden ?
        <button onClick={() => setHidden(!hidden)}>Add New Item</button> :
        <div className='contactCard' >
          <h3>Name:&nbsp;<input onChange={(e) => setNewContact({ ...newContact, name: e.target.value })} value={newContact.name} placeholder='name' /></h3>
          <br />
          <p>Email:&nbsp;<input onChange={(e) => setNewContact({ ...newContact, email_address: e.target.value })} value={newContact.email_address} placeholder='email' /></p>
          <br />
          <p>Age:&nbsp;<input onChange={(e) => setNewContact({ ...newContact, age: e.target.value })} value={newContact.age} placeholder='age' /></p>
          <br />
          <button onClick={() => addItem()}>Submit</button>
        </div>}
      <header className="App-header">
      {contacts.map((contact) => { 
    return (!update[contact.id]? // we will have to define the update hook
    <div className='contactCard' key={contact.id}>
        <h3>{contact.name}</h3>
        <p>{contact.email_address}</p> 
        <p>{contact.age}</p>
        <button onClick={() => updateContact(contact.id)}>Update</button>
        <button onClick={() => deleteContact(contact.id)}>Delete</button>
    </div> 
    :
    <div className='contactCard' key={contact.id}>
       
        <input defaultValue={contact.name} field='name' placeholder='name' onChange={(e) => updateContactInfo(contact, e)}/>  
        <input defaultValue={contact.email_address} field='email_address' placeholder='email' onChange={(e) => updateContactInfo(contact, e)}/>
        <input defaultValue={contact.age} field='age' placeholder='age' onChange={(e) => updateContactInfo(contact, e)}/>
        <button onClick={() => updateContact(contact.id)}>Cancel</button>
        
        <button onClick={() => completeUpdate(contact)}>Update</button>
    </div>
          )
        })}
      </header>
    </div>
  );
}


export default App;