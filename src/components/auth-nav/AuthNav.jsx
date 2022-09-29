import s from './AuthNav.module.css';
import { Link } from 'react-router-dom';

 function AuthNav() {
  return (
    <div>
      <nav>
        <Link className={s.link} to="/register">Register</Link>
        <Link className={s.link} to="/login">Login</Link>
      </nav>
    </div>
  );
}

export default AuthNav