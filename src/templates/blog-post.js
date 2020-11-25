import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import get from 'lodash/get';
import Img from 'gatsby-image';
import Layout from '@layouts';

import styles from './blog-post.module.css';

const BlogPostTemplate = (props) => {
  const post = get(props, 'data.contentfulBlogPost');
  const siteTitle = get(props, 'data.site.siteMetadata.title');

  return (
    <Layout location={props.location}>
      <div style={{ background: '#fff' }}>
        <Helmet title={`${post.title} | ${siteTitle}`} />
        <div className={styles.hero}>
          <Img
            className={styles.heroImage}
            alt={post.title}
            fluid={post.heroImage.fluid}
          />
        </div>
        <div className="wrapper">
          <h1 className="section-headline">{post.title}</h1>
          <p
            style={{
              display: 'block',
            }}
          >
            {post.publishDate}
          </p>
          <div
            dangerouslySetInnerHTML={{
              __html: post.body.childMarkdownRemark.html,
            }}
          />
        </div>
      </div>
    </Layout>
  )
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishDate(formatString: "MMMM Do, YYYY")
      heroImage {
        fluid(maxWidth: 1180, background: "rgb:000000") {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
