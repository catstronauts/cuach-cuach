import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import List from './CardArticle.List';

import styles from './CardArticle.module.scss';

const CardArticle = ({ article }) => (
  <li>
    <div className={styles.preview}>
      <Img alt="" fluid={article.heroImage.fluid} />
      <h3 className={styles.previewTitle}>
        <Link to={`/blog/${article.slug}`}>{article.title}</Link>
      </h3>
      <small>{article.publishDate}</small>
      <p
        dangerouslySetInnerHTML={{
          __html: article.description.childMarkdownRemark.html,
        }}
      />
    </div>
  </li>
);

CardArticle.List = List;

export default CardArticle;
