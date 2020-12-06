import React from 'react';
import classnames from 'classnames';
import styles from './Carousel.module.scss';

const CarouselItem = ({ children, className }) => (
  <div className={classnames(
    styles.item,
    className
  )}>
    {children}
  </div>
);

export default CarouselItem;
