import React from 'react';
// import Img from 'gatsby-image';
import img from '@assets/images/taller.jpg';
import Button from '@components/Button';
import styles from './HeroMobile.module.scss';

const HeroMobile = ({ className }) => (
  <div className={`${styles.mobile} ${className}`}>
    {/* <div className={styles.img} style={{ backgroundImage:`url(${img})` }} /> */}
    <div className={styles.img}>
      <img src={img} />
    </div>
    <div className={styles.text}>
      <h2 className={styles.title}>Lorem ipsum dolor <br/> <span className={styles.cuach}>Cuach Cuach</span></h2>
      <p className={styles.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nisl dui, aliquet sit amet semper id, rhoncus gravida arcu.ridiculus mus.</p>
      <a href='/'>
        <Button caption='Leer más' />
      </a>
    </div>
  </div>
)

export default HeroMobile;
