import React from 'react';
// import Img from 'gatsby-image';

import styles from './HeroTitle.module.scss';

const HeroTitle = ({ children, image }) => (
  <div className={styles.hero}>
    <img className={styles.img} src={image}/>
    {children}
  </div>
);

export default HeroTitle;
