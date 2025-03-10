import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'react-bootstrap';
import { useRouter } from 'next/router';
import firebase from 'firebase/app';
import { createNewCustomer } from '../../api/CustomerData';

const initialstate = {
  uid: '',
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  city: '',
  state: '',
  postalCode: '',
};

export default function NewCustomerForm({ customerObject = initialstate }) {
  const router = useRouter();
  const [formInput, setFormInput] = useState(customerObject);
  const user = firebase.auth().currentUser;

  useEffect(() => {
    if (user) {
      setFormInput((prevstate) => ({
        ...initialstate,
        ...prevstate,
        uid: user.uid || prevstate.uid,
        email: user.email || prevstate.email,
      }));
    }
  }, [user]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevstate) => ({
      ...prevstate,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.warn('Form Input', formInput);
    if (formInput.uid) {
      formInput.uid = user.uid;
      createNewCustomer(formInput).then(() => router.push(`/CustomerProfile/${user.uid}`));
    }
  };
  return (

    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="uid">
        <Form.Label>Customer ID</Form.Label>
        <Form.Control
          type="text"
          name="uid"
          value={formInput.uid}
          readOnly
        />
      </Form.Group>

      <Form.Group controlId="firstName">
        <Form.Label>First Name</Form.Label>
        <Form.Control
          type="text"
          name="firstName"
          value={formInput.firstName}
          onChange={handleInputChange}
          required
        />
      </Form.Group>
      <Form.Group controlId="lastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          type="text"
          name="lastName"
          value={formInput.lastName}
          onChange={handleInputChange}
          required
        />
      </Form.Group>
      <Form.Group controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={formInput.email}
          readOnly
        />
      </Form.Group>
      <Form.Group controlId="phoneNumber">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control
          type="tel"
          name="phoneNumber"
          value={formInput.phoneNumber}
          onChange={handleInputChange}
          required
        />
      </Form.Group>
      <Form.Group controlId="city">
        <Form.Label>City</Form.Label>
        <Form.Control
          type="text"
          name="city"
          value={formInput.city}
          onChange={handleInputChange}
          required
        />
      </Form.Group>
      <Form.Group controlId="state">
        <Form.Label>State</Form.Label>
        <Form.Control
          type="text"
          name="state"
          value={formInput.state}
          onChange={handleInputChange}
          required
        />
      </Form.Group>
      <Form.Group controlId="postalCode">
        <Form.Label>Postal Code</Form.Label>
        <Form.Control
          type="text"
          name="postalCode"
          value={formInput.postalCode}
          onChange={handleInputChange}
          required
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>

  );
}

NewCustomerForm.propTypes = {
  customerObject: PropTypes.shape({
    uid: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    phoneNumber: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    postalCode: PropTypes.string,
  }),
};

NewCustomerForm.defaultProps = {
  customerObject: initialstate,
};
