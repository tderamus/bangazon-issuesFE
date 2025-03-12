import React from 'react';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';

function SeedProductCard({
  title,
  category,
  price,
  image,
  onUpdate,
}) {
  return (
    <>
      <Card style={{ width: '18rem' }}>
        <Card.Img src={image} alt={title} className="card-img-top seed-product-image" />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{category}</Card.Text>
          <Card.Text>{price}</Card.Text>
        </Card.Body>
        <button type="button" onClick={onUpdate} className="btn btn-success">CHECKOUT</button>
        <Card.Body>
          <button type="button" onClick={onUpdate} className="btn btn-primary m-4 btn-lg">🛒</button>
          <button type="button" onClick={onUpdate} className="btn btn-info m-5 btn-lg">ℹ</button>
        </Card.Body>
      </Card>
    </>
  );
}

SeedProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default SeedProductCard;
