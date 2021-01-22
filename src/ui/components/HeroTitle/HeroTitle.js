import React from 'react';
// import Img from 'gatsby-image';

import styles from './HeroTitle.module.scss';

const HeroTitle = ({ children }) => (
  <div className={styles.hero}>{children}</div>
);

export default HeroTitle;
