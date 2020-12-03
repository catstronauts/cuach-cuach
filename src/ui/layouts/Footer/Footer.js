import React, { useContext } from 'react';
import icon from '@assets/images/icon.png';
import { Container } from '@layouts/Container';
import { AppContext } from '@layouts';
import { IconSocial } from '@components/Icon';
import styles from './Footer.module.scss';

const SocialLinks = ({ links = [] }) => links.length ? (
  <ul className={styles.socialLinks}>
    {links.map((link = {}, i) => (
      <li key={i} className={styles.socialLinks_item}>
        <a href={link.url} target="_black">
          <IconSocial name={link.type} clickable />
        </a>
      </li>
    ))}
  </ul>
) : null;

const Footer = () => {
  const { socialLinks = [] } = useContext(AppContext);

  return (
    <footer className={styles.footer}>
      <Container className={styles.content}>
        <span className={styles.companyDetails}>
          <img className={styles.img} src={icon} alt='Cuach Cuach logo' />
          Cuach Cuach
        </span>
        <SocialLinks links={socialLinks} />
      </Container>
    </footer>
  );
};
export default Footer;
