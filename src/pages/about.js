import React from 'react';
import { graphql } from 'gatsby';
import { LINKS } from '@src/constants';
import { Helmet } from '@layouts/Helmet';
import { Section } from '@layouts/Section';
import { Container } from '@layouts/Container';
import { Divider } from '@components/Divider';
import { Link } from '@components/Link';
import { HeroTitle } from '@components/HeroTitle';
import Us from '@ui/pages/home/Us';
import about1 from '@assets/images/about1.jpg';
import about2 from '@assets/images/about2.jpg';
import styles from './about.module.scss';

const AboutPage = ({ data = {} }) => {
  const siteAuthors = data?.allContentfulPerson?.edges || [];

  const authors = siteAuthors.map((auth = {}) => ({
    ...auth?.node,
    shortBio: auth?.node?.shortBio?.shortBio || '',
    imgFluid: auth?.node?.image?.fluid || {},
  }));

  return (
    <>
      <Helmet pageTitle={LINKS.ABOUT.caption} />
      <HeroTitle>Acerca de Cuach Cuach</HeroTitle>

      {/* About Section */}
      <Container className={styles.about}>
        <div className={styles.content}>
          <div className={styles.contentItem}>
            <div className={styles.text}>
              <h2 className={styles.subtitle}>Cuach Cuach:  Arte, Diseño y Arquitectura </h2>
              <Divider className={styles.division} />
              <p className={styles.phrase}>Somos Pamela y Leandro, profesora y arquitecto respectivamente. Hace más o menos 10 años comenzamos con Cuach Cuach.</p>
            </div>
          </div>
          <div className={styles.contentItem}>
            <img className={styles.img1} src={about1} />
          </div>
        </div>

        <div className={`${styles.content} ${styles.content2}`}>
          <div className={styles.contentItem}>
            <div className={`${styles.text} ${styles.text2}`}>
              <p className={styles.paragraph}>
              Pamela se dedica al diseño y la manufactura de productos en tela, utilizando su máquina de coser para crear mochilas, bolsos y accesorios resistentes y coloridos. <br/>
              Leandro se dedica a la pintura e ilustración, su arte está inspirado en la cultura y la naturaleza de nuestra zona. Los cuadros son pintados con acuarelas y con acrílicos, en formatos de diferentes tamaños, tanto en bastidores de tela, como en papel de alto gramaje. <br/>  
              El proceso creativo tanto de los cuadros, como de las mochilas, muchas veces se realiza en conjunto con quienes nos eligen, ya que intentamos siempre acoger las propuestas que nos presentan y lograr un producto que haga feliz a quienes confían en nuestro trabajo.<br/>
              Realizamos envíos a todo Chile y entregas en el gran Concepción, la mayoría de las veces nosotros mismos, ya que lo vemos como una oportunidad de recorrer nuestra localidad y conocer un poco más a quienes nos eligen. <br/>
              Pueden visitarnos en nuestro Instagram <Link to='https://www.instagram.com/cuachcuach/' highlight>@cuachcuach</Link>, o escribirnos a nuestro correo <a href='mailto:tallercuach@gmail.com'><Link highlight>tallercuach@gmail.com</Link></a><br/>
              </p>
            </div>
          </div>
          <div className={styles.contentItem}>
            <img className={styles.img2} src={about2} />
          </div>
        </div>
      </Container>

      {/* Us Section */}
      <Section className={styles.us} title='Quién está detrás de Cuach Cuach'>
        <Us
          authors={authors}
          title='Nosotros'
          // subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        >
        </Us>
      </Section>
    </>
  );
};

export default AboutPage;

export const pageQuery = graphql`
  query AboutIndexQuery {
    allContentfulPerson {
      edges {
        node {
          id
          name
          shortBio {
            shortBio
          }
          title
          image {
            fluid(
              maxWidth: 350
              maxHeight: 350
            ) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`;
