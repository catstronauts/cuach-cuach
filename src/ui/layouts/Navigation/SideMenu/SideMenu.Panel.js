import React from 'react';
import { Link } from 'gatsby';
import classnames from 'classnames';
import xIcon from '@assets/images/xIcon.png';
import { SocialLinks } from '@layouts/SocialLinks';
import styles from './SideMenu.module.scss';

const MenuItem = ({ children, caption, to }) => (
  <li className={styles.navigationItem}>
    <Link
      className={styles.link}
      to={to}
      activeClassName={styles.link__isActive}
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
      {/* TODO: Temporal fix, uncoment next line and delete dupicated when found same size burger and X icons  */}
      {/* <div className={styles.menuIcon} onClick={onClose}> */}
      <div className={styles.xIcon} onClick={onClose}>
        <img src={xIcon} alt='close icon' />
      </div>
      <div className={styles.textContent}>
        <div className={styles.navigationMenu}>
          <ul className={styles.navigation}>
            {options.map((op = {}, index) => (
              <MenuItem
                key={index}
                to={op.to}
                caption={op.caption}
              />
            ))}
          </ul>
        </div>
        <SocialLinks className={styles.socialMedia} />
      </div>
    </div>
  </div>
);

export default Panel;
