import React from 'react';
import img from '@assets/images/taller.jpg';
import Link from '@components/Link';
import Button from '@components/Button';
import styles from './HeroMobile.module.scss';

const HeroMobile = ({ data, className }) => (
  <div className={`${styles.mobile} ${className}`}>
    <div className={styles.img}>
      <img src={img} alt="Taller cuach cuach" />
    </div>
    <div className={styles.text}>
      <h2 className={styles.title}>{data.title}</h2>
      <p className={styles.paragraph}>{data.subtitle}</p>
      <Link to={data.btnTo}>
        <Button caption={data.btnTxt} block className={styles.btn} />
      </Link>
    </div>
  </div>
);

export default HeroMobile;
