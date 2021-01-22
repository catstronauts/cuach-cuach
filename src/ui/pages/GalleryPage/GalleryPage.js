import React from 'react';
import get from 'lodash/get';
import classnames from 'classnames';
import { Pagination } from '@components/Pagination';
import { Link } from '@components/Link';
import { LINKS } from '@src/constants';
import { formatPath, pathIsActive } from '@src/utils';
import { HeroTitle } from '@components/HeroTitle';
import CardProduct from '@components/CardProduct';
import styles from './GalleryPage.module.scss';

const Category = ({ to, text, path }) => {
  const isActive = pathIsActive(path, to, LINKS.GALLERY.to);

  return (
    <Link
      to={to}
      className={classnames(
        styles.category,
        isActive && styles.category__isActive
      )}
    >
      {text}
    </Link>
  );
};

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
                  path={path}
                  to={LINKS.GALLERY.to}
                  text={LINKS.GALLERY.text}
                />
                <Category
                  path={path}
                  to={LINKS.GALLERY_TEXTIL.to}
                  text={LINKS.GALLERY_TEXTIL.text}
                />
                <Category
                  path={path}
                  to={LINKS.GALLERY_ARTE.to}
                  text={LINKS.GALLERY_ARTE.text}
                />
                <Category
                  path={path}
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
            <Pagination className={styles.pagination} {...pageContext} path={formatPath(path)} />
          </div>
        </div>
      </div>
    </>
  );
};

export default GalleryPage;
