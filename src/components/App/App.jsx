import { useEffect, useState } from 'react';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import contactData from '../contactData.json';
import css from './App.module.css';

function App() {
  const getInitialContacts = () => {
    const savedContacts = localStorage.getItem('contactList');

    if (savedContacts && JSON.parse(savedContacts).length > 0) {
      return JSON.parse(savedContacts);
    } else {
      return contactData;
    }
  };

  const [contacts, setContacts] = useState(getInitialContacts);
  const [search, setSearch] = useState('');

  const visibleContacts = contacts.filter((contact) => {
    return contact.name.toLowerCase().includes(search.toLowerCase());
  });

  const addContact = (newContact) => {
    setContacts(() => {
      return [...contacts, newContact];
    });
  };

  const deleteContact = (contactId) => {
    setContacts((contacts) => {
      return contacts.filter((contact) => contact.id !== contactId);
    });
  };

  useEffect(() => {
    localStorage.setItem('contactList', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className={css.app}>
      <h1 className={css.header}>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={search} onFilter={setSearch} />
      <ContactList contactData={visibleContacts} onDelete={deleteContact} />
    </div>
  );
}

export default App;
