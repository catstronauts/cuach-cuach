import React from 'react';
import { Link } from 'gatsby';
import classnames from 'classnames';
import xIcon from '@assets/images/xIcon.png';
import styles from './SideMenu.module.scss';

const MenuItem = ({ children, caption, to }) => (
  <li className={styles.navigationItem}>
    <Link className={styles.link} to={to}>
      {children || caption}
    </Link>
  </li>
);

const Panel = ({ options, isOpen, onClose }) => (
  <div
    className={classnames(
      styles.sideMenu,
      isOpen && styles.sideMenu__isOpen,
    )}
  >
    <div className={styles.sideMenuContent}>
      <div className={styles.menuIcon} onClick={onClose}>
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
        <div className={styles.socialMedia}>
          <p>Social Media Icons</p>
        </div>
      </div>
    </div>
  </div>
);

export default Panel;
