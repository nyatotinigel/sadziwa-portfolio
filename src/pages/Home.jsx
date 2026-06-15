import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { products } from '../data';

const Home = () => {
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero" style={{ 
        height: '90vh', 
        position: 'relative', 
        overflow: 'hidden',
        backgroundColor: 'var(--surface-high)' 
      }}>
        <div style={{ 
          position: 'absolute', 
          inset: 0, 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center' 
        }}>
          <motion.img 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=2000" 
            alt="Hero Fashion" 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
        <div className="container" style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center' }}>
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            style={{ maxWidth: '600px', color: 'white' }}
          >
            <h1 style={{ fontSize: '4rem', marginBottom: 'var(--spacing-sm)', color: 'white' }}>The Digital Atelier</h1>
            <p style={{ fontSize: '1.2rem', marginBottom: 'var(--spacing-md)', opacity: 0.9 }}>
              Curated architectural pieces for the modern silhouette.
            </p>
            <Link to="/shop" className="btn-primary" style={{ backgroundColor: 'white', color: 'black' }}>
              Explore Collection
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="section-padding">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-lg)' }}>
            <h2 style={{ fontSize: '2.5rem' }}>Featured Pieces</h2>
            <p style={{ opacity: 0.6 }}>Hand-selected highlights from our Autumn/Winter atelier.</p>
          </div>
          
          <div className="editorial-grid">
            {featuredProducts.map((product, index) => (
              <motion.div 
                key={product.id}
                whileHover={{ y: -10 }}
                style={{ 
                  gridColumn: index % 2 === 0 ? 'span 4' : 'span 4',
                  marginTop: index === 1 ? 'var(--spacing-lg)' : '0'
                }}
              >
                <Link to={`/product/${product.id}`}>
                  <div style={{ backgroundColor: 'var(--surface-low)', overflow: 'hidden', marginBottom: 'var(--spacing-sm)' }}>
                    <img src={product.image} alt={product.name} style={{ width: '100%', aspectRatio: '3/4', objectFit: 'cover' }} />
                  </div>
                  <h3 style={{ fontSize: '1rem', marginBottom: '0.2rem' }}>{product.name}</h3>
                  <p style={{ opacity: 0.7 }}>${product.price}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story Snippet */}
      <section style={{ backgroundColor: 'var(--primary)', color: 'white', padding: 'var(--spacing-xl) 0' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-lg)', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: '300px' }}>
            <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1000" alt="Atelier" style={{ width: '100%', height: '400px', objectFit: 'cover' }} />
          </div>
          <div style={{ flex: 1, minWidth: '300px' }}>
            <h2 style={{ color: 'white', fontSize: '2.5rem', marginBottom: 'var(--spacing-md)' }}>A Legacy of Precision</h2>
            <p style={{ fontSize: '1.1rem', opacity: 0.8, marginBottom: 'var(--spacing-md)' }}>
              AURAWEAR was founded on the principle that clothing is architecture for the body. We reject the fast-fashion cycle in favor of enduring pieces crafted with architectural rigor and premium materials.
            </p>
            <Link to="/about" style={{ color: 'white', textDecoration: 'underline', textUnderlineOffset: '8px' }}>
              Learn About Our Atelier
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
