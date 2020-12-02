import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import get from 'lodash/get';
import { Container } from './Container';
import { Navigation } from './Navigation';
import './base.scss';

const Template = ({ children }) => {
  const data = useStaticQuery(query);

  const socialMedia = get(data, 'allContentfulSocialMedia.edges', []);
  const socials = socialMedia.map((sm = {}) => sm.node || {});

  console.log(socials);
  return (
    <Container>
      <Navigation />
      {children}
    </Container>
  );
};

export default Template;

const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
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
