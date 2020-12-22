import React from 'react';
import get from 'lodash/get';
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';
import styles from './About.module.scss';

const About = () => {
  const staticQuery = useStaticQuery(query);

  return (
    <div className={styles.about}>
      <div className={styles.background} />
      <div className={styles.imgWrapper}>
        <Img
          alt="Tablero abierto"
          className={styles.img}
          fluid={get(staticQuery, 'aboutImg.childImageSharp.fluid', {})}
        />
      </div>
      <div className={styles.text}>
        <h2 className={styles.title}>
          Taller Cuach Cuach
        </h2>
        <p className={styles.paragraph}>
          Somos una pareja de emprendedores de Chiguayante, ciudad ubicada entre BíoBío y el Cerro Manquimávida. La naturaleza que rodea nuestro taller y nuestro hogar, nos inspira y nos permite transmitirla a través del arte, el diseño y la manufactura.
        </p>
        <a href="www.facebook.com">Ver más...</a>
      </div>
    </div>
  );
};

const query = graphql`
  query {
    aboutImg: file(
      sourceInstanceName: {eq: "images"},
      relativePath: {eq: "taller.jpg"}
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
