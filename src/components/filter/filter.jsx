import { useSelector, useDispatch } from 'react-redux';
import { contactsOperations } from '../redux/contacts-thunk';
import s from './filter.module.css';


 function Filter() {
  const dispatch = useDispatch();

  const value = useSelector(state => state.contacts.filter);
  const handleImput = e => {
    dispatch(contactsOperations.filter(e.target.value));
  };
  return (
    <div className={s.container}>
      <h1 className={s.paragr}>Find contacts by name</h1>
      <input type="text" name="search" value={value} onChange={handleImput} />
    </div>
  );
};

export default Filter;
