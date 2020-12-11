import React from 'react';
// import Img from 'gatsby-image';
import img from '@assets/images/taller.jpg';
import Button from '@components/Button';
import styles from './HeroMobile.module.scss';

const HeroMobile = ({ data, className }) => (
  <div className={`${styles.mobile} ${className}`}>
    {/* <div className={styles.img} style={{ backgroundImage:`url(${img})` }} /> */}
    <div className={styles.img}>
      <img src={img} />
    </div>
    <div className={styles.text}>
      <h2 className={styles.title}>{data.title}</h2>
      <p className={styles.paragraph}>{data.subtitle}</p>
      <a href={data.btnTo}>
        <Button caption={data.btnTxt} />
      </a>
    </div>
  </div>
);

export default HeroMobile;
