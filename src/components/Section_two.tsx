import React from 'react';
import styles from './Section_two.module.css';
import FireSVG from '../assets/SVG_images/Fire.svg';

function Section_two() {
  return (
    <section className={styles.section_two}>
        <div className={styles.container}>
            <div className={styles.section_two__items}>
                <div className={styles.section_two__item_title_and_btn}>
                    <div className={styles.title__Latest_news}>
                        <div className={styles.fire__and__text}>
                            <img src={FireSVG} className={styles.fire} />
                            <span className={styles.text}>future of sports</span>
                        </div>
                        <div className={styles.title}>Latest News & Articles</div>
                    </div>
                    <div className={styles.button__read_more}>Read More</div>
                </div>
                <div className={styles.section_two__item_bigIMG_and_gridIMG}>
                    <div className={styles.bigIMG}>
                        <div className={styles.IMG}>
                            <img src={require("../assets/images/xbox__image.png")} />
                        </div>
                        <div className={styles.IMG__info}>
                            <div className={styles.info_date}>April 2, 2021</div>
                            <div className={styles.info_text}>Esports Group teams up with the Indianapolis Colts</div>
                        </div>
                    </div>
                    <div className={styles.gridIMG}>
                        <div className={styles.grid__item}>
                            <img src={require("../assets/images/player__image.png")} />
                            <div className={styles.gridIMG__info}>
                                <div className={styles.grid_info_date}>April 2, 2021</div>
                                <div className={styles.grid_info_text}>NAVI reveals s1mple fifth anniversary</div>
                            </div>
                        </div>
                        <div className={styles.grid__item}>
                            <img src={require("../assets/images/computer__image.png")} />
                            <div className={styles.gridIMG__info}>
                                <div className={styles.grid_info_date}>April 2, 2021</div>
                                <div className={styles.grid_info_text}>A1esports Shares new picture</div>
                            </div>
                        </div>
                        <div className={styles.grid__item}>
                            <img src={require("../assets/images/keyboard__image.png")} />
                            <div className={styles.gridIMG__info}>
                                <div className={styles.grid_info_date}>April 2, 2021</div>
                                <div className={styles.grid_info_text}>T1 unveil partnership with Razer</div>
                            </div>
                        </div>
                        <div className={styles.grid__item}>
                            <img src={require("../assets/images/earphones__image.png")} />
                            <div className={styles.gridIMG__info}>
                                <div className={styles.grid_info_date}>April 2, 2021</div>
                                <div className={styles.grid_info_text}>RX secures content partnership with</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Section_two