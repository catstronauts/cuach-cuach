import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import get from 'lodash/get';
import useWindowSize from '@hooks/useWindowSize';

const AppContext = React.createContext({});

const useAppContext = () => {
  const context = React.useContext(AppContext);
  if (!context) {
    throw new Error(
      'useAppContext cannot be rendered outside the Layout component'
    );
  }

  return context;
};

const AppProvider = ({ children }) => {
  const windowSize = useWindowSize();
  const data = useStaticQuery(query);
  const socialMedia = get(data, 'allContentfulSocialMedia.edges', []);

  return (
    <AppContext.Provider
      value={{
        socialLinks: socialMedia.map((sm = {}) => sm.node || {}),
        windowProps: windowSize,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, useAppContext };

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
