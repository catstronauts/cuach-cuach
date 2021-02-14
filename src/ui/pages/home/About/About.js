import React from 'react';
import get from 'lodash/get';
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';
import { Link } from '@components/Link';
import { ScrollAnimation, animationStyles } from '@components/ScrollAnimation';
import { LINKS } from '@src/constants';
import styles from './About.module.scss';

const About = () => {
  const staticQuery = useStaticQuery(query);

  return (
    <div className={styles.about}>
      <div className={styles.background} />
      <ScrollAnimation animation={animationStyles.fadeIn} className={animationStyles.delay_2}>
        <div className={styles.imgWrapper}>
          <Img
            alt="Tablero abierto"
            className={styles.img}
            fluid={get(staticQuery, 'aboutImg.childImageSharp.fluid', {})}
          />
        </div>
      </ScrollAnimation>
      <ScrollAnimation animation={animationStyles.fadeIn} className={animationStyles.delay_0}>
        <div className={styles.text}>
          <h2 className={styles.title}>
            Taller Cuach Cuach
          </h2>
          <p className={styles.paragraph}>
            Somos una pareja de emprendedores de Chiguayante, ciudad ubicada entre BíoBío y el Cerro Manquimávida. La naturaleza que rodea nuestro taller y nuestro hogar, nos inspira y nos permite transmitirla a través del arte, el diseño y la manufactura.
          </p>
          <Link highlight to={LINKS.ABOUT.to}>Ver más...</Link>
        </div>
      </ScrollAnimation>
    </div>
  );
};

const query = graphql`
  query {
    aboutImg: file(
      sourceInstanceName: {eq: "images"},
      relativePath: {eq: "cuachcuach.jpg"}
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

export default About;
