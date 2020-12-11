import React from 'react';
import classnames from 'classnames';
import styles from './CardArticle.module.scss';

const CardArticle = ({ children, className }) => (
  <ul className={classnames(
    styles.list,
    className
  )}>
    {children}
  </ul>
);

export default CardArticle;
