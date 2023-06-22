import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, database } from '../services/firebase';
import { ref, push, set } from 'firebase/database';

function HomePage() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [city, setCity] = useState('');

  const signOut = async () => {
    console.log('Sign out button clicked');

    try {
      await auth.signOut();
      console.log('Successfully signed out');
      // Redirect to the login page
      navigate('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const dbRef = ref(database, 'users');
    const newUserRef = push(dbRef);
    const newUserData = {
      email,
      city,
    };

    try {
      await set(newUserRef, newUserData);
      console.log('Data successfully added to the database');
      // Reset form fields
      setEmail('');
      setCity('');
    } catch (error) {
      console.error('Error adding data to the database:', error);
    }
  };

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={signOut}>Sign Out</button>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Age:
          <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
        </label>
        <label>
          City:
          <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default HomePage;
