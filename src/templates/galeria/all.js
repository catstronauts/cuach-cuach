import React from "react";
import { graphql } from "gatsby";
import { LINKS } from '@src/constants';
import { Helmet } from '@layouts/Helmet';
import GalleryPage from '@ui/pages/GalleryPage';

export default (props) => (
  <>
    <Helmet pageTitle={LINKS.GALLERY.caption} />
    <GalleryPage title="Gallery" {...props} />
  </>
);

export const blogListQuery = graphql`
  query prodAllQuery($skip: Int!, $limit: Int!) {
    allContentfulProduct(
      limit: $limit
      skip: $skip
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
