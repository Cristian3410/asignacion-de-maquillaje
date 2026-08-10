import React, { useState } from 'react';
import HomeBanner from '../HomeBanner/HomeBanner';
import Filters from '../Filters/CategoryFilter';
import ProductDetail from '../products/ProductDetail';
import Newsletter from '../Newsletter/Newsletter';
import Footer from '../footer/FooterPage';
import styles from './HomePage.module.css';
import FeaturedVideoSection from '../FeautersVideo/FeautersVideo.jsx';

const ALL_PRODUCTS = [
  { id: 1, name: 'Crema Hidratante Facial Glow', category: 'cremas', brand: 'Trendy', price: 45000, oldPrice: 50000, description: 'Hidratación profunda con efecto luminoso instantáneo.', isBestSeller: true, badge: '¡Más Vendido!' },
  { id: 2, name: 'Paleta de Sombras Nude Eyes', category: 'sombras', brand: 'Ruby Rose', price: 68000, oldPrice: 75000, description: 'Alta pigmentación y tonos versátiles para cualquier ocasión.', isBestSeller: true, badge: '¡Oferta!' },
  { id: 3, name: 'Labial Mate Terciopelo', category: 'labiales', brand: 'Bloomshell', price: 25000, oldPrice: null, description: 'Acabado mate de larga duración que no reseca tus labios.', isBestSeller: false },
  { id: 4, name: 'Base Líquida Alta Cobertura', category: 'rostro', brand: 'Engol', price: 52000, oldPrice: 60000, description: 'Cobertura impecable y acabado mate natural todo el día.', isBestSeller: true, badge: '¡Oferta!' },
  { id: 5, name: 'Contorno en Crema Duo', category: 'cremas', brand: 'Kevin&Coco', price: 41000, oldPrice: null, description: 'Define y resalta tus facciones fácilmente.', isBestSeller: false },
  { id: 6, name: 'Sombras Glitter Líquidas', category: 'sombras', brand: 'Trendy', price: 34000, oldPrice: 40000, description: 'Brillo intenso de secado rápido que no se cuartea.', isBestSeller: true, badge: '¡Nuevo!' },
];

const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isSingleRow, setIsSingleRow] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts = ALL_PRODUCTS.filter(product => {
    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'ofertas') return product.isBestSeller;
    return product.category === selectedCategory;
  });

  if (selectedProduct) {
    return (
      <div className={styles.homeContainer}>
        <ProductDetail 
          product={selectedProduct} 
          onBack={() => setSelectedProduct(null)} 
          onAddToCart={(prod, qty) => {
            alert(`Se añadieron ${qty} unidad(es) de ${prod.name} al carrito.`);
          }}
        />
        <Footer />
      </div>
    );
  }

  return (
    <div className={styles.homeContainer}>
      <HomeBanner />

      <Filters 
        onSelectCategory={(catId) => setSelectedCategory(catId)} 
        onToggleView={() => setIsSingleRow(!isSingleRow)}
        isSingleRow={isSingleRow}
      />

      <section className={styles.productsSection}>
        <h2 className={styles.sectionTitle}>
          {selectedCategory === 'all' && 'Productos Destacados'}
          {selectedCategory === 'ofertas' && '🔥 Ofertas y Más Vendidos'}
          {selectedCategory !== 'all' && selectedCategory !== 'ofertas' && `Categoría: ${selectedCategory}`}
        </h2>

        <div className={isSingleRow ? styles.productsSingleRow : styles.productsGrid}>
          {filteredProducts.length > 0 ? (
            filteredProducts.map(product => (
              <div 
                key={product.id} 
                className={styles.productCard}
                onClick={() => setSelectedProduct(product)}
                style={{ cursor: 'pointer' }}
              >
                <div className={styles.productImagePlaceholder}>
                  <span>{product.brand}</span>
                  {product.badge && <span className={styles.badgeOffer}>{product.badge}</span>}
                </div>
                <div className={styles.productInfo}>
                  <span className={styles.productCategory}>{product.brand} • {product.category}</span>
                  <h3 className={styles.productName}>{product.name}</h3>
                  <p className={styles.productPrice}>${product.price.toLocaleString()}</p>
                </div>
              </div>
            ))
          ) : (
            <p style={{ gridColumn: '1 / -1', textAlign: 'center', color: '#6b7280', padding: '3rem 0' }}>
              No hay productos disponibles en esta sección por el momento.
            </p>
          )}
        </div>
      </section>
<FeaturedVideoSection 
        onAddToCart={(product) => {
          alert(`¡${product.name} agregado al carrito con éxito!`);
        }} 
      />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default HomePage;