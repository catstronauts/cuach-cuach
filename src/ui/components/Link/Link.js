import React from 'react';
import classnames from 'classnames';
import { Link } from 'gatsby';
import styles from './Link.module.scss';

const Component = ({ children, className, to }) => (
  <Link
    to={to}
    className={classnames(
      styles.link,
      className
    )}
  >
    {children}
  </Link>
);

export default Component;
