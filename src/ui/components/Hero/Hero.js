import React from 'react';
import Img from 'gatsby-image';

import styles from './Hero.module.css';

const Hero =({ children, img, imgAlt, data }) => (
  <div className={styles.hero}>
    <Img
      className={styles.heroImage}
      alt={imgAlt}
      fluid={img}
    />
    {children}
  </div>
);

export default Hero;
