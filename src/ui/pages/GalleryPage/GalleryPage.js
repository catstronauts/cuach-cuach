import React from 'react';
import get from 'lodash/get';
import { Section } from '@layouts/Section';
import CardProduct from '@components/CardProduct';
import styles from './GalleryPage.module.scss';

const GalleryPage = ({ data, title }) => {
  const products = get(data, 'allContentfulProduct.edges');

  return (
    <>
      <div className={styles.hero}>{title}</div>

      <Section title="Recent Products">
        <div className={styles.products}>
          <div className={styles.categoryMenu}>
            <p className={styles.categoryTitle}>Categorías:</p>
            <ul>
              <li className={styles.category}>Manufactura</li>
              <li className={styles.category}>Arte</li>
              <li className={styles.category}>Arquitectura</li>
            </ul>
          
          </div>
          <div className={styles.productsCards}>
            <CardProduct.List>
              {products.map(({ node }) => (
                <CardProduct key={node.slug} article={node} />
              ))}
            </CardProduct.List>
          </div>
        </div>
      </Section>
    </>
  );
};

export default GalleryPage;
