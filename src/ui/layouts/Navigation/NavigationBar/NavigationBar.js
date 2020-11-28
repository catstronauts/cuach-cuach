import React from 'react';
import { Link } from 'gatsby';
import classnames from 'classnames';
import Container from '@layouts/Container';
import logo from '@assets/images/logo.jpg';
import styles from './NavigationBar.module.scss';

const MenuItem = ({children, caption, to}) => (
  <li className={styles.navigationItem}>
    <Link className={styles.test} to={to}>
      {children || caption}
    </Link>
  </li>
);

const Navigation = ({ className }) => (
  <nav className={classnames(styles.nav, className)} role="navigation">
    <Container>
      <div className={styles.content}>
        <Link className={styles.logo} to="/">
          <img className={styles.img} src={logo} />
        </Link>
        <ul className={styles.navigation}>
          <MenuItem to="/" caption="Home" />
          <MenuItem to="/blog/" caption="Blog" />
        </ul>
      </div>
    </Container>
  </nav>
);

export default Navigation;
