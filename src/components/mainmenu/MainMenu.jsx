import { Outlet } from 'react-router-dom';
import Navigation from '../nav/Navigation';
import AuthNav from '../auth-nav/AuthNav';
import { Suspense } from 'react';
import s from './MainMenu.module.css';
import { useSelector } from 'react-redux';
import authSelectors from '../redux/auth-select';
import UserMenue from '../menu/usermenu';

function MainMenu() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <div className={s.container}>
      <section>
        <header className={s.header}>
          <Navigation />
          {isLoggedIn ? <UserMenue /> : <AuthNav />}
        </header>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </section>
    </div>
  );
};

export default MainMenu;