import React from 'react';
import classnames from 'classnames';
import styles from './CardProduct.module.scss';

const List = ({ children, className }) => (
  <ul className={classnames(
    styles.list,
    className
  )}>
    {children}
  </ul>
);

export default List;
