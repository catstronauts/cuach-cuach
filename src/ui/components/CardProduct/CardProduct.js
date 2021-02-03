import React from 'react';
import { priceTag } from '@src/utils';
import { Link } from '@components/Link';
import BackgroundImage from 'gatsby-background-image';
import { getProductUrlBySlug } from '@src/constants';
import { Icon } from '@components/Icon';
import List from './CardProduct.List';

import styles from './CardProduct.module.scss';

const CardProduct = ({ article }) => {
  const { images } = article;
  const f = (!!images && images.length) ? images[0].fluid : {};

  return (
    <li>
      <div className={styles.CardProduct}>
        <div className={styles.imgWrapper}>
          <BackgroundImage
            className={styles.image}
            alt={article.title}
            fluid={f}
          >

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
          <div className={styles.price}>{priceTag(article.price)}
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
