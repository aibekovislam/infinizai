import React, { useState } from 'react';
import styles from './Navbar.module.css';
import LogoSVG from '../assets/SVG_images/Logo.svg';
import CartSVG from '../assets/SVG_images/Cart.svg';
import MenuSVG from '../assets/SVG_images/Menu.svg';

const Navbar = () => {
  // Часть кода для того чтобы добавить для navigation active класс
  const [activeNav, setActiveNav] = useState(null);

  // Функция для того чтобы добавить active класс и убрать
  const toggleActiveNav = (navItem: any) => {
    setActiveNav((prevActiveNav) => (prevActiveNav === navItem ? null : navItem));
  };

  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  const toggleBurgerMenu = () => {
    setIsBurgerMenuOpen((prevIsOpen) => !prevIsOpen);
  };


  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.navbar__items}>
          <div className={styles.navbar__item_logo}>
            <div className={styles.logo}>
              <img src={LogoSVG} alt="Logo" />
            </div>
          </div>
          <div className={styles.navbar__item_menu}>
            <div className={styles.menu} onClick={toggleBurgerMenu}>
              <img src={MenuSVG} alt="Menu" />
            </div>
          </div>
          <div className={`${styles.navbar__item_nav}`}>
            <ul className={styles.navigation}>
              <li onClick={() => toggleActiveNav('home')}>
                <a className={activeNav === 'home' ? styles.active : ''} href="#">
                  Home
                </a>
              </li>
              <li onClick={() => toggleActiveNav('about')}>
                <a className={activeNav === 'about' ? styles.active : ''} href="#">
                  About
                </a>
              </li>
              <li onClick={() => toggleActiveNav('team')}>
                <a className={activeNav === 'team' ? styles.active : ''} href="#">
                  Team
                </a>
              </li>
              <li onClick={() => toggleActiveNav('shop')}>
                <a className={activeNav === 'shop' ? styles.active : ''} href="#">
                  Shop
                </a>
              </li>
              <li onClick={() => toggleActiveNav('pages')}>
                <a className={activeNav === 'pages' ? styles.active : ''} href="#">
                  Pages
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.navbar__item_btn}>
            <div className={styles.cart_and_btn__block}>
              <img src={CartSVG} alt="Cart" className={styles.cart} />
              <button className={styles.navbar__btn}>Contact Us</button>
            </div>
          </div>
        </div>
        <div className={`${styles.mobile_nav} ${isBurgerMenuOpen ? styles.open : ''}`}>
          <ul className={styles.navigation}>
              <li onClick={() => toggleActiveNav('home')}>
                <a className={activeNav === 'home' ? styles.active : ''} href="#">
                  Home
                </a>
              </li>
              <li onClick={() => toggleActiveNav('about')}>
                <a className={activeNav === 'about' ? styles.active : ''} href="#">
                  About
                </a>
              </li>
              <li onClick={() => toggleActiveNav('team')}>
                <a className={activeNav === 'team' ? styles.active : ''} href="#">
                  Team
                </a>
              </li>
              <li onClick={() => toggleActiveNav('shop')}>
                <a className={activeNav === 'shop' ? styles.active : ''} href="#">
                  Shop
                </a>
              </li>
              <li onClick={() => toggleActiveNav('pages')}>
                <a className={activeNav === 'pages' ? styles.active : ''} href="#">
                  Pages
                </a>
              </li>
           </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
