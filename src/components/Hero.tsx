import React from 'react'
import styles from './Hero.module.css';
import FireSVG from '../assets/SVG_images/Fire.svg';

function Hero() {
  return (
    <div className={styles.hero}>
        <div className={styles.hero__items}>
            <div className={styles.hero__item}>
                <ul className={styles.vertical__navigation_for_social_media}>
                    <li>facebook</li>
                    <li>instagram</li>
                    <li>twitch</li>
                </ul>
            </div>
            <div className={styles.hero__item__block}>
                <div className={styles.hero__item}>
                    <div className={styles.hero__info_block}>
                        <div className={styles.fire__and__text}>
                            <img src={FireSVG} className={styles.fire} />
                            <span className={styles.text}>future of sports</span>
                        </div>
                        <div className={styles.hero__main_items}>
                            <div className={styles.hero__title}>
                                Unleash the Next Generation of Gaming
                                <svg className={styles.lineSVG} width="435" height="16" viewBox="0 0 435 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path className={styles.underline} d="M2.5 13.9265C33.1667 4.92648 162.1 -7.67352 432.5 13.9265" stroke="#FDD048" strokeWidth="4" strokeLinecap="round"/>
                                </svg>
                            </div>
                            <p className={styles.hero__text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis, nec donec in morbi pulvinar. Enim non pulvinar neque.</p>
                            <div className={styles.hero__btns}>
                                <button className={styles.btn__styled}>Explore More</button>
                                <button className={styles.btn__regular}>View our team</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.hero__item}>
                    <div className={styles.hero__img}>
                        <img src={require("../assets/images/hero__image.png")} />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero