import React, { useState } from 'react';
import { Link } from 'gatsby';
import classnames from 'classnames';
import Container from '@layouts/Container';
import icon from '@assets/images/icon.png';
import burger from '@assets/images/burger_menu.png';
import styles from './SideMenu.module.scss';

const MenuItem = ({ children, caption, to }) => (
  <li className={styles.navigationItem}>
    <Link className={styles.link} to={to}>
      {children || caption}
    </Link>
  </li>
);

const SideMenu = ({ options, className }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      id='navigation'
      className={classnames(
        styles.nav,
        className,
      )}
      role="navigation"
      >
      <Container>
        <div className={styles.content}>
          <Link className={styles.logo} to="/">
            <img className={styles.img} src={icon} alt='Cuach Cuach logo' />
          </Link>
          <div className={styles.menuIcon} onClick={toggleClick}>
            <img src={burger} alt='burger logo' />
          </div>
        </div>
      </Container>
      <div className={classnames(
          styles.sideMenu,
          isOpen && styles.sideMenu__isOpen,
      )}>
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
};

export default SideMenu;