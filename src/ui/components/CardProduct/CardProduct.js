import React from 'react';
import { Link } from '@components/Link';
// import Img from 'gatsby-image';
import BackgroundImage from 'gatsby-background-image';
import { getProductUrlBySlug } from '@src/constants';
import { Icon } from '@components/Icon';
import List from './CardProduct.List';

import styles from './CardProduct.module.scss';

const CardProduct = ({ article }) => {

  return (
    <li>
      <div className={styles.CardProduct}>
        <div className={styles.imgWrapper}>
          <BackgroundImage
            className={styles.image}
            alt={article.title}
            fluid={article.images[0].fluid}>
            
            <Link className={styles.layer} to={getProductUrlBySlug(article.slug)}>
              <Icon  
                name='search'
                className={styles.search} />
              {/* Ver detalle */}
            </Link>
          </BackgroundImage>
        </div>
        
        <div className={styles.text}>
          <h3 className={styles.productTitle}>
            <Link className={styles.title} to={getProductUrlBySlug(article.slug)}>{article.title}</Link>
          </h3>
          <div className={styles.price}>{
            !!article.price
              ? `Precio: $${article.price}`
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
