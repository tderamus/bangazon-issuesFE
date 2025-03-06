import { Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { signOut } from '../src/utils/auth';
import { getSeedData, getProductData } from '../src/api/ProductData';
import SeedProductCard from '../src/components/SeedProductCard';

function Home() {
  const [seedData, setSeedData] = useState([]);
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    getSeedData()
      .then((data) => {
        console.warn('Seed Data', data);
        setSeedData(data);
      })
      .catch((error) => {
        console.error('Error fetching seed data:', error);
      });

    getProductData()
      .then((data) => {
        console.warn('Product Data', data);
        setProductData(data);
      })
      .catch((error) => {
        console.error('Error fetching product data:', error);
      });
  }, []);

  return (
    <>
      <div>
        <h1>Welcome to Bangazon Products catalog. Enjoy shopping with us!</h1>
      </div>
      <div>
        {seedData.map((seedproducts) => (
          <SeedProductCard key={seedproducts.id} SeedDataObj={seedproducts} onUpdate={getSeedData} />
        ))}
      </div>
      <div>
        {productData.map((products) => (
          <SeedProductCard key={products.id} SeedDataObj={products} onUpdate={getProductData} />
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
