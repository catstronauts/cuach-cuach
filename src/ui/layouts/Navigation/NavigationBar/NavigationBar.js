import React from 'react';
import { Link } from '@components/Link';
import classnames from 'classnames';
import { LINKS } from '@src/constants';
import Container from '@layouts/Container';
import icon from '@assets/images/icon.png';
import styles from './NavigationBar.module.scss';

const MenuItem = ({ children, caption, to, location = {} }) => {
  const { pathname } = location;

  const isActive = () => {
    if(pathname === LINKS.HOME.to) {
      return pathname === to;
    } else if(to === LINKS.HOME.to) {
      return false;
    }
    return pathname.includes(to);
  }
  
  return (
    <li className={styles.navigationItem}>
      <Link
        to={to}
        className={classnames(
          styles.link,
          isActive() && styles.link__isActive
        )}        
      >
        {children || caption}
      </Link>
    </li>
  );
};

const Navigation = ({ options, className, location }) => (
  <nav className={classnames(styles.nav, className)} role="navigation">
    <Container>
      <div className={styles.content}>
        <Link className={styles.logo} to={LINKS.HOME.to}>
          <img className={styles.img} src={icon} alt='Cuach Cuach logo' />
          <div className={styles.cuach}>
            <p>Cuach Cuach</p>
          </div>
        </Link>
        <ul className={styles.navigation}>
          {options.map((op = {}, index) => (
            <MenuItem
              key={index}
              to={op.to}
              location={location}
              caption={op.caption}
            />
          ))}
        </ul>
      </div>
    </Container>
  </nav>
);

export default Navigation;
