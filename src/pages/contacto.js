import React from 'react';
import Layout from '@layouts';
import { Section } from '@layouts/Section';
import styles from './blog.module.scss';

const Content = ({ data = {}, ...rest }) => (
  <Layout pageTitle="Quienes somos">
    <div className={styles.hero}>Contacto</div>

    <Section title='Formulario de contacto'>

    </Section>
  </Layout>
);

export default Content;
