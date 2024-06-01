import { Client, Account, Databases, ID } from 'appwrite';
import { redirect } from 'react-router-dom';

export const PROJECT_ID = '6655fe68003adf1d782c';
const client = new Client()
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject('6655fe68003adf1d782c');
export const account = new Account(client);
export const handleRegisterSubmit = async (e, credentials) => {
  e.preventDefault();
  try {
    const promiseCreatedUser = await account.create(
      ID.unique(),
      credentials.email,
      credentials.password,
      credentials.name
    );
    console.log('this is promise of the created user', promiseCreatedUser);
    redirect('/login');

    // const promiseVerifyEmail = await account.createVerification(
    //   `http://localhost:5173/verification`
    // );

    // console.log('this is promise of the verify email', promiseVerifyEmail);
  } catch (error) {
    console.log('this is the error upon creating user', error);
  }
};
export const database = new Databases(client);

export default client;
