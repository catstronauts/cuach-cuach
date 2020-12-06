import React, { useState } from 'react';
// import Img from 'gatsby-image';
import img from '@assets/images/taller.jpg';
import styles from './HeroMobile.module.scss';

const HeroMobile = () => (
  <div className={styles.mobile}>
    <div className={styles.img} style={{ backgroundImage:`url(${img})` }} />
    <div className={styles.text}>
      <h2 className={styles.title}>Lorem ipsum dolor <br/> <span className={styles.cuach}>Cuach Cuach</span></h2>
      <p className={styles.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nisl dui, aliquet sit amet semper id, rhoncus gravida arcu. Nam eu eros mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
      <a className={styles.link} href='/'>Leer más.</a>
    </div>
  </div>
)

export default HeroMobile;
