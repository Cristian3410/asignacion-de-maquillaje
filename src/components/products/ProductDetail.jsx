import React, { useState } from 'react';
import styles from './ProductDetail.module.css';

const ProductDetail = ({ product, onAddToCart, onBack }) => {
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  // Producto por defecto para pruebas si no se pasa uno por props
  const currentProduct = product || {
    id: 1,
    name: 'Paleta de Sombras Radiant Eyes 12 Tonos',
    brand: 'Ruby Rose',
    category: 'Sombras y Ojos',
    price: 43000,
    oldPrice: 44000,
    description: 'Desde un maquillaje natural hasta un look glam con brillo intenso, esta paleta será tu aliada perfecta para cualquier ocasión. Alta pigmentación y larga duración.',
    badge: '¡Oferta!',
  };

  const handleIncrement = () => setQuantity(prev => prev + 1);
  const handleDecrement = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  const handleAdd = () => {
    setAdded(true);
    if (onAddToCart) onAddToCart(currentProduct, quantity);
    setTimeout(() => setAdded(false), 2500);
  };

  return (
    <div className={styles.detailContainer}>
      {/* Botón para volver atrás si se desea */}
      {onBack && (
        <button className={styles.backButton} onClick={onBack}>
          ← Volver a la tienda
        </button>
      )}

      <div className={styles.productGrid}>
        {/* Columna de la Imagen */}
        <div className={styles.imageWrapper}>
          {currentProduct.badge && (
            <span className={styles.offerBadge}>{currentProduct.badge}</span>
          )}
          <div className={styles.imagePlaceholder}>
            <span className={styles.brandTag}>{currentProduct.brand}</span>
          </div>
        </div>

        {/* Columna de Información y Compra */}
        <div className={styles.infoWrapper}>
          <span className={styles.categorySub}>{currentProduct.brand} • {currentProduct.category}</span>
          <h1 className={styles.productTitle}>{currentProduct.name}</h1>

          <div className={styles.priceContainer}>
            {currentProduct.oldPrice && (
              <span className={styles.oldPrice}>${currentProduct.oldPrice.toLocaleString()}</span>
            )}
            <span className={styles.currentPrice}>${currentProduct.price.toLocaleString()}</span>
          </div>

          <p className={styles.description}>{currentProduct.description}</p>

          {/* Selector de Cantidad y Botones de Acción */}
          <div className={styles.actionsContainer}>
            <div className={styles.quantitySelector}>
              <button className={styles.qtyBtn} onClick={handleDecrement}>-</button>
              <span className={styles.qtyNumber}>{quantity}</span>
              <button className={styles.qtyBtn} onClick={handleIncrement}>+</button>
            </div>

            <button 
              className={`${styles.addCartBtn} ${added ? styles.addedSuccess : ''}`} 
              onClick={handleAdd}
            >
              {added ? '✓ ¡Añadido al carrito!' : 'Añadir al carrito 🛍️'}
            </button>
          </div>

          <button className={styles.viewCartBtn} onClick={() => alert('Redirigiendo al carrito...')}>
            Ver Carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;