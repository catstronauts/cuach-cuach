import React from 'react';
import classnames from 'classnames';
import { useAppContext } from '@layouts';
import { IconSocial } from '@components/Icon';
import styles from './SocialLinks.module.scss';

export const SocialLinks = ({ className, itemClassName }) => {
  const { socialLinks = [] } = useAppContext();

  return socialLinks.length ? (
    <ul className={classnames(styles.socialLinks, className)}>
      {socialLinks.map((link = {}, i) => (
        <li key={i} className={classnames(styles.item, itemClassName)}>
          <a href={link.url} target="_black" alt={`link to ${link.type} account`}>
            <IconSocial name={link.type} clickable />
          </a>
        </li>
      ))}
    </ul>
  ) : null;
};

export default SocialLinks;
