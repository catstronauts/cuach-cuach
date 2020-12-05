import React from 'react';
import classnames from 'classnames';
import styles from './Container.module.scss';

const Container = ({ children, className }) => (
  <div className={classnames(
    styles.wrapper,
    className
  )}>
    {children}
  </div>
);

export default Container;
