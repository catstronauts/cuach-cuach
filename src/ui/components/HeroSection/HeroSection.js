import React from 'react';
// import Img from 'gatsby-image';

import styles from './HeroSection.module.scss';

const HeroSection = ({ src, children, img, imgAlt, data }) => (
  <div className={styles.heroSection}>
    <div className={styles.content}>
      <h2>Hola, somos Cuach Cuach</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nisl dui, aliquet sit amet semper id, rhoncus gravida arcu. Nam eu eros mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
      <a href='/'>Leer más.</a>
    </div>
    <div className={styles.imgContainer}>
      <img className={styles.img} src={img} />
    </div>

    {/* <Img
      className={styles.heroImage}
      alt={imgAlt}
      fluid={img}
    /> */}
    {children}
  </div>
);

export default HeroSection;
