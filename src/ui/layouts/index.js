import React, { createContext } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Helmet } from 'react-helmet';
import get from 'lodash/get';
import Footer from '@layouts/Footer';
import { Navigation } from '@layouts/Navigation';

export const AppContext = createContext({});

const Template = ({ children, pageTitle }) => {
  const data = useStaticQuery(query);
  const socialMedia = get(data, 'allContentfulSocialMedia.edges', []);
  const appState = {
    socialLinks: socialMedia.map((sm = {}) => sm.node || {}),
  };

  return (
    <>
      <Helmet
        title={pageTitle
          ? `${pageTitle} | Cuach-Cuach`
          : 'Cuach-Cuach'}
        meta={[
          { name: 'description', content: 'Taller de artesanias cuach-cuach' },
          { name: 'keywords', content: 'taller, cuachcuach, cuach, textil, manualidades, cuadros' },
        ]}
      >
        <html lang="es" />
      </Helmet>
      <AppContext.Provider value={appState}>
        <Navigation />
        {children}
        <Footer />
      </AppContext.Provider>
    </>
  );
};

export default Template;

const query = graphql`
  query {
    allContentfulSocialMedia {
      totalCount
      pageInfo {
        perPage
      }
      edges {
        node {
          type
          url
        }
      }
    }
  }
`;
