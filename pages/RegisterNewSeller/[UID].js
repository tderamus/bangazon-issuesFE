import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import firebase from 'firebase/app';
import NewSellerForm from '../../src/components/Forms/NewSellerForm';

function RegisterSeller() {
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
      <h4>Enter Bangazon Seller Account Information And Submit Form.</h4>
      <NewSellerForm />
    </>
  );
}

export default RegisterSeller;
