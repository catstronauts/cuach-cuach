import React from 'react';
// import Carousel from '@components/Carousel';
import styles from './ValuesCarousel.module.scss';

const renderIndex = (index) => {
  const i = index + 1;

  return i > 10 ? i : `0${i}`;
};

const Options = ({ data = [] }) => (
  <ul className={styles.options}>
    {data.map((value, i) => (
      <li key={i} className={styles.options_item}>
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
  console.log(data);

  return (
    <div className={styles.values}>
      {/* <Carousel>
        {data.map((value, i) => (
          <Carousel.Item key={i}>
            {value.title}
          </Carousel.Item>
        ))}
      </Carousel> */}
      <Options data={data} />
    </div>
  );
};

export default ValuesCarousel;
