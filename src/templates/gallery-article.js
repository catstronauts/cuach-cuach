import React from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Helmet } from '@layouts/Helmet';
import { Section } from '@layouts/Section';
// import Hero from '@components/Hero';
import BackgroundImage from 'gatsby-background-image';
import styles from './gallery-article.module.scss';

const ProductPage = (props) => {
  const post = get(props, 'data.contentfulProduct', {});
  const { images = [], title } = post;

  return (
    <>
      <Helmet pageTitle={title} />
      
      <Section>
        <div className={styles.productPage}>
          <div className={styles.images}>
            <BackgroundImage className={styles.mainImage} fluid={images[0].fluid} imgAlt={title}/>
          </div>
          <div className={styles.text}>
            <h1 className={styles.title}>{post.title}</h1>
            {documentToReactComponents(post.body.json)}
          </div>
        </div>
      </Section>
    </>
  );
};

export default ProductPage;

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
