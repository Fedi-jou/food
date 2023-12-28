import React, { useState } from 'react';
import './Auth.css'; // Import the shared styles
import 'bootstrap/dist/css/bootstrap.min.css';

const SignUp = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [country, setCountry] = useState('');
  const [age, setAge] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [favoriteDish, setFavoriteDish] = useState('');

  const handleSignUp = () => {
    // Implement your sign-up logic here
    console.log('Sign Up:', { name, surname, photo, country, age, phone, email, favoriteDish });
  };

  return (

    <div style={{ margin: '20px' }}>
    <div className="auth-container">
      <h2>Sign Up</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name:</label>
          <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>

        <div className="mb-3">
          <label htmlFor="surname" className="form-label">Surname:</label>
          <input type="text" className="form-control" id="surname" value={surname} onChange={(e) => setSurname(e.target.value)} />
        </div>


        <div className="mb-3">
          <label htmlFor="country" className="form-label">Country:</label>
          <input type="text" className="form-control" id="country" value={country} onChange={(e) => setCountry(e.target.value)} />
        </div>

        <div className="mb-3">
          <label htmlFor="age" className="form-label">Age:</label>
          <input type="text" className="form-control" id="age" value={age} onChange={(e) => setAge(e.target.value)} />
        </div>

        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Phone:</label>
          <input type="text" className="form-control" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email:</label>
          <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div className="mb-3">
          <label htmlFor="favoriteDish" className="form-label">Favorite Tunisian Dish:</label>
          <select className="form-select" id="favoriteDish" value={favoriteDish} onChange={(e) => setFavoriteDish(e.target.value)}>
            <option value="">Select a Dish</option>
            <option value="couscous">Couscous</option>
            <option value="brik">Brik</option>
            <option value="tagine">Tagine</option>
            {/* Add more options as needed */}
          </select>
        </div>

        <button type="button" className="btn btn-primary" onClick={handleSignUp}>Sign Up</button>
      </form>
    </div>
    </div>
  );
};

export default SignUp;
