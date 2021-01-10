import React from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Helmet } from '@layouts/Helmet';
import { Section } from '@layouts/Section';
import Hero from '@components/Hero';
import styles from './gallery-article.module.scss';

const BlogPostTemplate = (props) => {
  const post = get(props, 'data.contentfulProduct', {});
  const { images = [], title } = post;

  return (
    <>
      <Helmet pageTitle={title} />
      <Hero img={images[0].fluid} imgAlt={title}/>
      <Section>
        <h1 className={styles.title}>{post.title}</h1>
        {documentToReactComponents(post.body.json)}
      </Section>
    </>
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
