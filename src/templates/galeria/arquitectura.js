import React from 'react';
import { graphql } from 'gatsby';
import { LINKS } from '@src/constants';
import { Helmet } from '@layouts/Helmet';
import GalleryPage from '@ui/pages/GalleryPage';

const Page = (props) => (
  <>
    <Helmet pageTitle={LINKS.GALLERY.caption} />
    <GalleryPage title="Gallery" {...props} />
  </>
);

export const blogListQuery = graphql`
  query prodArqQuery($skip: Int!, $limit: Int!) {
    allContentfulProduct(
      limit: $limit
      skip: $skip
      sort: {
        fields: [createdAt],
        order: DESC
      }
      filter: {
        type: {eq: "arquitectura"}
      }
    ) {
      edges {
        node {
          title
          slug
          price
          images {
            fluid {
              ...GatsbyContentfulFluid_tracedSVG
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

export default Page;
