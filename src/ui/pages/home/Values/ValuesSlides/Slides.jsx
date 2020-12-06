import React from 'react';
import styles from './Slides.module.scss';

const Slides = ({ data = [] }) => data.length
  ? (data.map((value, i) => (
    <article className={styles.wrapper} key={i}>
      <div className={styles.index}>
        {`0${(i + 1)}`}
      </div>
      <div className={styles.content}>
        <h4 className={styles.title}>
          {value.title}
        </h4>
        <p className={styles.desc}>
          {value.desc}
        </p>
      </div>
      <div className={styles.imgWrapper}>
        <img src={value.img} alt={value.title} className={styles.img} />
      </div>
    </article>
  ))) : null;

export default Slides;
