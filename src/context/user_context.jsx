import React, { useContext, useEffect, useState } from 'react';
import { account } from '../appWriteConfig,';

const UserContext = React.createContext();
export const UserProvider = ({ children }) => {
  const handleUserLogin = async (e, credentials) => {
    e.preventDefault();
    try {
      const response = await account.createSession(
        credentials.email,
        credentials.password,
        credentials.name
      );
      console.log(response);
    } catch (error) {
    } finally {
      e.target.reset();
    }
  };

  // const [myUser, setMyUser] = useState(null);

  // useEffect(() => {
  //   setMyUser(user);
  // }, [user]);

  return (
    <UserContext.Provider
      value={{
        handleUserLogin,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
// make sure use
export const useUserContext = () => {
  return useContext(UserContext);
};
