import React from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import Layout from '@layouts';
import { Section } from '@layouts/Section';
import ArticlePreview from '@components/CardArticle';
import styles from './blog.module.scss';

const BlogIndex = (props) => {
  const posts = get(props, 'data.allContentfulBlogPost.edges');

  return (
    <Layout pageTitle="Blog">
      <div className={styles.hero}>Blog</div>

      <Section title="Recent articles">
        <ArticlePreview.List>
          {posts.map(({ node }) => (
            <ArticlePreview key={node.slug} article={node} />
          ))}
        </ArticlePreview.List>
      </Section>
    </Layout>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query BlogIndexQuery {
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
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
