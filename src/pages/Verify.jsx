import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { account } from '../appWriteConfig,';

const Verify = () => {
  const [params] = useSearchParams();
  const secret = params.get('secret');
  const id = params.get('userId');
  //   if(secret && id){
  //     const result = await account.updateVerification(
  //     '<USER_ID>', // userId
  //     '<SECRET>' // secret
  // );
  //   }
  async function verifiedEmail(secret, id) {
    const response = await account.updateVerification(
      id, // userId
      secret // secret
    );
    return response;
  }
  verifiedEmail(secret, id)
    .then((response) => {
      console.log(response);
    })
    .then(() => setTimeout(() => window.location.replace('/'), 3000))
    .catch((error) => console.log(error));

  return (
    <div>
      <h1 className="text-center font-bold text-2xl">Email verified</h1>
    </div>
  );
};

export default Verify;
