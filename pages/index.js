import { Button } from 'react-bootstrap';
import firebase from 'firebase/app';
import { useEffect, useState } from 'react';
import { signOut } from '../src/utils/auth';
import { getSeedData, getProductData } from '../src/api/ProductData';
import SeedProductCard from '../src/components/SeedProductCard';

function Home() {
  const user = firebase.auth().currentUser;
  const [seedData, setSeedData] = useState({ products: [] });
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    getSeedData()
      .then((data) => {
        setSeedData(data);
      })
      .catch((error) => {
        console.error('Error fetching seed data:', error);
      });

    getProductData()
      .then((data) => {
        setProductData(data);
        console.warn('Product Data', productData);
      })
      .catch((error) => {
        console.error('Error fetching product data:', error);
      });
  }, []);

  return (
    <>
      <div className="register-container">
        <div className="register-seller-container">
          <h1>Register Seller Account</h1>
          <Button type="button" className="btn btn-primary" size="lg" />
          <a href={`/RegisterNewSeller/${user.uid}`} style={{ color: 'white', textDecoration: 'none' }}>Register</a>
        </div>
        <div className="register-customer-container">
          <h1>Register Customer Account</h1>
          <Button variant="primary" type="button" size="lg" className="copy-btn" />
          <a href={`/RegisterNewCustomer/${user.uid}`} style={{ color: 'white', textDecoration: 'none' }}>Register</a>
        </div>
      </div>

      <div className="seed-data-container">
        <h1>Welcome to Bangazon Products catalog. Enjoy shopping with us!</h1>
      </div>
      <div className="seed-product-card-container">
        {seedData.products.map((product) => (
          <SeedProductCard
            key={product.id}
            title={product.title}
            category={product.category}
            price={product.price}
            image={product.images[0]}
            onUpdate={getSeedData}
          />
        ))}
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
