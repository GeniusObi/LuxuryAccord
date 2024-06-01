import React, { useState } from 'react';

import { account, handleRegisterSubmit } from '../appWriteConfig,';
import { useNavigate } from 'react-router-dom';
import { ID } from 'appwrite';

const Register = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
    name: '',
  });
  const navigate = useNavigate();
  const handleInputChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    try {
      const promiseCreatedUser = await account.create(
        ID.unique(),

        credentials.email,
        credentials.password,
        credentials.name
      );
      console.log('this is promise of the created user', promiseCreatedUser);

      // const promiseCreateEmailPasswordSession =
      //   await account.createEmailPasswordSession(
      //     credentials.email,
      //     credentials.password
      //   );
      // console.log(
      //   'this is promise of the created email password session',
      //   promiseCreateEmailPasswordSession
      // );
      try {
        const cookieFromSession = localStorage.getItem('cookieFallback');
        const getSessionobject = cookieFromSession
          ? JSON.parse(cookieFromSession)
          : null;

        if (getSessionobject) {
          const promiseVerifyEmail = await account.createVerification(
            'https://luxury-accord.vercel.app/verify-email'
          );
          console.log(
            'this is promise of the verify email',
            promiseVerifyEmail
          );
        }
      } catch (error) {
        console.log('this is the error upon verifcation of user', error);
      }
    } catch (error) {
      console.log('error of general reg', error);
    }
  };
  return (
    <section className="h-screen  grid place-items-center">
      <form
        onSubmit={(e) => handleRegisterSubmit(e, credentials)}
        className="w-96 flex flex-col gap-4"
      >
        {/* username */}
        <input
          type="text"
          name="name"
          id="name"
          placeholder="name"
          value={credentials.name}
          onChange={handleInputChange}
          className="border border-gray-600 rounded-md p-2 w-full"
        />
        {/* email */}
        <input
          type="email"
          name="email"
          id="email"
          placeholder="email"
          value={credentials.email}
          onChange={handleInputChange}
          className="border border-gray-600 rounded-md p-2 w-full"
        />
        {/* password */}
        <input
          type="password"
          name="password"
          id="password"
          placeholder="password"
          value={credentials.password}
          onChange={handleInputChange}
          className="border border-gray-600 rounded-md p-2 w-full"
        />
        <button
          type="submit"
          className="border border-gray-600 rounded-md p-2 w-full font-semibold bg-gray-800 text-white hover:bg-gray-600"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default Register;
