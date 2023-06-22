import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signOut as firebaseSignOut } from 'firebase/auth';

function HomePage() {
  const navigate = useNavigate();

  const signOut = async () => {
    console.log('Sign out button clicked');

    const auth = getAuth();
    try {
      await firebaseSignOut(auth);
      console.log('Successfully signed out');
      // Redirect to the login page
      navigate('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={signOut}>Sign Out</button>
    </div>
  );
}

export default HomePage;
