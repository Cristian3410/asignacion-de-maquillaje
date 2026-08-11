import React from 'react';
import styles from './Footer.module.css';
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoTiktok } from "react-icons/io5";
import visa from "../../imgs/visafinal.png"
import cardMaster from "../../imgs/masterdcardfinal.png"
import maestro from "../../imgs/masterfinal.png"
import banco from "../../imgs/imagenFinalFinal.png"


const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
    
      <div className={styles.socialBar}>
        <div className={styles.socialIcons}>
          <a href="#whatsapp" className={styles.iconCircle} aria-label="WhatsApp">
            <FaWhatsapp />
          </a>
          <a href="#instagram" className={styles.iconCircle} aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="#facebook" className={styles.iconCircle} aria-label="Facebook">
           <FaFacebookF />
          </a>
          <a href="#tiktok" className={styles.iconCircle} aria-label="TikTok">
            <IoLogoTiktok />
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
  <img src={visa} className={styles.paymentImg} alt="Visa" />
  <img src={cardMaster} className={styles.paymentImg} alt="Mastercard" />
  <img src={maestro} className={styles.paymentImg} alt="Maestro" />
  <img src={banco} className={styles.bancoImg} alt="Bancontact" /> {/* <-- Clase especial aquí */}
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