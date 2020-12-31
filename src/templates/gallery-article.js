import React from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Layout from '@layouts';
import { Section } from '@layouts/Section';
import Hero from '@components/Hero';
import styles from './blog-post.module.scss';

const BlogPostTemplate = (props) => {
  const post = get(props, 'data.contentfulProduct', {});
  const { images = [], title } = post;

  return (
    <Layout pageTitle={title}>
      <Hero img={images[0].fluid} imgAlt={title}/>
      <Section>
        <h1 className={styles.title}>{post.title}</h1>
        {documentToReactComponents(post.body.json)}
      </Section>
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query GalleryArticleBySlug($slug: String!) {
    contentfulProduct(slug: { eq: $slug }) {
      title
      images {
        fluid(maxWidth: 1180, background: "rgb:000000") {
          ...GatsbyContentfulFluid
        }
      }
      body {
        json
      }
    }
  }
`;
