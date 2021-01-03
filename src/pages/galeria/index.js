import React from 'react';
import { graphql } from 'gatsby';
import { LINKS } from '@src/constants';
import Layout from '@layouts';
import GalleryPage from '@ui/pages/GalleryPage';

const Content = ({ data }) => (
  <Layout pageTitle={LINKS.GALLERY.caption}>
    <GalleryPage title="Gallery" data={data} />
  </Layout>
);

export default Content;

export const pageQuery = graphql`
  query GalleryIndexQuery {
    allContentfulProduct(
      sort: {
        fields: [createdAt],
        order: DESC
      }
    ) {
      edges {
        node {
          title
          slug
          images {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`;