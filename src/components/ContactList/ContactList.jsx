import css from './ContactList.module.css';
import Contact from '../Contact/Contact';
import { useSelector } from 'react-redux';
import filterContactsModule from '../../redux/contacts/contactsSlice';

const { selectFilteredContacts } = filterContactsModule;

export default function ContactList() {
    const filteredContacts = useSelector(selectFilteredContacts);
  
    return (
        <ul className={css.contact__list}>
            {Array.isArray(filteredContacts)&& filteredContacts.map((ar) => (
                <li className={css.contact__item} key={ar.id}>
                    <Contact
                        name={ar.name}
                        number={ar.number}
                        id={ar.id}
                    />
                </li>
            ))}
        </ul>
    );
}
