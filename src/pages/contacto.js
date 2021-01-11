import React from 'react';
import { LINKS } from '@src/constants';
import { Helmet } from '@layouts/Helmet';
import { Section } from '@layouts/Section';
import Contact from '@ui/pages/contact/ContactForm';
import styles from './contacto.module.scss';

const Content = () => (
  <>
    <Helmet pageTitle={LINKS.CONTACT_US.caption} />
    <div className={styles.hero}>Contacto</div>

    <Section title='Formulario de contacto'>
      <Contact />
    </Section>
  </>
);

export default Content;
