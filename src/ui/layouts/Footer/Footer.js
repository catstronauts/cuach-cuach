import React from 'react';
import { Link } from '@components/Link';
import { LINKS } from '@src/constants';
import icon from '@assets/images/icon.png';
import { Container } from '@layouts/Container';
import { SocialLinks } from '@layouts/SocialLinks';
import styles from './Footer.module.scss';

const Footer = () => (
  <footer className={styles.footer}>
    <Container className={styles.content}>
      <Link to={LINKS.HOME.to} className={styles.companyDetails}>
        <img className={styles.img} src={icon} alt='Cuach Cuach logo' />
        Cuach Cuach
      </Link>
      <SocialLinks />
    </Container>
  </footer>
);

export default Footer;
