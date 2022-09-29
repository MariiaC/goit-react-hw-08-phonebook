import s from './Contacts.module.css';
import { useDispatch } from 'react-redux';
import { contactsOperations } from '../redux/contacts-thunk';
import { FiTrash2 } from 'react-icons/fi';

export default function ContactsItem({ contact }) {
  const dispatch = useDispatch();
  const { name, number } = contact;

  return (
<li className={s.contactItem}>
      <div>
      <span>
        {name}
        </span>
          <span>
        {number}
      </span>
                <button className={s.button} onClick={() => {
          dispatch(contactsOperations.deleteContact(contact.id));
        }}>
                   
        <FiTrash2 style={{ color: 'red', paddingRight: 10, fontSize:16 }} />
      Delete contact
      </button>
    </div>
    </li>
  );
}

 