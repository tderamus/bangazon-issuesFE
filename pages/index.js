import { Button } from 'react-bootstrap';
import firebase from 'firebase/app';
import { useEffect, useState } from 'react';
import { signOut } from '../src/utils/auth';
import { getSeedData } from '../src/api/ProductData';
import SeedProductCard from '../src/components/SeedProductCard';
import { getCustomerById } from '../src/api/CustomerData';
import { getSellerById } from '../src/api/SellerData';

function Home() {
  const user = firebase.auth().currentUser;
  const [seedData, setSeedData] = useState({ products: [] });
  const [registeredCustomer, setRegisteredCustomer] = useState(false);
  const [registeredSeller, setRegisteredSeller] = useState(false);

  useEffect(() => {
    if (user && user.uid) {
      getCustomerById(user.uid)
        .then((data) => {
          if (user.uid === data.uid) {
            setRegisteredCustomer(true);
          } else {
            setRegisteredCustomer(false);
          }
        })
        .catch((error) => {
          console.error('Error fetching customer data:', error);
        });
    }
  }, [user]);

  useEffect(() => {
    if (user && user.uid) {
      getSellerById(user.uid)
        .then((data) => {
          if (user.uid === data.sellerId) {
            setRegisteredSeller(true);
          } else {
            setRegisteredSeller(false);
          }
        })
        .catch((error) => {
          console.error('Error fetching seller data:', error);
        });
    }
  }, [user]);

  useEffect(() => {
    getSeedData()
      .then((data) => {
        setSeedData(data);
      })
      .catch((error) => {
        console.error('Error fetching seed data:', error);
      });
  }, []);

  return (
    <>
      <div className="register-container">
        <h1>
          {registeredSeller ? (
            <>
              <Button variant="primary" type="button" size="lg" className="copy-btn" />
              <a href={`/SellerProfile/${user.uid}`} style={{ color: 'Black', textDecoration: 'none' }}>
                Enter Seller Account
              </a>
            </>
          ) : (
            <>
              <Button variant="primary" type="button" size="lg" className="copy-btn" />
              <a href={`/RegisterNewSeller/${user.uid}`} style={{ color: 'Black', textDecoration: 'none' }}>Register New Seller Account</a>
            </>
          )}
        </h1>
        <div className="register-customer-container">
          <h1>
            {registeredCustomer ? (
              <>
                <Button variant="primary" type="button" size="lg" className="copy-btn" />
                <a href={`/CustomerProfile/${user.uid}`} style={{ color: 'Black', textDecoration: 'none' }}>
                  Enter Customer Account
                </a>
              </>
            ) : (
              <>
                <Button variant="primary" type="button" size="lg" className="copy-btn" />
                <a href={`/RegisterNewCustomer/${user.uid}`} style={{ color: 'Black', textDecoration: 'none' }}>Register New Customer Account</a>
              </>
            )}
          </h1>

        </div>
      </div>

      <div className="seed-data-container">
        <h1>Welcome to Bangazon Products catalog. Enjoy shopping with us!</h1>
      </div>
      <div className="seed-product-card-container">
        {seedData.products && seedData.products.length > 0 ? (
          seedData.products.map((product) => (
            <SeedProductCard
              key={product.id}
              title={product.title}
              category={product.category}
              price={product.price}
              image={product.images[0]}
              onUpdate={getSeedData}
            />
          ))
        ) : (
          <p>No products available.</p>
        )}
      </div>
      <div
        className="text-center d-flex flex-column justify-content-center align-content-center"
        style={{
          height: '90vh',
          padding: '30px',
          maxWidth: '400px',
          margin: '0 auto',
        }}
      >
        <p>Click the button below to logout!</p>
        <Button variant="danger" type="button" size="lg" className="copy-btn" onClick={signOut}>
          Sign Out
        </Button>
      </div>
    </>
  );
}

export default Home;
