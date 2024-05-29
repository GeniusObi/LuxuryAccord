import React, { useState } from 'react';
import { useUserContext } from '../context/user_context';

const Login = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const { handleUserLogin } = useUserContext();
  const handleInputChange = (e) => {
    e.preventDefault();
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
    console.log(credentials);
  };
  return (
    <section className="h-screen  grid place-items-center">
      <form
        onSubmit={(e) => handleUserLogin(e, credentials)}
        className="w-96 flex flex-col gap-4"
      >
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

export default Login;
