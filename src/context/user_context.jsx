import React, { useContext, useEffect, useState } from 'react';
import { account } from '../appWriteConfig,';

const UserContext = React.createContext();
const getUserFromLocalStorage = () => {
  return localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user'))
    : { username: null, token: null };
};

const userState = {
  user: getUserFromLocalStorage(),
  userLoading: false,
};

export const UserProvider = ({ children }) => {
  const handleUserLogin = async (e, credentials) => {
    e.preventDefault();
    try {
      const promiseCreateEmailPasswordSession =
        await account.createEmailPasswordSession(
          credentials.email,
          credentials.password
        );
      console.log(
        'this is promise of the created email password session',
        promiseCreateEmailPasswordSession
      );
      console.log(response);
    } catch (error) {
      console.log('this is the error upon loggin in user', error);
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
        ...userState,
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
