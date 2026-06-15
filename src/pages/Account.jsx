import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { supabase } from '../lib/supabase';
import { Package, Heart, Settings, LogOut, Loader } from 'lucide-react';

const Account = () => {
  const { user, profile, signOut } = useAuth();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) fetchOrders();
  }, [user]);

  const fetchOrders = async () => {
    const { data, error } = await supabase
      .from('orders')
      .select('*')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false });
    if (!error) setOrders(data);
    setLoading(false);
  };

  if (!user) return <div className="section-padding text-center">Please login to view your account.</div>;

  return (
    <div className="account-page section-padding">
      <div className="container">
        <h1 style={{ fontSize: '3rem', marginBottom: 'var(--spacing-lg)' }}>My Account</h1>
        
        <div style={{ display: 'grid', gridTemplateColumns: '250px 1fr', gap: 'var(--spacing-xl)' }}>
          <aside style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <button style={tabStyle}><Package size={18} /> Orders</button>
            <button style={{ ...tabStyle, opacity: 0.5 }}><Heart size={18} /> Wishlist</button>
            <button style={{ ...tabStyle, opacity: 0.5 }}><Settings size={18} /> Settings</button>
            <button style={{ ...tabStyle, marginTop: '2rem', color: 'red' }} onClick={signOut}><LogOut size={18} /> Logout</button>
          </aside>

          <main>
            <div style={{ backgroundColor: 'var(--surface-low)', padding: 'var(--spacing-md)', marginBottom: 'var(--spacing-lg)' }}>
              <h3>Welcome back, {profile?.full_name}</h3>
              <p style={{ opacity: 0.6, fontSize: '0.9rem' }}>Atelier Member since {new Date(user.created_at).getFullYear()}</p>
            </div>

            <h2 style={{ fontSize: '1.5rem', marginBottom: 'var(--spacing-md)' }}>Recent Orders</h2>
            {loading ? <Loader className="animate-spin" /> : orders.length === 0 ? (
              <p style={{ opacity: 0.5 }}>You haven't placed any orders yet.</p>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {orders.map(order => (
                  <div key={order.id} style={orderCardStyle}>
                    <div>
                      <p style={{ fontWeight: 700 }}>Order #AW-{order.id}</p>
                      <p style={{ fontSize: '0.8rem', opacity: 0.5 }}>{new Date(order.created_at).toLocaleDateString()}</p>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <p>${order.total}</p>
                      <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', color: order.status === 'paid' ? 'green' : 'orange' }}>
                        {order.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

const tabStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  padding: '1rem',
  borderBottom: '1px solid #eee',
  textAlign: 'left',
  width: '100%',
  fontSize: '0.9rem',
  fontWeight: 600,
  background: 'none',
  cursor: 'pointer'
};

const orderCardStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  padding: '1.5rem',
  border: '1px solid var(--surface-highest)',
  alignItems: 'center'
};

export default Account;
