import React from 'react';
import classnames from 'classnames';
import CarouselItem from './Carousel.Item';
import styles from './Carousel.module.scss';

const Carousel = ({ children, className }) => (
  <div className={classnames(
    styles.wrapper,
    className
  )}>
    {children}
  </div>
);

Carousel.Item = CarouselItem;

export default Carousel;
