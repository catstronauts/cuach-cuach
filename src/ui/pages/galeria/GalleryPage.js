import React from 'react';
import get from 'lodash/get';
import Layout from './node_modules/@layouts';
import { Section } from './node_modules/@layouts/Section';
import CardProduct from './node_modules/@components/CardProduct';
import styles from './GalleryPage.module.scss';

const GalleryPage = ({ data, title }) => {
  const products = get(data, 'allContentfulProduct.edges');

  return (
    <Layout pageTitle={title}>
      <div className={styles.hero}>{title}</div>

      <Section title="Recent articles">
        <CardProduct.List>
          {products.map(({ node }) => (
            <CardProduct key={node.slug} article={node} />
          ))}
        </CardProduct.List>
      </Section>
    </Layout>
  );
};

export default GalleryPage;
