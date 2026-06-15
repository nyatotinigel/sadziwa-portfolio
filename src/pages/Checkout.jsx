import React, { useState, useContext } from 'react';
import { CartContext } from '../App';
import { useAuth } from '../context/AuthContext';
import { supabase } from '../lib/supabase';
import { CreditCard, Truck, CheckCircle, Loader } from 'lucide-react';

const Checkout = () => {
  const { cart } = useContext(CartContext);
  const { user } = useAuth();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const subtotal = cart.reduce((sum, item) => sum + item.price, 0);

  const [address, setAddress] = useState({
    firstName: '', lastName: '', street: '', city: '', zip: '', country: ''
  });

  const handlePlaceOrder = async () => {
    setLoading(true);
    const { error } = await supabase.from('orders').insert({
      user_id: user?.id || null,
      items: cart,
      total: subtotal,
      shipping_address: address,
      status: 'paid'
    });

    if (!error) setStep(3);
    else alert('Checkout failed: ' + error.message);
    setLoading(false);
  };

  const steps = [
    { id: 1, name: 'Shipping', icon: <Truck size={18} /> },
    { id: 2, name: 'Payment', icon: <CreditCard size={18} /> },
    { id: 3, name: 'Confirmation', icon: <CheckCircle size={18} /> }
  ];

  if (step === 3) {
    return (
      <div className="section-padding" style={{ textAlign: 'center' }}>
        <div className="container">
          <CheckCircle size={60} strokeWidth={1} style={{ marginBottom: 'var(--spacing-md)', color: 'var(--accent)' }} />
          <h1 style={{ fontSize: '3rem', marginBottom: 'var(--spacing-sm)' }}>Order Confirmed.</h1>
          <p style={{ opacity: 0.6, maxWidth: '500px', margin: '0 auto var(--spacing-md)' }}>
            Thank you for your purchase. We are preparing your architectural pieces for shipment. You will receive an email shortly.
          </p>
          <a href="/" className="btn-primary">Return Home</a>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-page section-padding">
      <div className="container">
        <div style={{ display: 'flex', gap: 'var(--spacing-md)', marginBottom: 'var(--spacing-lg)', justifyContent: 'center' }}>
          {steps.map(s => (
            <div key={s.id} style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.5rem', 
              opacity: step >= s.id ? 1 : 0.3,
              fontWeight: step === s.id ? 700 : 400
            }}>
              {s.icon} <span>{s.name}</span>
              {s.id < 3 && <div style={{ width: '40px', height: '1px', backgroundColor: '#ddd', margin: '0 1rem' }}></div>}
            </div>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-xl)', alignItems: 'start' }}>
          {/* Form */}
          <div style={{ backgroundColor: 'var(--bg-color)', border: '1px solid var(--surface-highest)', padding: 'var(--spacing-md)' }}>
            {step === 1 ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <h2 style={{ marginBottom: '1rem' }}>Shipping Address</h2>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <input type="text" placeholder="First Name" style={inputStyle} value={address.firstName} onChange={e => setAddress({...address, firstName: e.target.value})} />
                  <input type="text" placeholder="Last Name" style={inputStyle} value={address.lastName} onChange={e => setAddress({...address, lastName: e.target.value})} />
                </div>
                <input type="text" placeholder="Address" style={inputStyle} value={address.street} onChange={e => setAddress({...address, street: e.target.value})} />
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
                  <input type="text" placeholder="City" style={inputStyle} value={address.city} onChange={e => setAddress({...address, city: e.target.value})} />
                  <input type="text" placeholder="Postcode" style={inputStyle} value={address.zip} onChange={e => setAddress({...address, zip: e.target.value})} />
                  <input type="text" placeholder="Country" style={inputStyle} value={address.country} onChange={e => setAddress({...address, country: e.target.value})} />
                </div>
                <button className="btn-primary" onClick={() => setStep(2)}>Continue to Payment</button>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <h2 style={{ marginBottom: '1rem' }}>Payment Details</h2>
                <div style={{ padding: 'var(--spacing-sm)', border: '1px solid black', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span>Credit Card</span>
                  <CreditCard size={18} />
                </div>
                <input type="text" placeholder="Card Number" style={inputStyle} />
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <input type="text" placeholder="MM / YY" style={inputStyle} />
                  <input type="text" placeholder="CVC" style={inputStyle} />
                </div>
                <button className="btn-primary" onClick={handlePlaceOrder} disabled={loading}>
                  {loading ? <Loader className="animate-spin" /> : `Pay $${subtotal}`}
                </button>
                <button style={{ fontSize: '0.9rem', opacity: 0.5 }} onClick={() => setStep(1)}>Back to Shipping</button>
              </div>
            )}
          </div>

          {/* Right Column (Summary) */}
          <div style={{ borderLeft: '1px solid #eee', paddingLeft: 'var(--spacing-lg)' }}>
            <h2 style={{ marginBottom: 'var(--spacing-md)' }}>Order Summary</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {cart.map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '1rem' }}>
                  <img src={item.image} alt={item.name} style={{ width: '60px', height: '80px', objectFit: 'cover' }} />
                  <div>
                    <p style={{ fontWeight: 700, fontSize: '0.9rem' }}>{item.name}</p>
                    <p style={{ opacity: 0.6, fontSize: '0.8rem' }}>${item.price}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: '1px solid #eee', paddingTop: '1rem', marginTop: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span>Subtotal</span>
                  <span>${subtotal}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, fontSize: '1.2rem' }}>
                  <span>Total</span>
                  <span>${subtotal}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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

export default Checkout;
