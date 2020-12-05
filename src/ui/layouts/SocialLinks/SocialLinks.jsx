import React, { useContext } from 'react';
import classnames from 'classnames';
import { AppContext } from '@layouts';
import { IconSocial } from '@components/Icon';
import styles from './SocialLinks.module.scss';

export const SocialLinks = ({ className }) => {
  const { socialLinks = [] } = useContext(AppContext);

  return socialLinks.length ? (
    <ul className={classnames(styles.socialLinks, className)}>
      {socialLinks.map((link = {}, i) => (
        <li key={i} className={styles.socialLinks_item}>
          <a href={link.url} target="_black">
            <IconSocial name={link.type} clickable />
          </a>
        </li>
      ))}
    </ul>
  ) : null;
};

export default SocialLinks;
