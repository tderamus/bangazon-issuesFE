import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;
const seedDataEndpoint = 'https://dummyjson.com/products?limit=60';

// Get seed data from the API
const getSeedData = () => new Promise((resolve, reject) => {
  fetch(seedDataEndpoint, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      resolve(data);
    })
    .catch((error) => reject(error));
});

// Get seed data by ID
const getSeedDataById = (id) => new Promise((resolve, reject) => {
  fetch(`${seedDataEndpoint}/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      resolve(data);
    })
    .catch((error) => reject(error));
});

// Get product data from the API
const getProductData = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/api/products/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include', // Allow cookies/session to be sent
  })
    .then((response) => response.json())
    .then((data) => {
      resolve(data);
    })
    .catch((error) => reject(error));
});

export { getSeedData, getProductData, getSeedDataById };
