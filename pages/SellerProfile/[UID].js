import { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import SellerProfileCard from '../../src/components/SellerProfileCard';
import { getSellerById } from '../../src/api/SellerData';

export default function SellerProfile() {
  const user = firebase.auth().currentUser;
  const [seller, setSeller] = useState(null); // Start with `null`
  const [registeredSeller, setregisteredSeller] = useState(false);

  useEffect(() => {
    if (user && user.uid) {
      getSellerById(user.uid)
        .then((data) => {
          if (data && Object.keys(data).length > 0) { // Check if data is not empty
            setSeller(data);
            setregisteredSeller(true);
          } else {
            setSeller(null); // Ensure it's null when no data is found
            setregisteredSeller(false); // empty object is still considered truthy so I have to check if it's empty here
          }
        })
        .catch((error) => {
          setSeller(null);
          setregisteredSeller(false);
          console.error('Error fetching user data:', error);
        });
    } else {
      setSeller(null);
      setregisteredSeller(false);
      console.error('No user logged in');
    }
  }, [user]);

  return (
    <div className="seller-profile-container">
      {registeredSeller && seller ? (
        <><h1>{user.displayName} Seller Profile Page</h1><SellerProfileCard sellerObj={seller} /></>
      ) : (
        <div>
          <h1>Welcome, {user ? user.displayName : 'Guest'}</h1>
          <h4>Please register a seller account to see profile information. Thank you.</h4>
        </div>
      )}
    </div>
  );
}
