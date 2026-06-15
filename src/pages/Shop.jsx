import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { Filter, Loader } from 'lucide-react';

const Shop = () => {
  const query = new URLSearchParams(useLocation().search);
  const catFilter = query.get('cat');
  
  const [filter, setFilter] = useState(catFilter || 'All');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, [filter]);

  const fetchProducts = async () => {
    setLoading(true);
    let query = supabase.from('products').select('*');
    if (filter !== 'All') {
      query = query.eq('category', filter);
    }
    const { data, error } = await query;
    if (!error) setProducts(data);
    setLoading(false);
  };

  return (
    <div className="shop-page section-padding">
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 'var(--spacing-lg)' }}>
          <div>
            <h1 style={{ fontSize: '3rem' }}>{filter} Collection</h1>
            <p style={{ opacity: 0.6 }}>Curated pieces for the modern atelier.</p>
          </div>
          <div style={{ display: 'flex', gap: 'var(--spacing-sm)', alignItems: 'center' }}>
            <span style={{ fontSize: '0.8rem', opacity: 0.5 }}>Filters</span>
            <Filter size={18} />
          </div>
        </div>

        <div style={{ display: 'flex', gap: 'var(--spacing-md)', marginBottom: 'var(--spacing-md)', overflowX: 'auto', paddingBottom: '1rem' }}>
          {['All', 'Men', 'Women', 'New Arrivals'].map(cat => (
            <button 
              key={cat}
              onClick={() => setFilter(cat)}
              style={{ 
                fontSize: '0.8rem', 
                textTransform: 'uppercase', 
                letterSpacing: '0.1em',
                opacity: filter === cat ? 1 : 0.4,
                borderBottom: filter === cat ? '1px solid black' : 'none',
                paddingBottom: '0.2rem'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {loading ? (
          <div style={{ textAlign: 'center', padding: '5rem' }}><Loader className="animate-spin" /></div>
        ) : products.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '5rem' }}>
            <p style={{ opacity: 0.5 }}>No pieces found in this collection.</p>
            {/* Seed Button for Demo */}
            <button 
              style={{ marginTop: '1rem', textDecoration: 'underline', fontSize: '0.8rem' }}
              onClick={async () => {
                const { products: mockData } = await import('../data');
                await supabase.from('products').insert(mockData.map(({id, ...rest}) => rest));
                fetchProducts();
              }}
            >
              Seed Initial Products (Demo)
            </button>
          </div>
        ) : (
          <div className="editorial-grid">
            {products.map((product, index) => (
              <motion.div 
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                style={{ gridColumn: 'span 4' }}
              >
                <Link to={`/product/${product.id}`}>
                  <div style={{ backgroundColor: 'var(--surface-low)', marginBottom: 'var(--spacing-sm)', overflow: 'hidden' }}>
                    <img src={product.image} alt={product.name} style={{ width: '100%', aspectRatio: '3/4', objectFit: 'cover' }} />
                  </div>
                  <h3 style={{ fontSize: '1rem' }}>{product.name}</h3>
                  <p style={{ opacity: 0.7 }}>${product.price}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
