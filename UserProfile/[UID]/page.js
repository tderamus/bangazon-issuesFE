'use client';

import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import getCustomerData from '../../api/CustomerData';

export default function UserProfile() {
  const [userName, setUserName] = useState('');

  getCustomerData();

  useEffect(() => {
    // Get user display name from Firebase authentication
    const user = firebase.auth().currentUser;
    if (user) {
      setUserName(user.displayName || 'User');
    }
  }, []);
  return (
    <div>
      <h1>Customer Profile Page</h1>
      <p>Welcome, {userName}</p>
    </div>
  );
}
