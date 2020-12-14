import React, { createContext } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import get from 'lodash/get';
import Footer from '@layouts/Footer';
import { Navigation } from '@layouts/Navigation';

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
      {children}
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
