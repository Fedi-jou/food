// // SignIn.jsx
// import React, { useState } from 'react';
// import './Auth.css'; // Import the shared styles

// const SignIn = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSignIn = () => {
//     // Implement your sign-in logic here
//     console.log('Sign In:', { email, password });
//   };

//   return (
//     <div className="auth-container">
//       <h2>Sign In</h2>
//       <form>
//         <label>Email:</label>
//         <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

//         <label>Password:</label>
//         <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

//         <button type="button" onClick={handleSignIn}>Sign In</button>
//       </form>
//     </div>
//   );
// };

// export default SignIn;


// SignIn.jsx
// SignIn.jsx
import React, { useState } from 'react';
import './Auth.css'; // Import the shared styles
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap styles

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    // Implement your sign-in logic here
    console.log('Sign In:', { email, password });
  };

  return (
    <div style={{ margin: '100px' }}>

    
    <div className="auth-container text-center">
      <h2 className="mb-4">Sign In</h2>
      <form className="col-md-6 mx-auto">
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email:</label>
          <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password:</label>
          <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>

        <button type="button" className="btn btn-primary mb-3" onClick={handleSignIn}>Sign In</button>
      </form>
    </div>
    </div>
  );
};

export default SignIn;

