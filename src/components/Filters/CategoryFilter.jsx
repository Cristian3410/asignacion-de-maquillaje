import React, { useState } from 'react';
import styles from './CategoryFilters.module.css';

const categories = [
  { id: 'all', label: '✨ Todos' },
  { id: 'ofertas', label: '🔥 Ofertas y Más Vendidos' },
  { id: 'cremas', label: '🧴 Cremas y Cuidado' },
  { id: 'sombras', label: '👁️ Sombras y Ojos' },
  { id: 'labiales', label: '💄 Labiales' },
  { id: 'rostro', label: '✨ Rostro y Base' },
];

const CategoryFilters = ({ onSelectCategory, onToggleView, isSingleRow }) => {
  const [active, setActive] = useState('all');

  const handleClick = (id) => {
    setActive(id);
    if (onSelectCategory) {
      onSelectCategory(id);
    }
  };

  return (
    <div className={styles.filterSection}>
      <div className={styles.filterHeader}>
        <h3 className={styles.filterTitle}>Explora por categoría</h3>
        {/* Botón opcional para alternar diseño de vista */}
        <button className={styles.viewToggleBtn} onClick={onToggleView}>
          {isSingleRow ? '🔲 Vista Cuadrícula' : '📑 Vista en Hilera'}
        </button>
      </div>

      <div className={styles.filtersContainer}>
        {categories.map((cat) => (
          <button
            key={cat.id}
            className={`${styles.filterButton} ${active === cat.id ? styles.activeFilter : ''}`}
            onClick={() => handleClick(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilters;