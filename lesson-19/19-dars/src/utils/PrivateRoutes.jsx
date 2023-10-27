import PropTypes from 'prop-types';
import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoutes = ({ isLogged }) => {
  return isLogged ? <Outlet /> : <Navigate to='/login' />;
};

export default PrivateRoutes;

PrivateRoutes.propTypes = {
  isLogged: PropTypes.any,
};
