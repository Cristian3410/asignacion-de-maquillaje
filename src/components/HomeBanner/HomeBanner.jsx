import React, { useState, useEffect } from 'react';
import styles from './HomeBanner.module.css';

// Importaciones de imágenes para Desktop
import banner1Desktop from "../../imgs/imagenPrueba1.jpg";
import banner2Desktop from "../../imgs/imagenPrueba2.jpg";
import banner3Desktop from "../../imgs/imagenPrueba3.jpg";

// Importaciones de imágenes para Móvil
import banner1Mobile from "../../imgs/imagenPrueba1.jpg";
import banner2Mobile from "../../imgs/imagenPrueba2.jpg";
import banner3Mobile from "../../imgs/imagenPrueba3.jpg";

const HomeBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const desktopImages = [banner1Desktop, banner2Desktop, banner3Desktop];
  const mobileImages = [banner1Mobile, banner2Mobile, banner3Mobile];

  // Efecto para cambiar de imagen automáticamente cada 4 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % desktopImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [desktopImages.length]);

  return (
    <section className={styles.bannerContainer}>
      {/* Contenedor deslizante con movimiento fluido */}
      <div 
        className={styles.sliderWrapper} 
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {desktopImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Banner Desktop ${index + 1}`}
            className={styles.bannerImage}
          />
        ))}
      </div>

      {/* PUNTITOS INDICADORES (Dots) */}
      <div className={styles.dotsContainer}>
        {desktopImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`${styles.dot} ${currentIndex === index ? styles.activeDot : ''}`}
            aria-label={`Ir a diapositiva ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HomeBanner;