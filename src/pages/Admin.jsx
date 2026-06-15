import React, { useState, useEffect } from 'react';
import { LayoutDashboard, ShoppingCart, PlusCircle, Users, Loader, Edit, Trash2 } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { useAuth } from '../context/AuthContext';

const Admin = () => {
  const { profile } = useAuth();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: '', price: '', category: 'Men', description: '', image: '', specs: '', sizes: []
  });

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    setLoading(true);
    const { data, error } = await supabase.from('products').select('*').order('created_at', { ascending: false });
    if (!error) setProducts(data);
    setLoading(false);
  };

  const handleAddProduct = async (e) => {
    e.preventDefault();
    const { error } = await supabase.from('products').insert([newProduct]);
    if (!error) {
      setShowAddForm(false);
      fetchProducts();
      setNewProduct({ name: '', price: '', category: 'Men', description: '', image: '', specs: '', sizes: [] });
    } else {
      alert('Error adding product: ' + error.message);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this piece?')) {
      const { error } = await supabase.from('products').delete().eq('id', id);
      if (!error) fetchProducts();
    }
  };

  if (profile?.role !== 'admin') {
    return (
      <div className="section-padding text-center">
        <h1>Access Denied</h1>
        <p>This atelier section is reserved for administrators.</p>
        <a href="/" style={{ textDecoration: 'underline' }}>Return to Shop</a>
      </div>
    );
  }

  return (
    <div className="admin-page section-padding" style={{ backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
      <div className="container">
        <h1 style={{ fontSize: '2.5rem', marginBottom: 'var(--spacing-lg)' }}>Atelier Dashboard</h1>
        
        <div style={{ display: 'grid', gridTemplateColumns: '250px 1fr', gap: 'var(--spacing-xl)' }}>
          <aside style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <div style={adminNavLink}><LayoutDashboard size={18} /> Overview</div>
            <div style={adminNavLink}><ShoppingCart size={18} /> Inventory</div>
            <div style={{ ...adminNavLink, backgroundColor: 'var(--primary)', color: 'white' }} onClick={() => setShowAddForm(true)}>
              <PlusCircle size={18} /> Add Product
            </div>
          </aside>

          <main style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-lg)' }}>
            {showAddForm && (
              <div style={{ backgroundColor: 'white', padding: 'var(--spacing-md)', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
                <h3>Add New Architectural Piece</h3>
                <form onSubmit={handleAddProduct} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1rem' }}>
                  <input type="text" placeholder="Product Name" style={inputStyle} value={newProduct.name} onChange={e => setNewProduct({...newProduct, name: e.target.value})} required />
                  <input type="number" placeholder="Price" style={inputStyle} value={newProduct.price} onChange={e => setNewProduct({...newProduct, price: e.target.value})} required />
                  <select style={inputStyle} value={newProduct.category} onChange={e => setNewProduct({...newProduct, category: e.target.value})}>
                    <option value="Men">Men</option>
                    <option value="Women">Women</option>
                    <option value="New Arrivals">New Arrivals</option>
                  </select>
                  <input type="text" placeholder="Image URL" style={inputStyle} value={newProduct.image} onChange={e => setNewProduct({...newProduct, image: e.target.value})} />
                  <textarea placeholder="Description" style={{ ...inputStyle, gridColumn: 'span 2' }} value={newProduct.description} onChange={e => setNewProduct({...newProduct, description: e.target.value})} />
                  <div style={{ gridColumn: 'span 2', display: 'flex', gap: '1rem' }}>
                    <button type="submit" className="btn-primary">Save Product</button>
                    <button type="button" onClick={() => setShowAddForm(false)} style={{ opacity: 0.5 }}>Cancel</button>
                  </div>
                </form>
              </div>
            )}

            <div style={{ backgroundColor: 'white', padding: 'var(--spacing-md)', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
              <h3 style={{ marginBottom: '1.5rem' }}>Product Inventory</h3>
              {loading ? <Loader className="animate-spin" /> : (
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ textAlign: 'left', borderBottom: '2px solid #eee' }}>
                      <th style={{ padding: '1rem 0' }}>Product</th>
                      <th>Category</th>
                      <th>Price</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map(p => (
                      <tr key={p.id} style={{ borderBottom: '1px solid #eee' }}>
                        <td style={{ padding: '1rem 0', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                          <img src={p.image} alt="" style={{ width: '40px', height: '40px', objectFit: 'cover' }} />
                          {p.name}
                        </td>
                        <td>{p.category}</td>
                        <td>${p.price}</td>
                        <td style={{ display: 'flex', gap: '1rem' }}>
                          <button><Edit size={16} opacity={0.5} /></button>
                          <button onClick={() => handleDelete(p.id)}><Trash2 size={16} color="red" opacity={0.5} /></button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

const adminNavLink = {
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  padding: '1rem',
  fontSize: '0.9rem',
  cursor: 'pointer'
};

const inputStyle = {
  padding: '0.8rem',
  border: '1px solid #eee',
  fontSize: '0.9rem',
  outline: 'none',
  width: '100%'
};

export default Admin;
