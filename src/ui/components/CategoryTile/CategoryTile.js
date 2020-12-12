import React from 'react';
import classnames from 'classnames';
import BackgroundImage from 'gatsby-background-image';
import styles from './CategoryTile.module.scss';

const CategoryTile = ({ tag, img = {} }, className) => (
  <div className={classnames(styles.category, className)}>
    <BackgroundImage
      className={styles.imgWrapper}
      fluid={img}
    >
      <div className={styles.tag}>
        {tag}
      </div>
    </BackgroundImage>
  </div>
);

export default CategoryTile;
