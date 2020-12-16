import React from 'react';
import { graphql } from 'gatsby';
import Layout from '@layouts';
import { Section } from '@layouts/Section';
import Us from '@ui/pages/home/Us';
import styles from './blog.module.scss';

const BlogIndex = ({ data = {}, ...rest }) => {
  const siteAuthors = data?.allContentfulPerson?.edges || [];

  const authors = siteAuthors.map((auth = {}) => ({
    ...auth?.node,
    shortBio: auth?.node?.shortBio?.shortBio || '',
    imgFluid: auth?.node?.image?.fluid || {},
  }));

  return (
    <Layout pageTitle="Quienes somos">
      <div className={styles.hero}>About Us</div>

      {/* Us Section */}
      <Section title='Quién está detrás de Cuach Cuach'>
        <Us
          authors={authors}
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
          image {
            fluid(
              maxWidth: 350
              maxHeight: 350
            ) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`;
