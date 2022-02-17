import React from 'react';
// import classnames from 'classnames';
import styles from './Label.module.scss';

const Component = ({
  children
}) => (
  <div className = {styles.label}>
    {children}
  </div>
);

export default Component;
