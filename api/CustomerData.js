import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;
const getCustomerData = (uid) => new Promise((resolve, reject) => {
  if (!uid) {
    reject(new Error('uid is required to fetch customer data'));
    return;
  }

  fetch(`${endpoint}/api/customers/${uid}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Server error: ${response.statusText}`);
      }
      return response.json();
    })
    .then((data) => resolve(Object.values(data)))
    .catch((error) => {
      console.error('Error fetching customer data:', error);
      reject(error);
    });
});

export default getCustomerData;
