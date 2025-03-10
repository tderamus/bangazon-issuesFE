import { clientCredentials } from '../utils/client';

// Get the customer data from the database
const endpoint = clientCredentials.databaseURL;
const getCustomerData = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/api/customers`, {
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

// Create a new customer if they don't exist
const createNewCustomer = (formInput) => new Promise((resolve, reject) => {
  console.warn('Form Input', formInput);
  fetch(`${endpoint}/api/customers`, {
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
      console.warn('Customer API Data', data);
      resolve(data);
    })
    .catch((error) => reject(error));
});

// Update customer data
const updateCustomerData = (formInput) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/api/customers/${formInput.uid}`, {
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
      console.warn('Customer API Data', data);
      resolve(data);
    })
    .catch((error) => reject(error));
});

export { createNewCustomer, getCustomerData, updateCustomerData };
