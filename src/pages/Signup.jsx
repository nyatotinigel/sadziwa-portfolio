import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [error, setError] = useState('');
  const { signUp } = useAuth();
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    const { error } = await signUp(email, password, fullName);
    if (error) setError(error.message);
    else navigate('/login'); // Ask to login or check email
  };

  return (
    <div className="section-padding" style={{ maxWidth: '400px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: 'var(--spacing-md)', textAlign: 'center' }}>Join the Atelier</h1>
      <form onSubmit={handleSignup} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {error && <p style={{ color: 'red', fontSize: '0.8rem' }}>{error}</p>}
        <input 
          type="text" 
          placeholder="Full Name" 
          value={fullName} 
          onChange={(e) => setFullName(e.target.value)} 
          style={inputStyle} 
          required 
        />
        <input 
          type="email" 
          placeholder="Email Address" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          style={inputStyle} 
          required 
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          style={inputStyle} 
          required 
        />
        <button type="submit" className="btn-primary">Join Now</button>
      </form>
      <p style={{ marginTop: 'var(--spacing-md)', textAlign: 'center', fontSize: '0.9rem' }}>
        Already a member? <Link to="/login" style={{ textDecoration: 'underline' }}>Login</Link>
      </p>
    </div>
  );
};

const inputStyle = {
  padding: '1rem',
  border: '1px solid #eee',
  fontSize: '0.9rem',
  outline: 'none',
  width: '100%'
};

export default Signup;
