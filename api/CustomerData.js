import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;
const getCustomerData = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/api/customers/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include', // Allow cookies/session to be sent
  })
    .then((response) => response.json())
    .then((data) => {
      console.warn('Customer Data', data);
      resolve(data);
    })
    .catch((error) => reject(error));
});

export default getCustomerData;
