import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { account } from '../appWriteConfig,';
const VerifyEmail = () => {
  const [params] = useSearchParams();
  const userSecret = params.get('secret');
  const userId = params.get('userId');
  //   if(secret && id){
  //     const result = await account.updateVerification(
  //     '<USER_ID>', // userId
  //     '<SECRET>' // secret
  // );
  //   }
  const navigate = useNavigate();
  async function verifiedEmail(secret, id) {
    const promise = await account.updateVerification(
      id, // userId
      secret // secret
    );
    return promise;
  }
  const response = verifiedEmail(userSecret, userId);
  navigate('/login');

  response
    .then((responseData) => {
      console.log(responseData);
    })
    .catch((error) => console.log(error));
  return (
    <section className="min-h-screen grid place-items-center">
      {response ? (
        <h1 className="font-bold text-center text-2xl">Email verified</h1>
      ) : (
        <h1 className="font-bold text-center text-2xl">
          Please check your mail box for confirmation
        </h1>
      )}
    </section>
  );
};

export default VerifyEmail;
