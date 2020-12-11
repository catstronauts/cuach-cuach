import React, { useState } from 'react';
import thumb1 from '@assets/images/hero1.png';
import thumb2 from '@assets/images/hero2.png';
import thumb3 from '@assets/images/hero3.png';
import { Container } from '@layouts/Container';
import { SocialLinks } from '@layouts/SocialLinks';
import Button from '@components/Button';
import styles from './HeroDesktop.module.scss';

const dataIcons = [
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

const HeroDesktop = ({ data, className }) => {
  const [img, setImg] = useState(thumb1);
  const [circleSt, setCircleSt] = useState();

  const handleClick = (thumbImg, st) => {
    setImg(thumbImg);
    setCircleSt(st);
  };

  return (
    <div className={`${styles.hero} ${className}`}>
      <div className={`${styles.circle} ${circleSt}`} />
      <Container className={styles.container}>
        <div className={styles.heroWrapper}>
          <div className={styles.heroSection}>
            <div className={styles.text}>
              <h2 className={styles.title}>{data.title}</h2>
              <p className={styles.paragraph}>{data.subtitle}</p>
              <a href={data.btnTo}>
                <Button caption={data.btnTxt} />
              </a>
            </div>
            <div className={styles.imgContainer}>
              <img className={styles.img} src={img} />
            </div>
          </div>
          <div className={styles.thumbWrapper}>
            <ul className={styles.thumb}>
              {dataIcons.map((d, i) => (
                <ThumbListImg
                  key={i}
                  thumbImg={d.imgThumb}
                  onClick={() => handleClick(d.img, d.style)}
                />
              ))}
            </ul>
          </div>
        </div>
        <SocialLinks
          className={styles.socialMedia}
          itemClassName={styles.socialMedia_item}
        />
      </Container>
    </div>
  );
};

export default HeroDesktop;
