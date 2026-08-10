import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      {/* Franja Superior con Redes Sociales */}
      <div className={styles.socialBar}>
        <div className={styles.socialIcons}>
          <a href="#whatsapp" className={styles.iconCircle} aria-label="WhatsApp">
            <i className="fab fa-whatsapp"></i> 💬
          </a>
          <a href="#instagram" className={styles.iconCircle} aria-label="Instagram">
            <i className="fab fa-instagram"></i> 📸
          </a>
          <a href="#facebook" className={styles.iconCircle} aria-label="Facebook">
            <i className="fab fa-facebook-f"></i> 📘
          </a>
          <a href="#tiktok" className={styles.iconCircle} aria-label="TikTok">
            <i className="fab fa-tiktok"></i> 🎵
          </a>
        </div>
      </div>

      {/* Contenido Principal del Footer (Columnas) */}
      <div className={styles.footerContent}>
        <div className={styles.footerColumn}>
          <h3 className={styles.columnTitle}>CONTÁCTANOS</h3>
          <p className={styles.footerText}>pedidoswebglamreebel@gmail.com</p>
          <p className={styles.footerText}>serviciosalclienteglamreebel@gmail.com</p>
        </div>

        <div className={styles.footerColumn}>
          <h3 className={styles.columnTitle}>CONÓCENOS</h3>
          <ul className={styles.footerLinks}>
            <li><a href="#quienes-somos">Quienes Somos</a></li>
            <li><a href="#faq">Preguntas Frecuentes</a></li>
          </ul>
        </div>

        <div className={styles.footerColumn}>
          <h3 className={styles.columnTitle}>MÉTODOS DE PAGO</h3>
          <div className={styles.paymentMethods}>
            <span className={styles.payBadge}>VISA</span>
            <span className={styles.payBadge}>Mastercard</span>
            <span className={styles.payBadge}>Maestro</span>
            <span className={styles.payBadge}>Bancontact</span>
          </div>
        </div>
      </div>

      {/* Franja Inferior de Copyright */}
      <div className={styles.bottomBar}>
        <p className={styles.copyrightText}>
          &copy; 2026 Glam Reebel. "Actitud en cada detalle. Todos los derechos reservados." |{' '}
          <a href="#privacidad" className={styles.legalLink}>Políticas de Privacidad</a> |{' '}
          <a href="#terminos" className={styles.legalLink}>Términos y Condiciones</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;