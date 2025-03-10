import { clientCredentials } from '../utils/client';

// Get the seller data from the database
const endpoint = clientCredentials.databaseURL;
const getSellerData = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/api/sellers`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include', // Allow cookies/session to be sent
  })
    .then((response) => response.json())
    .then((data) => {
      console.warn('seller Data', data);
      resolve(data);
    })
    .catch((error) => reject(error));
});

// Create a new seller if they don't exist
const createNewSeller = (formInput) => new Promise((resolve, reject) => {
  console.warn('Form Input', formInput);
  fetch(`${endpoint}/api/sellers`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formInput),
    credentials: 'include', // Allow cookies/session to be sent
  })
    .then((response) => {
      if (!response.ok) {
        return response.text().then((text) => { throw new Error(text); });
      }
      return response.json().catch(() => ({})); // Handle empty response body
    })
    .then((data) => {
      console.warn('seller API Data', data);
      resolve(data);
    })
    .catch((error) => reject(error));
});

// Update seller data
const updateSellerData = (formInput) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/api/sellers/${formInput.uid}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formInput),
    credentials: 'include', // Allow cookies/session to be sent
  })
    .then((response) => {
      if (!response.ok) {
        return response.text().then((text) => { throw new Error(text); });
      }
      return response.json().catch(() => ({})); // Handle empty response body
    })
    .then((data) => {
      console.warn('seller API Data', data);
      resolve(data);
    })
    .catch((error) => reject(error));
});

export { createNewSeller, getSellerData, updateSellerData };
