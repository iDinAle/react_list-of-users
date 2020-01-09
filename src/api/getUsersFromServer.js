const USERS_URL = 'https://my-json-server.typicode.com/iDinAle/demo/users';

export const getUsersFromServer = async() => {
  const response = await fetch(USERS_URL);

  return response.json();
};
