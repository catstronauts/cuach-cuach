import React, { createContext } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import get from 'lodash/get';
import Footer from '@layouts/Footer';
import { Container } from '@layouts/Container';
import { Navigation } from '@layouts/Navigation';
import './base.scss';

export const AppContext = createContext({});

const Template = ({ children }) => {
  const data = useStaticQuery(query);
  const socialMedia = get(data, 'allContentfulSocialMedia.edges', []);
  const appState = {
    socialLinks: socialMedia.map((sm = {}) => sm.node || {}),
  };

  return (
    <AppContext.Provider value={appState}>
      <Navigation />
      <Container>
        {children}
      </Container>
      <Footer />
    </AppContext.Provider>
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
