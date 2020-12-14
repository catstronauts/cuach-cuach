import React from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import { Helmet } from 'react-helmet';
import Layout from '@layouts';
import { Section } from '@layouts/Section';
import Us from '@ui/pages/home/Us';
import styles from './blog.module.scss';

const BlogIndex = ({ data = {} }) => {
  const siteTitle = get(data, 'site.siteMetadata.title');
  const siteAuthors = get(data, 'allContentfulPerson.edges', []).map((auth = {}) => {
    const { node = {} } = auth;
    return {
      ...node,
      shortBio: node?.shortBio?.shortBio || '',
      imgFluid: node?.heroImage?.fluid || {},
    };
  });

  return (
    <Layout>
      <Helmet title={siteTitle} />
      <div className={styles.hero}>About Us</div>

      {/* Us Section */}
      <Section title='Quién está detrás de Cuach Cuach'>
        <Us
          authors={siteAuthors}
          title='Nosotros'
          subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        >
        </Us>
      </Section>
    </Layout>
  );
};

export default BlogIndex;

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
          heroImage: image {
            fluid(
              maxWidth: 350
              maxHeight: 350
              resizingBehavior: PAD
              background: "rgb:000000"
            ) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`;
