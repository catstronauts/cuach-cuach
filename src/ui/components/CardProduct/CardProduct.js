import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { getProductUrlBySlug } from '@src/constants';
import List from './CardProduct.List';

import styles from './CardProduct.module.scss';

const CardProduct = ({ article }) => {
  console.log(article);  

  return (
    <li>
      <div className={styles.preview}>
        <Img 
          className={styles.image}
          alt={article.title}
          fluid={article.images[0].fluid} />
        <h3 className={styles.previewTitle}>
          <Link to={getProductUrlBySlug(article.slug)}>{article.title}</Link>
        </h3>
        <span>{
          !!article.price
            ? `$ ${article.price}`
            : ''
          }
        </span>
        <p
          dangerouslySetInnerHTML={{
            __html: article.description.childMarkdownRemark.html,
          }}
        />
      </div>
    </li>
  );
};

CardProduct.List = List;

export default CardProduct;
