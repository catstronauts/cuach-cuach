import React from 'react';
import classnames from 'classnames';
import styles from './Divider.module.scss';

const Divider = ({ className, themed = false }) => (
  <hr
    className={classnames(
      styles.divider,
      themed && styles.themed,
      className
    )}
  />
);

export default Divider;
