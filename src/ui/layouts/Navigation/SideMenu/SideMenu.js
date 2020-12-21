import React, { useState } from 'react';
import { Link } from 'gatsby';
import classnames from 'classnames';
import { LINKS } from '@src/constants';
import Container from '@layouts/Container';
import icon from '@assets/images/icon.png';
import { Icon } from '@components/Icon';
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
        className
      )}
      role="navigation"
    >
      <Container>
        <div className={styles.content}>
          <Link className={styles.logo} to={LINKS.HOME.to}>
            <img className={styles.img} src={icon} alt='Cuach Cuach logo' />
          </Link>
          <Icon
            name='bars'
            className={styles.menuIcon}
            onClick={toggleClick}
          />
        </div>
      </Container>
      <Overlay
        isOpen={isOpen}
        onClose={toggleClick}
      />
      <Panel
        isOpen={isOpen}
        options={options}
        onClose={toggleClick}
      />
    </nav>
  );
};

export default SideMenu;
