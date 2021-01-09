import React from 'react';
import { Link } from 'gatsby';
import { LINKS } from '@src/constants';
import Button from '@ui/components/Button';
import styles from './404.module.scss';
import img1 from '@assets/images/404_1.png';
import img2 from '@assets/images/404_2.png';

const NotFound = () => (
  <div className={styles.page404}>
    <div className={styles.content}>
      <div className={styles.text}>
        <h4 className={styles.title}><span className={styles.title404}>404</span><br />Página no encontrada</h4>
        <p className={styles.paragraph}>Ups! Parece que ésta página no existe.</p>
        <Link to={LINKS.HOME.to}>
          <Button caption='Volver al Inicio' />
        </Link>
      </div>
      <div className={styles.imagesWrapper}>
        <div className={styles.images}>
          <img className={styles.img1} src={img1} />
          <img className={styles.img2} src={img2} />
        </div>
      </div>
    </div>
  </div>
);

export default NotFound;
