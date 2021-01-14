import React from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Helmet } from '@layouts/Helmet';
import { Section } from '@layouts/Section';
import { Link } from '@components/Link';
import { LINKS } from '@src/constants';
import Carousel from './gallery-article.Carousel';
import styles from './gallery-article.module.scss';

const ProductPage = (props) => {
  const product = get(props, 'data.contentfulProduct', {});
  const { images = [], title, price, body = {} } = product;

  return (
    <>
      <Helmet pageTitle={title} />
      
      <Section>
        <div className={styles.productPage}>
          <Carousel images={images} />
          <div className={styles.text}>
            <h1 className={styles.title}>{title}</h1>
            {
            !!price
              ? <p className={styles.price}>`Precio: $${price}`</p> 
              : ''
            }
           
            <p className={styles.body}>{documentToReactComponents(body.json)}</p>
            <div className={styles.messageUs}>
              <p>Si te gusta o tienes una idea en mente que quieres que desarrollemos envíanos un mensaje <Link highlight to={LINKS.CONTACT_US.to}>aquí</Link>.</p>
            </div>
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
