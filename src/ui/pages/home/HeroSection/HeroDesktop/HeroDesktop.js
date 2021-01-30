import React, { useState } from 'react';
import classnames from 'classnames';
import get from 'lodash/get';
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';
import { Container } from '@layouts/Container';
import { SocialLinks } from '@layouts/SocialLinks';
import { Link } from '@components/Link';
import { Button } from '@components/Button';
import styles from './HeroDesktop.module.scss';

const dataIcons = [
  { style: styles.hero_var1 },
  { style: styles.hero_var2 },
  { style: styles.hero_var3 },
];

const ThumbListImg = ({ thumbImg, onClick }) => (
  <li className={styles.liThumb} onClick={onClick}>
    <Img
      role="presentation"
      className={styles.thumbImg}
      fluid={thumbImg}
    />
  </li>
);

const HeroDesktop = ({ data, className }) => {
  const staticQuery = useStaticQuery(query);
  const dataa = dataIcons.map((di, i) => ({
    ...di,
    img: get(staticQuery, `hero${i + 1}.childImageSharp.fluid`, {}),
  }));

  const [img, setImg] = useState(dataa[0].img);

  const handleClick = (i) => {
    const selected = dataa[i];

    const body = document.getElementsByTagName('BODY')[0];

    switch (i) {
      case 1:
        body.className = 'pink';
        break;
      case 2:
        body.className = 'blue';
        break;
      case 0:
      default:
        body.className = '';
    }
    setImg(selected.img);
  };

  return (
    <div className={classnames(styles.hero, className)}>
      <div className={styles.shape_1} />
      <div className={styles.shape_2} />
      <Container className={styles.container}>
        <div className={styles.heroWrapper}>
          <div className={styles.heroSection}>
            <div className={styles.text}>
              <h2 className={styles.title}>{data.title}</h2>
              <p className={styles.paragraph}>{data.subtitle}</p>
              <Link to={data.btnTo}>
                <Button caption={data.btnTxt} className={styles.btn} />
              </Link>
            </div>
            <div className={styles.imgContainer}>
              <Img
                className={styles.img}
                fluid={img}
                role="presentation"
              />
            </div>
          </div>
          <div className={styles.thumbWrapper}>
            <ul className={styles.thumb}>
              {dataa.map((d, i) => (
                <ThumbListImg
                  key={i}
                  thumbImg={d.img}
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

const query = graphql`
  query {
    hero1: file(
      sourceInstanceName: {eq: "images"},
      relativePath: {eq: "homeHero/hero1.png"}
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    hero2: file(
      sourceInstanceName: {eq: "images"},
      relativePath: {eq: "homeHero/hero2.png"}
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    hero3: file(
      sourceInstanceName: {eq: "images"},
      relativePath: {eq: "homeHero/hero3.png"}
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

export default HeroDesktop;
