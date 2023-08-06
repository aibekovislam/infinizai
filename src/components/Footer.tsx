import React from 'react';
import styles from './Footer.module.css';
import LogoSVG from '../assets/SVG_images/Logo.svg';

function Footer() {
  return (
    <footer className={styles.footer}>
        <div className={styles.container}>
            <div className={styles.footer__items}>
                <div className={styles.footer__item_logo_and_text}>
                    <div className={styles.logo}>
                        <img src={LogoSVG} />
                    </div>
                    <div className={styles.text}>Lorem ipsum dolor amet, consectetur adipiscing elit. Eget nisl nunc quam ac sed turpis volutpat. Cursus sed massa non .</div>
                </div>
                <div className={styles.footer__item}>
                    <ul className={styles.footer_nav}>
                        <div className={styles.named_nav}>Menu Items</div>
                        <li>About</li>
                        <li>Blog</li>
                        <li>Shop</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div className={styles.footer__item}>
                    <ul className={styles.footer_nav}>
                        <div className={styles.named_nav}>Other Pages</div>
                        <li>Styleguide</li>
                        <li>Changelog</li>
                        <li>licenses</li>
                        <li>Team</li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer