import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../App';
import { Trash2 } from 'lucide-react';

const Cart = () => {
  const { cart } = useContext(CartContext);
  
  const subtotal = cart.reduce((sum, item) => sum + item.price, 0);

  if (cart.length === 0) {
    return (
      <div className="section-padding" style={{ textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ fontSize: '3rem', marginBottom: 'var(--spacing-md)' }}>Your bag is empty.</h1>
          <Link to="/shop" className="btn-primary">Explore Collection</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page section-padding">
      <div className="container">
        <h1 style={{ fontSize: '3rem', marginBottom: 'var(--spacing-lg)' }}>Shopping Bag</h1>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 2fr) 1fr', gap: 'var(--spacing-lg)' }}>
          {/* List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
            {cart.map((item, index) => (
              <div key={index} style={{ 
                display: 'flex', 
                gap: 'var(--spacing-md)', 
                paddingBottom: 'var(--spacing-md)', 
                borderBottom: '1px solid var(--surface-highest)' 
              }}>
                <img src={item.image} alt={item.name} style={{ width: '150px', height: '200px', objectFit: 'cover' }} />
                <div style={{ flex: 1, display: 'flex', justifyContent: 'space-between' }}>
                  <div>
                    <h3 style={{ fontSize: '1.2rem' }}>{item.name}</h3>
                    <p style={{ opacity: 0.6 }}>{item.category}</p>
                    <p style={{ marginTop: '0.5rem' }}>Size: 38 (Mock)</p>
                  </div>
                  <div style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <p style={{ fontSize: '1.2rem' }}>${item.price}</p>
                    <button style={{ opacity: 0.3 }}><Trash2 size={18} /></button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div style={{ backgroundColor: 'var(--surface-low)', padding: 'var(--spacing-md)', height: 'fit-content' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: 'var(--spacing-md)' }}>Summary</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Subtotal</span>
                <span>${subtotal}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Shipping</span>
                <span style={{ fontSize: '0.8rem', opacity: 0.6 }}>Calculated at next step</span>
              </div>
              <div style={{ borderTop: '1px solid black', paddingTop: '1rem', marginTop: '1rem', display: 'flex', justifyContent: 'space-between', fontWeight: 700 }}>
                <span>Total</span>
                <span>${subtotal}</span>
              </div>
            </div>
            <Link to="/checkout" className="btn-primary" style={{ width: '100%', textAlign: 'center', marginTop: 'var(--spacing-md)' }}>
              Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
