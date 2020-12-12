import React from 'react';
// import Img from 'gatsby-image';
import img from '@assets/images/taller.jpg';
import Button from '@components/Button';
import styles from './About.module.scss';

const About = ({ img, text, title, href }) => (
  <div className={styles.about}>
    <div className={styles.background} />
    <div className={styles.imgWrapper}>
      <img className={styles.img} src={img} />
    </div>
    <div className={styles.text}>
      <h2 className={styles.title}>
        {title}
      </h2>    
      <p className={styles.paragraph}>
        {text}
      </p>
      <a href={href}>Ver más...</a>
    </div>
  </div>
);

export default About;
