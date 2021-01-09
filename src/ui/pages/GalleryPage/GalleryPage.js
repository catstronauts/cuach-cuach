import React from 'react';
import get from 'lodash/get';
import { Link } from '@components/Link';
import { LINKS } from '@src/constants';
import CardProduct from '@components/CardProduct';
import styles from './GalleryPage.module.scss';

const Category = ({ to, text }) => (
  <Link to={to}>
    <p className={styles.category}>{text}</p>
  </Link>
);

const GalleryPage = ({ data, title }) => {
  const products = get(data, 'allContentfulProduct.edges');

  return (
    <>
      <div className={styles.hero}>{title}</div>

      <div className={styles.gallery}>
        <div className={styles.products}>
          <div className={styles.categoryMenu}>
            <p className={styles.categoryTitle}>Categorías:</p>
            <div className={styles.categories}>
              <Category
                to={LINKS.GALLERY.to}
                text={LINKS.GALLERY.text}
              />
              <Category
                to={LINKS.GALLERY_TEXTIL.to}
                text={LINKS.GALLERY_TEXTIL.text}
              />
              <Category
                to={LINKS.GALLERY_ARTE.to}
                text={LINKS.GALLERY_ARTE.text}
              />
              <Category
                to={LINKS.GALLERY_ARQUITECTURA.to}
                text={LINKS.GALLERY_ARQUITECTURA.text}
              />

              {/* <Link to={LINKS.GALLERY.to}>
                <p className={styles.category}>{LINKS.GALLERY.text}</p>
              </Link>
              <Link to={LINKS.GALLERY_TEXTIL.to}>
                <p className={styles.category}>{LINKS.GALLERY_TEXTIL.text}</p>
              </Link>
              <Link to={LINKS.GALLERY_ARTE.to}>
                <p className={styles.category}>{LINKS.GALLERY_ARTE.text}</p>
              </Link>
              <Link to={LINKS.GALLERY_ARQUITECTURA.to}>
                <p className={styles.category}>{LINKS.GALLERY_ARQUITECTURA.text}</p>
              </Link> */}
            </div>
          </div>
          <div className={styles.productsCards}>
            <CardProduct.List>
              {products.map(({ node }) => (
                <CardProduct key={node.slug} article={node} />
              ))}
            </CardProduct.List>
          </div>
        </div>
      </div>
    </>
  );
};

export default GalleryPage;
