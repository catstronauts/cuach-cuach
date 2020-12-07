import React, { useState } from 'react';
// import Img from 'gatsby-image';
import thumb1 from '@assets/images/hero1.png';
import thumb2 from '@assets/images/hero2.png';
import thumb3 from '@assets/images/hero3.png';
import instagram from '@assets/images/instagram.png';
import { Container } from '@layouts/Container';
// import { SocialLinks } from '@layouts/SocialLinks';
import styles from './HeroDesktop.module.scss';

const data = [
  {
    img: thumb1,
    imgThumb: thumb1,
    style: styles.circle_var1,
  },
  {
    img: thumb2,
    imgThumb: thumb2,
    style: styles.circle_var2,
  },
  {
    img: thumb3,
    imgThumb: thumb3,
    style: styles.circle_var3,
  },
];


const ThumbListImg = ({ thumbImg, onClick }) => (
  <li className={styles.liThumb} onClick={onClick}>
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

const HeroDesktop = ({ className }) => {
  const [img, setImg] = useState(thumb1);
  const [circleSt, setCircleSt] = useState();

  const handleClick = (thumbImg, st) => {
    setImg(thumbImg);
    setCircleSt(st)
  }

  return (
    <div className={`${styles.hero} ${className}`}>
      <div className={`${styles.circle} ${circleSt}`} />
      <Container className={styles.container}>
        <div className={styles.heroWrapper}>
          <div className={styles.heroSection}>
            <div className={styles.text}>
              <h2 className={styles.title}>Lorem ipsum dolor <br/> <span className={styles.cuach}>Cuach Cuach</span></h2>
              <p className={styles.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nisl dui, aliquet sit amet semper id, rhoncus gravida arcu. Nam eu eros mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
              <a className={styles.link} href='/'>Leer más.</a>
            </div>
            <div className={styles.imgContainer}>
              <Img img={img} />
            </div>
          </div>
          <div className={styles.thumbWrapper}>
            <ul className={styles.thumb}>
              {data.map((d, i) => (
                <ThumbListImg
                  key={i}
                  thumbImg={d.imgThumb}
                  onClick={() => handleClick(d.img, d.style)}
                />
              ))}
            </ul>
          </div>
        </div>
        <ul className={styles.socialMedia}>
          <Icon img={instagram} />
          <Icon img={instagram} />
          <Icon img={instagram} />
        </ul>
      </Container>
    </div>
  );
};

export default HeroDesktop;
