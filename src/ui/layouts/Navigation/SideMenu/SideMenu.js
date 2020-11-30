import React, { useState } from 'react';
import { Link } from 'gatsby';
import classnames from 'classnames';
import Container from '@layouts/Container';
import icon from '@assets/images/icon.png';
import burger from '@assets/images/burger_menu.png';
import Overlay from './SideMenu.Overlay';
import Panel from './SideMenu.Panel';
import styles from './SideMenu.module.scss';


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
            <img src={burger} alt='burger icon' />
          </div>
        </div>
      </Container>
      <Overlay isOpen={isOpen} />
      <Panel
        isOpen={isOpen}
        options={options}
        onClose={toggleClick}
      />
    </nav>
  );
};

export default SideMenu;
