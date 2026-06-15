import React, { useContext, useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { supabase } from '../lib/supabase';
import { CartContext } from '../App';
import { ChevronRight, ArrowLeft, Loader } from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedSize, setSelectedSize] = useState(null);

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const fetchProduct = async () => {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('id', id)
      .single();
    if (!error) setProduct(data);
    setLoading(false);
  };

  if (loading) return <div style={{ textAlign: 'center', padding: '10rem' }}><Loader className="animate-spin" /></div>;
  if (!product) return <div style={{ textAlign: 'center', padding: '10rem' }}>Product Not Found</div>;

  return (
    <div className="product-detail section-padding">
      <div className="container">
        <Link to="/shop" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: 'var(--spacing-md)', fontSize: '0.9rem', opacity: 0.6 }}>
          <ArrowLeft size={16} /> Back to Collection
        </Link>
        
        <div style={{ display: 'flex', gap: 'var(--spacing-lg)', flexWrap: 'wrap' }}>
          {/* Images */}
          <div style={{ flex: '1.2', minWidth: '300px' }}>
            <motion.img 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              src={product.image} 
              alt={product.name} 
              style={{ width: '100%', height: 'auto', objectFit: 'cover' }} 
            />
          </div>

          {/* Details */}
          <div style={{ flex: '1', minWidth: '300px', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
            <div>
              <h1 style={{ fontSize: '3rem', lineHeight: 1.1 }}>{product.name}</h1>
              <p style={{ fontSize: '1.5rem', opacity: 0.8, marginTop: 'var(--spacing-sm)' }}>${product.price}</p>
            </div>

            <p style={{ fontSize: '1.1rem', opacity: 0.7 }}>{product.description}</p>
            
            <div style={{ padding: 'var(--spacing-sm)', backgroundColor: 'var(--surface-low)' }}>
              <h4 style={{ fontSize: '0.8rem', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Specifications</h4>
              <p style={{ fontSize: '0.9rem', opacity: 0.6 }}>{product.specs}</p>
            </div>

            {product.sizes && product.sizes.length > 0 && (
              <div>
                <h4 style={{ fontSize: '0.8rem', textTransform: 'uppercase', marginBottom: '1rem' }}>Select Size</h4>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  {product.sizes.map(size => (
                    <button 
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      style={{ 
                        width: '50px', 
                        height: '50px', 
                        border: selectedSize === size ? '1px solid black' : '1px solid #ddd',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '0.9rem'
                      }}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <button 
              className="btn-primary" 
              onClick={() => addToCart(product)}
              disabled={product.sizes?.length > 0 && !selectedSize}
              style={{ padding: '1.5rem', opacity: (product.sizes?.length > 0 && !selectedSize) ? 0.5 : 1 }}
            >
              {(product.sizes?.length > 0 && !selectedSize) ? 'Select a Size' : 'Add to Bag'}
            </button>

            <div style={{ marginTop: 'var(--spacing-md)', borderTop: '1px solid #eee', paddingTop: 'var(--spacing-md)' }}>
              <Link to="/about" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.9rem' }}>Traceability & Ethics</span>
                <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
