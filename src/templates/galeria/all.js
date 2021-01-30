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
  query prodAllQuery($skip: Int!, $limit: Int!) {
    allContentfulAsset(filter: {contentful_id: {eq: "6TZo8KYrTMY8eGu4LpmG9x"}}) {
      edges {
        node {
          fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
            ...GatsbyContentfulFluid_tracedSVG
          }
        }
      }
    }
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
