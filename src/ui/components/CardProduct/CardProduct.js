import React from 'react';
import { Link } from '@components/Link';
import Img from 'gatsby-image';
import { getProductUrlBySlug } from '@src/constants';
import List from './CardProduct.List';

import styles from './CardProduct.module.scss';

const CardProduct = ({ article }) => (
  <li>
    <div className={styles.preview}>
      <Img alt={article.title} fluid={article.images[0].fluid} />
      <h3 className={styles.previewTitle}>
        <Link to={getProductUrlBySlug(article.slug)}>{article.title}</Link>
      </h3>
      <p
        dangerouslySetInnerHTML={{
          __html: article.description.childMarkdownRemark.html,
        }}
      />
    </div>
  </li>
);

CardProduct.List = List;

export default CardProduct;
