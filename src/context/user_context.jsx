import React, { useContext, useEffect, useState } from 'react';

import { useKindeAuth } from '@kinde-oss/kinde-auth-react';

const UserContext = React.createContext();
export const UserProvider = ({ children }) => {
  const { login, register, logout, isAuthenticated, user, isLoading, error } =
    useKindeAuth();
  // const { loginWithRedirect, logout, user, isLoading, error } = useAuth0();
  const [myUser, setMyUser] = useState(null);

  useEffect(() => {
    setMyUser(user);
  }, [user]);

  return (
    <UserContext.Provider
      value={{ login, logout, register, myUser, isLoading, error }}
    >
      {children}
    </UserContext.Provider>
  );
};
// make sure use
export const useUserContext = () => {
  return useContext(UserContext);
};
