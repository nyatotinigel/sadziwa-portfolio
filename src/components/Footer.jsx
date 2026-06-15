import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ 
      backgroundColor: 'var(--inverse-surface)', 
      color: 'var(--on-inverse)', 
      padding: 'var(--spacing-xl) 0 var(--spacing-md)' 
    }}>
      <div className="container">
        <div className="footer-grid" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: 'var(--spacing-lg)' 
        }}>
          <div>
            <h3 style={{ marginBottom: 'var(--spacing-md)', fontSize: '1.2rem' }}>AURAWEAR</h3>
            <p style={{ opacity: 0.7, fontSize: '0.9rem' }}>The high-end digital atelier for the modern individual.</p>
          </div>
          <div>
            <h4 style={{ marginBottom: 'var(--spacing-sm)', fontSize: '0.8rem', textTransform: 'uppercase' }}>Shop</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', opacity: 0.7, fontSize: '0.9rem' }}>
              <li><Link to="/shop?cat=Men">Men</Link></li>
              <li><Link to="/shop?cat=Women">Women</Link></li>
              <li><Link to="/shop?cat=New">New Arrivals</Link></li>
            </ul>
          </div>
          <div>
            <h4 style={{ marginBottom: 'var(--spacing-sm)', fontSize: '0.8rem', textTransform: 'uppercase' }}>Brand</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', opacity: 0.7, fontSize: '0.9rem' }}>
              <li><Link to="/about">Our Story</Link></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h4 style={{ marginBottom: 'var(--spacing-sm)', fontSize: '0.8rem', textTransform: 'uppercase' }}>Follow</h4>
            <div style={{ display: 'flex', gap: 'var(--spacing-sm)', marginTop: '0.5rem' }}>
              <Instagram size={18} strokeWidth={1} />
              <Twitter size={18} strokeWidth={1} />
              <Mail size={18} strokeWidth={1} />
            </div>
          </div>
        </div>
        <div style={{ 
          marginTop: 'var(--spacing-xl)', 
          paddingTop: 'var(--spacing-md)', 
          borderTop: '1px solid rgba(255,255,255,0.1)', 
          textAlign: 'center',
          fontSize: '0.8rem',
          opacity: 0.5
        }}>
          &copy; {new Date().getFullYear()} AURAWEAR Atelier. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
