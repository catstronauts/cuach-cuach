import React from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Helmet } from '@layouts/Helmet';
import { Section } from '@layouts/Section';
import { Link } from '@components/Link';
import BackgroundImage from 'gatsby-background-image';
import styles from './gallery-article.module.scss';

const ProductPage = (props) => {
  const product = get(props, 'data.contentfulProduct', {});
  const { images = [], title, price, body = {} } = product;

  return (
    <>
      <Helmet pageTitle={title} />
      
      <Section>
        <div className={styles.productPage}>
          <div className={styles.images}>
            <BackgroundImage className={styles.mainImage} fluid={images[0].fluid} imgAlt={title}/>
            <div className={styles.thumbnails}>
              <BackgroundImage className={styles.thumbnail} fluid={images[0].fluid} imgAlt={title}>
                <Link className={styles.layer} />
              </BackgroundImage>
              <BackgroundImage className={styles.thumbnail} fluid={images[0].fluid} imgAlt={title}/>
              <BackgroundImage className={styles.thumbnail} fluid={images[0].fluid} imgAlt={title}/>
              <BackgroundImage className={styles.thumbnail} fluid={images[0].fluid} imgAlt={title}/>
              <BackgroundImage className={styles.thumbnail} fluid={images[0].fluid} imgAlt={title}/>
              <BackgroundImage className={styles.thumbnail} fluid={images[0].fluid} imgAlt={title}/>
              <BackgroundImage className={styles.thumbnail} fluid={images[0].fluid} imgAlt={title}/>
              <div className={styles.thumbnail__filler} />
              <div className={styles.thumbnail__filler} />
              <div className={styles.thumbnail__filler} />
              <div className={styles.thumbnail__filler} />
            </div>
          </div>
          <div className={styles.text}>
            <h1 className={styles.title}>{title}</h1>
            <p>{
            !!price
              ? `Precio: $${price}`
              : ''
            }
            </p> 
            {documentToReactComponents(body.json)}
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
      price
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
