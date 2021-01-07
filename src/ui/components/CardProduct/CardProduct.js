import React from 'react';
import { Link } from 'gatsby';
// import Img from 'gatsby-image';
import BackgroundImage from 'gatsby-background-image';
import { getProductUrlBySlug } from '@src/constants';
import List from './CardProduct.List';

import styles from './CardProduct.module.scss';

const CardProduct = ({ article }) => {

  return (
    <li>
      <div className={styles.CardProduct}>
        {/* <Img 
          className={styles.image}
          alt={article.title}
          fluid={article.images[0].fluid} /> */}
        <div className={styles.imgWrapper}>
          <BackgroundImage
            className={styles.image}
            alt={article.title}
            fluid={article.images[0].fluid} />
        </div>
        
        <div className={styles.text}>
          <h3 className={styles.productTitle}>
            <Link className={styles.title} to={getProductUrlBySlug(article.slug)}>{article.title}</Link>
          </h3>
          <div className={styles.price}>{
            !!article.price
              ? `$${article.price}`
              : ''
            }
          </div>
          <p
            className={styles.description}
            dangerouslySetInnerHTML={{
              __html: article.description.childMarkdownRemark.html,
            }}
          />
        </div>
      </div>
    </li>
  );
};

CardProduct.List = List;

export default CardProduct;
