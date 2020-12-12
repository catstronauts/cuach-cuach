import React, { useState } from 'react';
import classnames from 'classnames';
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
    style: styles.hero_var1,
  },
  {
    img: thumb2,
    imgThumb: thumb2,
    style: styles.hero_var2,
  },
  {
    img: thumb3,
    imgThumb: thumb3,
    style: styles.hero_var3,
  },
];

const ThumbListImg = ({ thumbImg, onClick }) => (
  <li className={styles.liThumb} onClick={onClick}>
    <img className={styles.thumbImg} src={thumbImg} />
  </li>
);

const HeroDesktop = ({ data, className }) => {
  const [img, setImg] = useState(thumb1);
  const [variant, setVariant] = useState();

  const handleClick = (i) => {
    const selected = dataIcons[i];

    setImg(selected.img);
    setVariant(selected.style);
  };

  return (
    <div className={classnames(styles.hero, variant, className)}>
      <div className={styles.shape_1} />
      <div className={styles.shape_2} />
      <Container className={styles.container}>
        <div className={styles.heroWrapper}>
          <div className={styles.heroSection}>
            <div className={styles.text}>
              <h2 className={styles.title}>{data.title}</h2>
              <p className={styles.paragraph}>{data.subtitle}</p>
              <a href={data.btnTo}>
                <Button caption={data.btnTxt} className={styles.btn}/>
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
                  onClick={() => handleClick(i)}
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
