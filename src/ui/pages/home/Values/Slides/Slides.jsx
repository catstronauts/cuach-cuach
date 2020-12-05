import React from 'react';
import styles from './Slides.module.scss';

const Slides = ({ data = [] }) => {
  const renderIndex = (index) => {
    const i = index + 1;

    return (i > 10)
      ? i
      : `0${i}`;
  };

  return data.map((value, i) => (
    <article className={styles.wrapper} key={i}>
      <div className={styles.index}>
        {renderIndex(i)}
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>
          {value.title}
        </h1>
        <p className={styles.desc}>
          {value.desc}
        </p>
      </div>
      <div className={styles.imgWrapper}>
        <img src={value.img} alt={value.title} className={styles.img} />
      </div>
    </article>
  ));
};

export default Slides;
