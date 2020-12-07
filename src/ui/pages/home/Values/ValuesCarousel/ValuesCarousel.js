import React, { useState } from 'react';
import classnames from 'classnames';
import Img from 'gatsby-image';
import styles from './ValuesCarousel.module.scss';

const renderIndex = (index) => {
  const i = index + 1;
  return i > 10 ? i : `0${i}`;
};

const Carousel = ({ data = [], active = 0 }) => {
  const activeItem = data[active];

  return (
    <div className={styles.carousel}>
      <div
        className={styles.carousel_item}>
        <div className={styles.carousel_item_content}>
          <div className={styles.carousel_text}>
            <h4 className={styles.carousel_title}>
              {activeItem.title}
            </h4>
            <span className={styles.carousel_desc}>
              {activeItem.desc}
            </span>
          </div>
        </div>
        <div className={styles.carousel_item_imgWrapper}>
          <Img
            alt={activeItem.title}
            className={styles.carousel_item_img}
            fluid={activeItem.imgFluid}
          />
        </div>
      </div>
    </div>
  );
};

const Options = ({ data = [], active, onClickOption }) => (
  <ul className={styles.options}>
    {data.map((value, i) => (
      <li
        key={i}
        onClick={() => onClickOption(i)}
        className={classnames(
          styles.options_item,
          (i === active) && styles.options_item__active
        )}
      >
        <div className={styles.options_item_index}>
          {renderIndex(i)}
        </div>
        <h4 className={styles.options_item_title}>
          {value.title}
        </h4>
      </li>
    ))}
  </ul>
);

const ValuesCarousel = ({ data = [] }) => {
  const [active, setActive] = useState(0);
  const handleChange = (i) => {
    setActive(i);
  };

  return (
    <div className={styles.values}>
      <Carousel
        data={data}
        active={active}
      />
      <Options
        data={data}
        active={active}
        onClickOption={handleChange}
      />
    </div>
  );
};

export default ValuesCarousel;
