import React from 'react';
// import classnames from 'classnames';
import styles from './Label.module.scss';

const Component = ({
  children,
  className,
  show = true,
}) => (
  <div 
    className = {styles.label}
    show
  >
    {children}
  </div>
);

export default Component;
