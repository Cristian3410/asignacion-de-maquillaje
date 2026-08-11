import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import styles from "../NavBar/Navbar.module.css";
import { IoMdMenu } from "react-icons/io";
import logoEmpresa from "../../imgs/logoEmpresa.png"


function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <header className={styles.header}>
            <div className={styles.topBar}>
                <span className={styles.topBarText}>¡ENVIOS A TODO COLOMBIA!</span>
                <div className={styles.cartContainer}>
                    <FaShoppingCart />
                    <span>0 elementos</span>
                </div>
            </div>  

           
            <div className={styles.mainNavContainer}>
                <div className={styles.navContent}>
                    <Link to="/" className={styles.logo}>
                    <img src={logoEmpresa} className={styles.imgLogo}>
                    </img>
                    </Link>

                    <nav className={styles.desktopMenu}>
                        <Link to="/">Inicio</Link>
                        <Link to="/trendy">Trendy</Link>
                        <Link to="/bloomshell">Bloomshell</Link>
                        <Link to="/ruby-rose">Ruby Rose</Link>
                        <Link to="/kevin-coco">Kevin&Coco</Link>
                        <Link to="/engol">Engol</Link>
                        <Link to="/tienda">Tienda</Link>
                    </nav>

                    {/* Corregido de Accions a actions */}
                    <div className={styles.actions}>
                        <button className={styles.iconButton} aria-label="Buscar">
                            <FaSearch />
                        </button>

                        <button className={`${styles.iconButton} ${styles.menuButton}`} onClick={toggleMenu} aria-label="Menú">
                            {isOpen ? <IoClose size={20} /> : <IoMdMenu size={20} />}          
                        </button>
                    </div>
                </div>
            </div>
             
            {/* Menú desplegable móvil */}
            {isOpen && (
                <div className={styles.mobileMenu}>
                    <Link to="/" onClick={toggleMenu}>Inicio</Link>
                    <Link to="/trendy" onClick={toggleMenu}>Trendy</Link>
                    <Link to="/bloomshell" onClick={toggleMenu}>Bloomshell</Link>
                    <Link to="/ruby-rose" onClick={toggleMenu}>Ruby Rose</Link>
                    <Link to="/kevin-coco" onClick={toggleMenu}>Kevin&Coco</Link>
                    <Link to="/engol" onClick={toggleMenu}>Engol</Link>
                    <Link to="/tienda" onClick={toggleMenu}>Tienda</Link>
                </div>
            )} 
        </header>
    );
}

export default NavBar;