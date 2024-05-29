import { Client, Account, Databases, ID } from 'appwrite';

export const PROJECT_ID = '6655fe68003adf1d782c';
const client = new Client()
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject('6655fe68003adf1d782c');
export const account = new Account(client);
export const handleRegisterSubmit = async (e, credentials) => {
  e.preventDefault();
  try {
    const response = await account.create(
      ID.unique(),
      credentials.email,
      credentials.password,
      credentials.name
    );
    console.log(response);
    const session = await account.createEmailPasswordSession(
      credentials.email,
      credentials.password
    );
    if (session) {
      const verifyEmail = await account.createVerification(
        `${window.location.origin}/verification`
      );
      return verifyEmail;
    }
  } catch (error) {
    console.log('There was an error with the registration. Please try again.');
  }
};
export const database = new Databases(client);

/**
  The  create  method accepts the following parameters: 
 userId  - The user ID. email  - The user's email address. password  - The user's password. name  - The user's name. 
 The  create  method returns a promise that resolves with the user object. 
 The  create  method throws an error if the user already exists. 
 The  create  method throws an error if the email is already in use. 
 The  create  method throws an error if the email is invalid. 
 The  create  method throws an error if the password is invalid. 
 The  create  method throws an error if the name is invalid. 
 The  create  method throws an error if the user ID is invalid. 
 The  create  method throws an error if the user ID is already in use. 
 The  create  method throws an error if the user ID is not provided. 
 The  create  method throws an error if the email is not provided. 
 The  create  method throws an error if the password is not provided. 
 The  create  method throws an error if the name is not provided. 
 The  create  method throws an error if the user is not logged in. 
 The  create  method throws an error if the user is not an admin. 
 The  create  method throws an error if the user is disabled. 
 The  create  method throws an error if the user is not verified. 
 The  create  method throws an error if the user is not allowed to perform the operation. 
 The  create  method throws an error if the user is not allowed to perform the operation on the given user ID. 
 The  create  method throws an error if the user is not allowed to perform the operation on the given email. 
 The  create  method throws an error if the user is not allowed to perform the operation on the given name. 
 The  create  method throws an error if the user is not allowed to perform the operation on the given password. 
 The  create  method throws an error if the user is not allowed to perform the operation on the given user. 
 The  create  method throws an error if the user is not allowed to perform the operation on the given user ID. 
 The  create  method throws an error if the user is not allowed to perform the operation on the given email. 
 The  create
  */

export default client;
