import React from 'react';
import styles from '../FeautersVideo/FeaturedVideoSection.module.css';

const FeaturedVideoSection = ({ onAddToCart }) => {
  const product = {
    name: 'BLOOM PLUMPING PRIMER',
    price: '$ 22.000',
    category: 'PRIMER VOLUMINIZADOR',
  };

  const handleAdd = () => {
    if (onAddToCart) {
      onAddToCart(product);
    } else {
      alert(`¡${product.name} añadido al carrito!`);
    }
  };

  return (
    <section className={styles.showcaseSection}>
      <div className={styles.showcaseContainer}>
        
        {/* Columna Izquierda: Video o Reel de Demostración */}
        <div className={styles.videoWrapper}>
          <div className={styles.videoPlaceholder}>
            {/* Aquí puedes reemplazar este div o usar una etiqueta <video> */}
            <div className={styles.playOverlay}>
              <span className={styles.playIcon}>▶</span>
            </div>
            <span className={styles.videoCaption}>✨ Mira el producto en acción</span>
          </div>
        </div>

        {/* Columna Derecha: Tarjeta de Producto Destacado con Fondo Rosa */}
        <div className={styles.productCardBox}>
          <div className={styles.innerCard}>
            <div className={styles.productImageContainer}>
              <span className={styles.categoryBadge}>{product.category}</span>
            </div>
            
            <h3 className={styles.productTitle}>{product.name}</h3>
            <p className={styles.productPrice}>{product.price}</p>
            
            <button className={styles.addButton} onClick={handleAdd}>
              AGREGAR
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};


export default FeaturedVideoSection;