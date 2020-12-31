import React from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import Layout from '@layouts';
import { Section } from '@layouts/Section';
// import ArticlePreview from '@components/CardArticle';
import CardProduct from '@components/CardProduct';
import styles from './blog.module.scss';

const BlogIndex = (props) => {
  const products = get(props, 'data.allContentfulProduct.edges');

  return (
    <Layout pageTitle="Blog">
      <div className={styles.hero}>Gallery</div>

      <Section title="Recent articles">
        <CardProduct.List>
          {products.map(({ node }) => (
            <CardProduct key={node.slug} article={node} />
          ))}
        </CardProduct.List>
      </Section>
    </Layout>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query GalleryIndexQuery {
    allContentfulProduct(sort: { fields: [createdAt], order: DESC }) {
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
