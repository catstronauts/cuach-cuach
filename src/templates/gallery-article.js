import React from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import { priceTag } from '@src/utils';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Helmet } from '@layouts/Helmet';
import { Section } from '@layouts/Section';
import { Link } from '@components/Link';
import { LINKS } from '@src/constants';
import Carousel from './gallery-article.Carousel';
import styles from './gallery-article.module.scss';

const Body = ({ product }) => {
  const { title, price, body = {}, description = {} } = product;
  const content = !!body
    ? documentToReactComponents(body.json)
    : <p dangerouslySetInnerHTML={{ __html: description.childMarkdownRemark.html }} />;

  return (
    <article className={styles.text}>
      <h1 className={styles.title}>{title}</h1>
      {!!price &&
        <p className={styles.price}><strong>{priceTag(price)}</strong></p>
      }
      <div className={styles.body}>{content}</div>
      <div className={styles.messageUs}>
        <p>Si te gusta o tienes una idea en mente que quieres que desarrollemos envíanos un mensaje <Link highlight to={LINKS.CONTACT_US.to}>aquí</Link>.</p>
      </div>
    </article>
  );
};

const ProductPage = (props) => {
  const product = get(props, 'data.contentfulProduct', {});
  const { images = [], title } = product;

  return (
    <>
      <Helmet pageTitle={title} />

      <Section>
        <div className={styles.productPage}>
          <Carousel images={images} />
          <Body product={product} />
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
        fluid(maxWidth: 450, resizingBehavior: SCALE) {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
      description {
        childMarkdownRemark {
          html
        }
      }
      body {
        json
      }
    }
  }
`;
