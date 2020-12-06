import React, { useState } from 'react';
import classnames from 'classnames';
// import Carousel from '@components/Carousel';
import styles from './ValuesCarousel.module.scss';

const renderIndex = (index) => {
  const i = index + 1;

  return i > 10 ? i : `0${i}`;
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
        <h1 className={styles.options_item_title}>
          {value.title}
        </h1>
      </li>
    ))}
  </ul>
);

const ValuesCarousel = ({ data = [] }) => {
  const [active, setActive] = useState(0);
  const handleChange = (i) => {
    setActive(i);
  };

  // console.log(data);

  return (
    <div className={styles.values}>
      {/* <Carousel>
        {data.map((value, i) => (
          <Carousel.Item key={i}>
            {value.title}
          </Carousel.Item>
        ))}
      </Carousel> */}
      <Options
        data={data}
        active={active}
        onClickOption={handleChange}
      />
    </div>
  );
};

export default ValuesCarousel;
