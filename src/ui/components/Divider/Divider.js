import React from 'react';
import classnames from 'classnames';
import styles from './Divider.module.scss';

const Divider = ({ className }) => (
  <hr
    className={classnames(
      styles.divider,
      className
    )}
  />
);

export default Divider;
