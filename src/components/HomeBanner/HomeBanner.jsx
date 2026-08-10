import React from 'react';
import styles from './HomeBanner.module.css';
import trendyBannerDesktop from '../../imgs/imgs1.png'; 
import trendyBannerMobile from '../../imgs/imgs2.png';   

const HomeBanner = () => {
  return (
    <section className={styles.bannerContainer}>
      <img
        src={trendyBannerDesktop}
        alt="Banner Glamour Trendy"
        className={styles.bannerImageDesktop}
        loading="eager" 
      />
      <img
        src={trendyBannerMobile}
        alt="Banner Glamour Trendy Móvil"
        className={styles.bannerImageMobile}
        loading="eager"
      />
    </section>
  );
};

export default HomeBanner;