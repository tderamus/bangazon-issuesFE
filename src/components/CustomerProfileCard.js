import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import PropTypes from 'prop-types';

function CustomerProfileCard({ customerObj }) {
  return (
    <Card style={{
      width: '14rem', margin: '1rem', padding: '1rem', border: '3px solid #ccc', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
    }}
    >
      <ListGroup variant="flush">
        <ListGroup.Item>{customerObj.firstName}</ListGroup.Item>
        <ListGroup.Item>{customerObj.lastName}</ListGroup.Item>
        <ListGroup.Item>{customerObj.email}</ListGroup.Item>
        <ListGroup.Item>{customerObj.phoneNumber}</ListGroup.Item>
        <ListGroup.Item>{customerObj.city}</ListGroup.Item>
        <ListGroup.Item>{customerObj.state}</ListGroup.Item>
        <ListGroup.Item>{customerObj.postalCode}</ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

CustomerProfileCard.propTypes = {
  customerObj: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    phoneNumber: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    postalCode: PropTypes.string,
  }).isRequired,
};

export default CustomerProfileCard;
