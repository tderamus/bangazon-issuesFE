import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import firebase from 'firebase/app';

export default function UserProfile() {
  const router = useRouter();
  const { UID } = router.query;
  const [userName, setUserName] = useState('');

  useEffect(() => {
    if (UID) {
      const user = firebase.auth().currentUser;
      if (user && user.uid === UID) {
        setUserName(user.displayName || 'User');
      }
    }
  }, [UID]);

  return (
    <div>
      <h1>Customer Profile Page</h1>
      <p>Welcome, {userName}</p>
    </div>
  );
}
