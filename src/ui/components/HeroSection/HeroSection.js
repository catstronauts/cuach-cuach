import React, { useState } from 'react';
// import Img from 'gatsby-image';
import thumb1 from '@assets/images/hero1.png';
import thumb2 from '@assets/images/hero2.png';
import thumb3 from '@assets/images/hero3.png';
import instagram from '@assets/images/instagram.png';
import { Container } from '@layouts/Container';
import styles from './HeroSection.module.scss';

const ThumbListImg = ({ thumbImg, onClick }) => (
  <li className={styles.liThumb} onClick={() => onClick(thumbImg)}>
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

const Img =({ img }) => (
  <img 
    className={styles.img}
    src={img}
  />
);



const HeroSection = () => {
  const [img, setImg] = useState(thumb1);
  const handleClick = (thumbImg) => {
    setImg(thumbImg);
  }

  return (
    <div className={styles.hero}>
      <div className={styles.circle} />
      <Container>
        <div className={styles.heroSection}>
          <div className={styles.text}>
            <h2 className={styles.title}>Lorem ipsum dolor <br/> <span className={styles.cuach}>Cuach Cuach</span></h2>
            <p className={styles.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nisl dui, aliquet sit amet semper id, rhoncus gravida arcu. Nam eu eros mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
            <a className={styles.link} href='/'>Leer más.</a>
          </div>
          <div className={styles.imgContainer}>
            <Img img={img} />
            {/* <Img img=={thumb2} />
            <Img img={thumb3} /> */}
          </div>
        </div>
        <ul className={styles.thumb}>
          <ThumbListImg thumbImg={thumb1} onClick={handleClick} />
          <ThumbListImg thumbImg={thumb2} onClick={handleClick} />
          <ThumbListImg thumbImg={thumb3} onClick={handleClick} />
        </ul>
        <ul className={styles.socialMedia}>
          <Icon img={instagram} />
          <Icon img={instagram} />
          <Icon img={instagram} />
        </ul>
      </Container>
    </div>
  );
};

export default HeroSection;
