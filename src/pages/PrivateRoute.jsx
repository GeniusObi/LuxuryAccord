import React from 'react';
import { Navigate } from 'react-router-dom';

import { useKindeAuth } from '@kinde-oss/kinde-auth-react';

const PrivateRoute = ({ children }) => {
  const { user } = useKindeAuth();
  if (!user) {
    return <Navigate to="/" />;
  }
  return children;
};
export default PrivateRoute;
