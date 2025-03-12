import { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import CustomerProfileCard from '../../src/components/CustomerProfileCard';
import { getCustomerById } from '../../src/api/CustomerData';

export default function CustomerProfile() {
  const user = firebase.auth().currentUser;
  const [customer, setCustomer] = useState(null); // Start with `null`
  const [registeredCustomer, setRegisteredCustomer] = useState(false);

  useEffect(() => {
    if (user && user.uid) {
      getCustomerById(user.uid)
        .then((data) => {
          if (data && Object.keys(data).length > 0) { // Check if data is not empty
            setCustomer(data);
            setRegisteredCustomer(true);
          } else {
            setCustomer(null); // Ensure it's null when no data is found
            setRegisteredCustomer(false); // empty object is still considered truthy so I have to check if it's empty here
          }
        })
        .catch((error) => {
          setCustomer(null);
          setRegisteredCustomer(false);
          console.error('Error fetching user data:', error);
        });
    } else {
      setCustomer(null);
      setRegisteredCustomer(false);
      console.error('No user logged in');
    }
  }, [user]);

  return (
    <div className="customer-profile-container">
      {registeredCustomer && customer ? (
        <><h1>{user.displayName} Profile Page</h1><CustomerProfileCard customerObj={customer} /></>
      ) : (
        <div>
          <h1>Welcome, {user ? user.displayName : 'Guest'}</h1>
          <h4>Please register a customer account to see profile information. Thank you.</h4>
        </div>
      )}
    </div>
  );
}
