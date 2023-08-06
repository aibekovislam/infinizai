import React, { useState } from 'react';
import styles from './Section_one.module.css';
import FireSVG from '../assets/SVG_images/Fire.svg';

function Section_one() {
  const [activeNav, setActiveNav] = useState('carousel1');

  const toggleActiveNav = (navItem: any) => {
    setActiveNav((prevActiveNav) => (prevActiveNav === navItem ? null : navItem));
  };
  return (
    <section className={styles.section_one}>
        <div className={styles.container}>
            <div className={styles.section__items}>
                <div className={styles.section__item}>
                    <div className={styles.carousel__img}>
                        <img src={require("../assets/images/section2__image_person.png")} />
                    </div>
                </div>
                <div className={styles.section__item}>
                    <div className={styles.info__block}>
                        <div className={styles.fire__and__text}>
                            <img src={FireSVG} className={styles.fire} />
                            <span className={styles.text}>future of sports</span>
                        </div>
                        <div className={styles.info__title}>
                            Customize Your Own Character
                        </div>
                        <div className={styles.info__text}>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae.
                        </div>
                        <div className={styles.info__carousel}>
                            <div onClick={() => toggleActiveNav('carousel1')} className={`${styles.carousel__item} ${activeNav === 'carousel1' ? styles.active : ''}`}>
                                <img src={require("../assets/images/carousel__image1.png")} />
                            </div>
                            <div onClick={() => toggleActiveNav('carousel2')} className={`${styles.carousel__item} ${activeNav === 'carousel2' ? styles.active : ''}`}>
                                <img src={require("../assets/images/carousel__image2.png")} />
                            </div>
                            <div onClick={() => toggleActiveNav('carousel3')} className={`${styles.carousel__item} ${activeNav === 'carousel3' ? styles.active : ''}`}>
                                <img src={require("../assets/images/carousel__image3.png")} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Section_one