import React from 'react';
import { Link } from 'gatsby';
import classnames from 'classnames';
import Container from '@layouts/Container';
import logo from '@assets/images/logo.jpg';
import burger from '@assets/images/burger_menu.png';
import styles from './SideMenu.module.scss';

const MenuItem = ({ children, caption, to }) => (
  <li className={styles.navigationItem}>
    <Link className={styles.link} to={to}>
      {children || caption}
    </Link>
  </li>
);

const SideMenu = ({ options, className, onCLose, isOpen}) => (
  <nav 
    id='navigation'
    className={classnames(
      styles.nav,
      className,
      isOpen && 'isOpen'
      )} 
    role="navigation"
    >
    <Container>
      <div className={styles.content}>
        <Link className={styles.logo} to="/">
          <img className={styles.img} src={logo} />
        </Link>
        <div className={styles.menuIcon}>
          <img src={burger} />
        </div>
      </div>
    </Container>
    <div className={styles.sideMenu}>
      <div className={styles.sideMenuContent}>
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
    </div>
  </nav>
);

export default SideMenu;
