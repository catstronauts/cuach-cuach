import React from 'react';
import Layout from '@layouts';
import Button from '@ui/components/Button';
import styles from './404.module.scss';
import img1 from '@assets/images/404_1.png';
import img2 from '@assets/images/404_2.png'

const NotFound = () => (
  <Layout>
    <div className={styles.page404}>
      <div className={styles.content}>
        <div className={styles.text}>
          <h4 className={styles.title}><span className={styles.title404}>404</span><br />Página no encontrada</h4>
          <p className={styles.paragraph}>Ups! Parece que ésta página no existe.</p>
          <Button caption='Volver al Inicio' />
        </div>
        <div className={styles.imagesWrapper}>
          <div className={styles.images}>
            <img className={styles.img1} src={img1}/>
            <img className={styles.img2} src={img2} /> 
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default NotFound;
