import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import firebase from 'firebase/app';
import NewCustomerForm from '../../src/components/Forms/NewCustomerForm';

function RegisterCustomer() {
  const router = useRouter();
  const { UID } = router.query;
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    if (UID) {
      const user = firebase.auth().currentUser;
      if (user && user.uid === UID) {
        setUserName(user.displayName || 'User');
        setUserEmail(user.email || 'User Email');
      }
    }
  }, [UID, userEmail, userName]);
  return (
    <>
      <h4>Enter Bangazon Customer Account Information And Submit Form.</h4>
      <NewCustomerForm />
    </>
  );
}

export default RegisterCustomer;
