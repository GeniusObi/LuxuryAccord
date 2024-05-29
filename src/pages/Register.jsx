import React, { useState } from 'react';

import { handleRegisterSubmit } from '../appWriteConfig,';

const Register = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
    name: '',
  });

  const handleInputChange = (e) => {
    // e.preventDefault();
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
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
