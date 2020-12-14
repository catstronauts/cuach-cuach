import React from 'react';
import Layout from '@layouts';
import { Section } from '@layouts/Section';
import styles from './blog.module.scss';

const NotFound = ({ data = {} }) => (
  <Layout>
    <div className={styles.hero}>404</div>
    <Section title='No results found 😞'>
      not found
    </Section>
  </Layout>
);

export default NotFound;
