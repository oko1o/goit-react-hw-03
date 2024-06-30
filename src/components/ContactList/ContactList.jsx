import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

export default function ContactList({ contactData, onDelete }) {
  return (
    <ul className={css.contactList}>
      {contactData.map((contact) => (
        <li key={contact.id} className={css.contactItem}>
          <Contact contactData={contact} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
}
