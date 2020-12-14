import React from 'react';
import classnames from 'classnames';
import { Container } from '@layouts/Container';
import styles from './Section.module.scss';

const Section = ({
  children,
  className,
  title,
}) => (
  <section className={classnames(
    styles.wrapper,
    className
  )}>
    <Container className={styles.content}>
      {title && <h6 className={styles.title}>{title}</h6>}
      {children}
    </Container>
  </section>
);

export default Section;
