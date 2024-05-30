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

    const verifyEmail = await account.createVerification(
      `${window.location.origin}/verification`
    );
    return verifyEmail;
  } catch (error) {
    console.log('There was an error with the registration. Please try again.');
  }
};
export const database = new Databases(client);

export default client;
