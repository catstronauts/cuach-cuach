import React from 'react';
import { Link } from '@components/Link';
import classnames from 'classnames';
import { SocialLinks } from '@layouts/SocialLinks';
import { Divider } from '@components/Divider';
import { Icon } from '@components/Icon';
import styles from './SideMenu.module.scss';

const MenuItem = ({ children, caption, to, onGoTo }) => (
  <li className={styles.navigationItem}>
    <Link
      className={styles.link}
      to={to}
      onClick={onGoTo}
      classNameActive={styles.link__isActive}
    >
      {children || caption}
    </Link>
  </li>
);

const Panel = ({ options, isOpen, onClose }) => (
  <div
    className={classnames(
      styles.sideMenu,
      isOpen && styles.sideMenu__isOpen
    )}
  >
    <div className={styles.sideMenuContent}>
      <Icon
        name='times'
        className={styles.xIcon}
        onClick={onClose}
      />
      <div className={styles.textContent}>
        <div className={styles.navigationMenu}>
          <ul className={styles.navigation}>
            {options.map((op = {}, index) => (
              <MenuItem
                key={index}
                to={op.to}
                caption={op.caption}
                onGoTo={onClose}
              />
            ))}
          </ul>
        </div>
        <Divider themed />
        <SocialLinks className={styles.socialMedia} />
      </div>
    </div>
  </div>
);

export default Panel;
