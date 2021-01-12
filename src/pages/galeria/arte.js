import React from 'react';
import { graphql } from 'gatsby';
import { LINKS } from '@src/constants';
import { Helmet } from '@layouts/Helmet';
import GalleryPage from '@ui/pages/GalleryPage';

const Content = ({ data }) => (
  <>
    <Helmet pageTitle={LINKS.GALLERY_ARTE.caption} />
    <GalleryPage title="Gallery" data={data} />
  </>
);

export default Content;

export const pageQuery = graphql`
  query GalleryArteQuery {
    allContentfulProduct(
      filter: {
        type: {eq: "arte"}
      }
      sort: {
        fields: [createdAt],
        order: DESC
      }
    ) {
      edges {
        node {
          title
          slug
          price
          images {
            fluid {
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
