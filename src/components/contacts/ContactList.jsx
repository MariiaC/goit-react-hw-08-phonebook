//import s from './Contacts.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { contactsOperations } from '../redux/contacts-thunk';
import Filter from 'components/filter/filter';
import Addcontact from 'components/addcontact/AddContact';
import ContactItem from './ContactItem';


export default function Contacts() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.getContact());
  }, [dispatch]);

  const contacts = useSelector(state => state.contacts.contacts);
  const filterWord = useSelector(state => state.contacts.filter);

  const gettedContacts = contacts;

  const getFilteredContacts = () => {
    const normalizedFilter = filterWord.toLowerCase();

    return gettedContacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
      <div>
          <Addcontact />
          <Filter/>{''}
     <ul>
         {contacts &&
          getFilteredContacts().map(contact => (
            <ContactItem key={contact.id} contact={contact}></ContactItem>
          ))}
  
            </ul>
            </div>
  );
}