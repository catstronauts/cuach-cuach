import React from 'react';
import { graphql } from 'gatsby';
import { LINKS } from '@src/constants';
import { Helmet } from '@layouts/Helmet';
import { Section } from '@layouts/Section';
import { Container } from '@layouts/Container';
import { Divider } from '@components/Divider';
import { HeroTitle } from '@components/HeroTitle';
import Us from '@ui/pages/home/Us';
import taller from '@assets/images/taller.jpg';
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
      <HeroTitle>Estos somos nosotros</HeroTitle>

      {/* About Section */}
      <Container className={styles.about}>
        <div className={styles.content}>
          <div className={styles.contentItem}>
            <div className={styles.text}>
              <h2 className={styles.subtitle}>Taller Cuach Cuach</h2>
              <Divider className={styles.division} />
              <p className={styles.phrase}>Amamos lo que hacemos. Bla bla bla blaBla bla bla bla</p>
            </div>
          </div>
          <div className={styles.contentItem}>
            <img src={taller} />
          </div>
        </div>

        <div className={`${styles.content} ${styles.content2}`}>
          <div className={styles.contentItem}>
            <div className={`${styles.text} ${styles.text2}`}>
              <p className={styles.paragraph}>
                Somos una pareja  de emprendedores de Chiguayante, ciudad ubicada entre BíoBío y el Cerro Manquimávida. <br/>
                La naturaleza que rodea nuestro taller y nuestro hogar, nos inspira y nos permite transmitirla a través del arte, el diseño y la manufactura. <br/>
                At Catcus, we have something for everyone, whether you are a beginner who wants to start out with a few small pots and trays on your windowsill, the 'green fingered' expert or professional landscape gardener, we have the tools for you.<br/>
                If you have any questions about us, our products or need help with your garden please get in touch with us via our contact us page. There is always someone on hand to take your questions and experts to offer you gardening advice.<br/>
                Somos una pareja de emprendedores de Chiguayante, ciudad ubicada entre BíoBío y el Cerro Manquimávida. <br/>
                La naturaleza que rodea nuestro taller y nuestro hogar, nos inspira y nos permite transmitirla a través del arte, el diseño y la manufactura. <br/>
              </p>
            </div>
          </div>
          <div className={styles.contentItem}>
            <img className={styles.img2} src={taller} />
          </div>
        </div>
      </Container>

      {/* Us Section */}
      <Section className={styles.us} title='Quién está detrás de Cuach Cuach'>
        <Us
          authors={authors}
          title='Nosotros'
          subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
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
