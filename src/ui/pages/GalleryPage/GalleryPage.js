import React from 'react';
import get from 'lodash/get';
import { Pagination } from '@components/Pagination';
import { Link } from '@components/Link';
import { LINKS } from '@src/constants';
import { HeroTitle } from '@components/HeroTitle';
import CardProduct from '@components/CardProduct';
import styles from './GalleryPage.module.scss';

const Category = ({ to, text }) => (
  <Link
    to={to}
    className={styles.category}
    classNameActive={styles.category__isActive}
  >
    {text}
  </Link>
);
const formatPath = (path) => {
  const newPath = path.replace(/[0-9]/g, '');

  return (newPath.substring(newPath.length-1) == "/")
    ? newPath.substring(0, newPath.length-1)
    : newPath
}

const GalleryPage = ({ data, title, pageContext = {}, path = '' }) => {
  const products = get(data, 'allContentfulProduct.edges');

  return (
    <>
       <HeroTitle>{title}</HeroTitle>

      <div className={styles.gallery}>
        <div className={styles.products}>
          <div className={styles.categoryMenu}>
          <div className={styles.text}>
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
            </div>
          </div>
          </div>
          <div className={styles.productsCards}>
            <CardProduct.List>
              {products.map(({ node }) => (
                <CardProduct key={node.slug} article={node} />
              ))}
            </CardProduct.List>
          </div>
          <Pagination {...pageContext} path={formatPath(path)} />
        </div>
      </div>
    </>
  );
};

export default GalleryPage;
