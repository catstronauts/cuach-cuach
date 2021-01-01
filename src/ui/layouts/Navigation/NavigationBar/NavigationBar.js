import React from 'react';
import { Link } from 'gatsby';
import classnames from 'classnames';
import { LINKS } from '@src/constants';
import Container from '@layouts/Container';
import icon from '@assets/images/icon.png';
import styles from './NavigationBar.module.scss';

const MenuItem = ({ children, caption, to }) => (
  <li className={styles.navigationItem}>
    <Link
      className={styles.link}
      activeClassName={styles.link__isActive}
      to={to}
    >
      {children || caption}
    </Link>
  </li>
);

const Navigation = ({ options, className }) => (
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
              caption={op.caption}
            />
          ))}
        </ul>
      </div>
    </Container>
  </nav>
);

export default Navigation;
