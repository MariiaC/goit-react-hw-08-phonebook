import s from './Navigation.module.css';
import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <div>
      <nav>
        <Link className={s.navlink} to="/">Home</Link>
        <Link className={s.navlink} to="/contacts">Contacts</Link>
      </nav>
    </div>
  );
}