import React from 'react';
import classnames from 'classnames';
import { Link } from '@components/Link';
import BackgroundImage from 'gatsby-background-image';
import styles from './CategoryTile.module.scss';

const CategoryTile = ({ tag, linkTo, img = {} }, className) => (
  <div className={classnames(styles.category, className)}>
    <BackgroundImage
      className={styles.imgWrapper}
      fluid={img}
    >
      <Link to={linkTo} className={styles.tag}>
        {tag}
      </Link>
    </BackgroundImage>
  </div>
);

export default CategoryTile;
