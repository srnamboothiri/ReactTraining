import React, { useState } from 'react';
import ContactList from "./contactList.js";
import data from "./contacts.js";

function App() {
  const stateArray = useState(data);
  const stateVariable = stateArray[0];
  const stateFunction = stateArray[1];
  const deleteContact = (id) => {
    const newContacts = stateVariable.filter((contact) => contact.id !== id);
    stateFunction(newContacts);
  };
  return <section id="contact-list">
    <h1>Contacts</h1>
    <ContactList contacts={stateVariable} deleteContact={deleteContact}></ContactList>
  </section>
}

export default App;
