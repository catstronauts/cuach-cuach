import React from 'react';
import classnames from 'classnames';
import styles from './CategoryTile.module.scss';

const CategoryTile = ({ tag, img }) => (
  <div className={styles.category}>
    <div className={styles.imgWrapper} style={{ backgroundImage:`url(${img})` }}>
      <div className={styles.tag}>
        {tag}
      </div>
    </div>  
  </div>
);

export default CategoryTile;
