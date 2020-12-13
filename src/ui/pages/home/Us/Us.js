import React from 'react';
// import Img from 'gatsby-image';
import img from '@assets/images/taller.jpg';
import styles from './Us.module.scss';

const UsCard = ({ img, name, job, description}) => (
  <div className={styles.card}>
    <div className={styles.cardImgWrapper}>
      <img className={styles.cardImg} src={img} />
    </div>
    <div className={styles.cardText}>
      <div className={styles.name}>{name}</div>
      <div className={styles.job}>{job}</div>
      <div className={styles.description}>{description}</div>
    </div>
  </div>
);


const Us = ({ title, subtitle }) => (
  <div className={styles.us}>
    <h2 className={styles.title}>{title}</h2>
    <p className={styles.subtitle}>{subtitle}</p>
    <div className={styles.cards}>
      {UsCard}
    </div>
  </div>
);
 
export default Us;
