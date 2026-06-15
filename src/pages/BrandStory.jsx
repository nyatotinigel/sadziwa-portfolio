import React from 'react';
import { motion } from 'framer-motion';

const BrandStory = () => {
  return (
    <div className="brand-story section-padding">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto var(--spacing-xl)' }}
        >
          <h1 style={{ fontSize: '4rem', marginBottom: '2rem' }}>Aura Elegance</h1>
          <p style={{ fontSize: '1.4rem', opacity: 0.8, lineHeight: 1.8 }}>
            We believe that true luxury lies in the unseen. The way a sleeve breaks at the wrist, the structural integrity of a shoulder, the tactile whisper of premium wool.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-xl)', alignItems: 'center' }}>
          <img src="https://images.unsplash.com/photo-1558222218-b7b54eede3f3?auto=format&fit=crop&q=80&w=1000" alt="Craftsmanship" style={{ width: '100%', aspectRatio: '1/1', objectFit: 'cover' }} />
          <div>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Architectural Rigor</h2>
            <p style={{ opacity: 0.7, marginBottom: '1rem' }}>
              Every AURAWEAR piece begins with a mathematical approach to pattern cutting. We don't just follow trends; we study the human form as a landscape that requires both support and freedom.
            </p>
            <p style={{ opacity: 0.7 }}>
              Our atelier in Northern Italy works exclusively with deadstock fabrics from the world's finest mills, ensuring that every garment has a history and a future.
            </p>
          </div>
        </div>

        <div style={{ marginTop: 'var(--spacing-xl)', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: 'var(--spacing-md)' }}>Join the Atelier</h2>
          <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center' }}>
            <div style={{ textAlign: 'left' }}>
              <span style={{ fontSize: '3rem', fontWeight: 700 }}>01</span>
              <p style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.8rem' }}>Precision</p>
            </div>
            <div style={{ textAlign: 'left' }}>
              <span style={{ fontSize: '3rem', fontWeight: 700 }}>02</span>
              <p style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.8rem' }}>Longevity</p>
            </div>
            <div style={{ textAlign: 'left' }}>
              <span style={{ fontSize: '3rem', fontWeight: 700 }}>03</span>
              <p style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.8rem' }}>Ethics</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandStory;
