/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import firebase from 'firebase/app';
import Link from 'next/link';
import {
  Navbar, //
  Container,
  Nav,
  Button,
} from 'react-bootstrap';
import { signOut } from '../utils/auth';

export default function NavBar() {
  const user = firebase.auth().currentUser;

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link passHref href={`/UserProfile/${user.uid}`}>
          <Navbar.Brand>Welcome to the Bangazon App</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* CLOSE NAVBAR ON LINK SELECTION: https://stackoverflow.com/questions/72813635/collapse-on-select-react-bootstrap-navbar-with-nextjs-not-working */}
            <Link passHref href="/">
              <Nav.Link>Home</Nav.Link>
            </Link>
            <Link passHref href={`/CustomerProfile/${user.uid}`}>
              <Nav.Link>Customer Profile</Nav.Link>
            </Link>
            <Link passHref href={`/SellerProfile/${user.uid}`}>
              <Nav.Link>Seller Profile</Nav.Link>
            </Link>
            <Button variant="danger" onClick={signOut}>
              Sign Out
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
