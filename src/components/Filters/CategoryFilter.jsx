import React, { useState } from 'react';
import styles from './CategoryFilters.module.css';
import { WiStars } from "react-icons/wi";
import { AiFillFire } from "react-icons/ai";
import { GiMasonJar } from "react-icons/gi";
import { TbEyeStar } from "react-icons/tb";
import { GiLipstick } from "react-icons/gi";
import { MdFace3 } from "react-icons/md";
import { BsGrid3X3, BsListUl } from 'react-icons/bs';


const categories = [
  { id: 'all', label: ' Todos' , icon:<WiStars/>},
  { id: 'ofertas', label: 'Ofertas y Más Vendidos', icon:<AiFillFire/> },
  { id: 'cremas', label: ' Cremas y Cuidado', icon:<GiMasonJar /> },
  { id: 'sombras', label: ' Sombras y Ojos' ,icon:<TbEyeStar /> },
  { id: 'labiales', label: 'Labiales', icon:<GiLipstick /> },
  { id: 'rostro', label: ' Rostro y Base', icon:<MdFace3 /> },
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
        
        {/* Botón con iconos para alternar vista */}
        <button className={styles.viewToggleBtn} onClick={onToggleView}>
          {isSingleRow ? (
            <>
              <BsGrid3X3 /> <span>Vista Cuadrícula</span>
            </>
          ) : (
            <>
              <BsListUl /> <span>Vista en Hilera</span>
            </>
          )}
        </button>
      </div>

      <div className={styles.filtersContainer}>
        {categories.map((cat) => (
          <button
            key={cat.id}
            className={`${styles.filterButton} ${active === cat.id ? styles.activeFilter : ''}`}
            onClick={() => handleClick(cat.id)}
          >
            <span className={styles.filterIcon}>{cat.icon}</span>
            <span>{cat.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilters;