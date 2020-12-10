import React from 'react';
import classnames from 'classnames';
import styles from './ProductTile.module.scss';

const ProductTile = ({ tag, img }) => (
  <div className={styles.product}>
    <div className={styles.imgWrapper} style={{ backgroundImage:`url(${img})` }}>
      <div className={styles.tag}>
        {tag}
      </div>
    </div>  
  </div>
);

export default ProductTile;
