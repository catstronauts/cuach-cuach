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

      <Section title="Recent articles">
        <CardProduct.List>
          {products.map(({ node }) => (
            <CardProduct key={node.slug} article={node} />
          ))}
        </CardProduct.List>
      </Section>
    </>
  );
};

export default GalleryPage;
