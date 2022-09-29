import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainMenu from '../components/mainmenu/MainMenu';
import Register from '../components/auth-pages/sign-in';
import Login from '../components/auth-pages/login';
import  Home  from '../components/auth-pages/home';
import Contacts from './contacts/ContactList';
import { authOperations } from './redux/auth-thunk';
import PrivateRoute from './routes/private';
import PublicRoute from './routes/public';
//import s from './App.module.css';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<MainMenu />}>
          <Route index element={<Home />} />

          <Route path="/register" restricted element={<PublicRoute />}>
            <Route path="/register" element={<Register />} />
          </Route>

          <Route path="/login" restricted element={<PublicRoute />}>
            <Route path="/login" element={<Login />} />
          </Route>

          <Route path="/contacts" element={<PrivateRoute />}>
            <Route path="/contacts" element={<Contacts />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};



// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
