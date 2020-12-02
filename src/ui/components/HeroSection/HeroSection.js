import React from 'react';
// import Img from 'gatsby-image';
import thumb from '@assets/images/hero1.png';
import instagram from '@assets/images/instagram.png';
import { Container } from '@layouts/Container';
import styles from './HeroSection.module.scss';

const ThumbListImg = ({ thumbImg }) => (
  <li className={styles.liThumb}>
    <img className={styles.thumbImg} src={thumbImg} />
  </li>
);

const Icon = ({ href, img }) => (
  <li className={styles.liIcon}>
    <a className={styles.aIcon} href={href}>
      <img src={img} />
    </a>
  </li>
);



const HeroSection = ({ img, img1 }) => (
  <div className={styles.hero}>
    <div className={styles.circle} />
    <Container>
      <div className={styles.heroSection}>
        <div className={styles.text}>
          <h2 className={styles.title}>Lorem ipsum dolor <br/> <span className={styles.cuach}>Cuach Cuach</span></h2>
          <p className={styles.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nisl dui, aliquet sit amet semper id, rhoncus gravida arcu. Nam eu eros mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
          <a className={styles.link} src={img} href='/'>Leer más.</a>
        </div>
        <div className={styles.imgContainer}>
          <img className={styles.img} src={img1} />
        </div>
      </div>
      <ul className={styles.thumb}>
        <ThumbListImg thumbImg={thumb} />
        <ThumbListImg thumbImg={thumb} />
        <ThumbListImg thumbImg={thumb} />
      </ul>
      <ul className={styles.socialMedia}>
        <Icon img={instagram} />
        <Icon img={instagram} />
        <Icon img={instagram} />
      </ul>
    </Container>
  </div>
);

export default HeroSection;
