import React from 'react';
import icon from '@assets/images/icon.png';
import { Container } from '@layouts/Container';
import { SocialLinks } from '@layouts/SocialLinks';
import styles from './Footer.module.scss';

const Footer = () => (
  <footer className={styles.footer}>
    <Container className={styles.content}>
      <span className={styles.companyDetails}>
        <img className={styles.img} src={icon} alt='Cuach Cuach logo' />
        Cuach Cuach
      </span>
      <SocialLinks />
    </Container>
  </footer>
);

export default Footer;
