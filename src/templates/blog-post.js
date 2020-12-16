import React from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import Layout from '@layouts';
import { Section } from '@layouts/Section';
import Hero from '@components/Hero';
import styles from './blog-post.module.scss';

const BlogPostTemplate = (props) => {
  const post = get(props, 'data.contentfulBlogPost', {});
  const { heroImage, title } = post;

  return (
    <Layout pageTitle={post.title}>
      <Hero img={heroImage.fluid} imgAlt={title}/>
      <Section>
        <h1 className={styles.title}>{post.title}</h1>
        <p>
          {post.publishDate}
        </p>
        <div
          dangerouslySetInnerHTML={{
            __html: post.body.childMarkdownRemark.html,
          }}
        />
      </Section>
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishDate(formatString: "MMMM Do, YYYY")
      heroImage {
        fluid(maxWidth: 1180, background: "rgb:000000") {
          ...GatsbyContentfulFluid
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
