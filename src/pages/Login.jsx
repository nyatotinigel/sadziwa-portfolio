import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const { error } = await signIn(email, password);
    if (error) setError(error.message);
    else navigate('/');
  };

  return (
    <div className="section-padding" style={{ maxWidth: '400px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: 'var(--spacing-md)', textAlign: 'center' }}>Atelier Access</h1>
      <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {error && <p style={{ color: 'red', fontSize: '0.8rem' }}>{error}</p>}
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
        <button type="submit" className="btn-primary">Sign In</button>
      </form>
      <p style={{ marginTop: 'var(--spacing-md)', textAlign: 'center', fontSize: '0.9rem' }}>
        New to the atelier? <Link to="/signup" style={{ textDecoration: 'underline' }}>Join Now</Link>
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

export default Login;
