import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import PropTypes from 'prop-types';

function SellerProfileCard({ sellerObj }) {
  return (
    <Card style={{
      width: '14rem', margin: '1rem', padding: '1rem', border: '3px solid #ccc', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
    }}
    >
      <ListGroup variant="flush">
        <ListGroup.Item>{sellerObj.firstName}</ListGroup.Item>
        <ListGroup.Item>{sellerObj.lastName}</ListGroup.Item>
        <ListGroup.Item>{sellerObj.email}</ListGroup.Item>
        <ListGroup.Item>{sellerObj.phoneNumber}</ListGroup.Item>
        <ListGroup.Item>{sellerObj.city}</ListGroup.Item>
        <ListGroup.Item>{sellerObj.state}</ListGroup.Item>
        <ListGroup.Item>{sellerObj.postalCode}</ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

SellerProfileCard.propTypes = {
  sellerObj: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    phoneNumber: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    postalCode: PropTypes.string,
  }).isRequired,
};

export default SellerProfileCard;
