import React from 'react';
import styles from './About.module.scss';

const About = ({ img, text, title, href }) => (
  <div className={styles.about}>
    <div className={styles.background} />
    <div className={styles.imgWrapper}>
      <img className={styles.img} src={img} alt='Tablero abierto' />
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
