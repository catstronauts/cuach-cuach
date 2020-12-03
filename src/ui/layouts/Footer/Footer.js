import React, { useContext } from 'react';
import icon from '@assets/images/icon.png';
import { Container } from '@layouts/Container';
import { AppContext } from '@layouts';
import { IconSocial } from '@components/Icon';
import styles from './Footer.module.scss';

const SocialLinks = ({ social = [] }) => social.length ? (
  <ul className={styles.socialLinks}>
    {social.map((sm = {}, i) => (
      <li key={i} className={styles.socialLinks_item}>
        <a href={sm.url} className={styles.socialLinks_link} target="_black">
          <IconSocial name={sm.type} />
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
        <SocialLinks social={socialLinks} />
      </Container>
    </footer>
  );
};
export default Footer;
