import React from 'react';
import { LINKS } from '@src/constants';
import { Helmet } from '@layouts/Helmet';
import { Section } from '@layouts/Section';
import { HeroTitle } from '@components/HeroTitle';
import Contact from '@ui/pages/contact/ContactForm';
import heroImg from '@assets/images/hero2.jpg';
import styles from './contacto.module.scss';

const Content = () => (
  <>
    <Helmet pageTitle={LINKS.CONTACT_US.caption} />
    <HeroTitle image={heroImg}>Contacto</HeroTitle>

    <Section title='Formulario de contacto'>
      <div className={styles.contactPage}>
        <div className={styles.info}>
          <div className={styles.title}> ¿Tienes alguna duda? </div>
          <div className={styles.content}>
            <p>Si quieres comprar o hacer un encargo especial llámanos o envíanos un email.<br />
            +56 994 403 823<br />
            contacto@cuachcuach.cl<br />
            Chiguayante, Chile<br />
            </p>
          </div>
        </div>
        <div className={styles.form}>
          <Contact />
        </div>
      </div>
    </Section>
  </>
);

export default Content;
