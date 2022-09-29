import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import authSelectors from '../redux/auth-select';

 function PublicRoute({ restricted }) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return isLoggedIn ? <Navigate to="/home" /> : <Outlet />;
};

export default PublicRoute