import React from 'react';
import { LINKS } from '@src/constants';
import Layout from '@layouts';
import { Section } from '@layouts/Section';
import styles from './contacto.module.scss';

const Content = ({ data = {}, ...rest }) => (
  <Layout pageTitle={LINKS.CONTACT_US.caption}>
    <div className={styles.hero}>Contacto</div>

    <Section title='Formulario de contacto'>

    </Section>
  </Layout>
);

export default Content;
