import authSelectors from '../redux/auth-select';
import { useSelector, useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth-thunk';
import s from './usermenu.module.css';

export default function UserMenue() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);

  return (
    <div className={s.container}>
      {name !== null && <p>{`Welcome,  ${name}`}</p>}

      <button className={s.btn} type="Button" onClick={() => dispatch(authOperations.logOut())}>
        Logout
      </button>
    </div>
  );
}