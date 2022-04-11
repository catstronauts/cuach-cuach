import React from 'react';
import { LINKS } from '@src/constants';
import { Helmet } from '@layouts/Helmet';
import { Section } from '@layouts/Section';
import { HeroTitle } from '@components/HeroTitle';
import { Icon } from '@components/Icon';
import { Link } from '@components/Link';
import Contact from '@ui/pages/contact/ContactForm';
import styles from './contacto.module.scss';
import contactImg from '@assets/images/contact-photo.jpg';

const Content = () => (
  <>
    <Helmet pageTitle={LINKS.CONTACT_US.caption} />
    <HeroTitle>Contacto</HeroTitle>

    <Section title='Formulario de contacto'>
      <div className={styles.contactPage}>
        <div className={styles.info}>
          <div className={styles.outerImgWrapper}>
            <div className={styles.imgWrapper}>
              <img className={styles.img} src={contactImg} />
            </div>
          </div>
          <div className={styles.textWrapper}>
            <div className={styles.text}>
              <div className={styles.title}> ¡Contáctanos! </div>
              <div className={styles.content}>
                <p>Si quieres comprar o hacer un encargo especial llámanos o mándanos un email.<br />
                <div className={styles.contactInfo}>
                  <Icon className={styles.icon} name="phone" /> +56 994 403 823<br />
                  <Icon className={styles.icon} name="envelope" /> <Link highlight>contacto@cuachcuach.cl</Link><br />
                  <Icon className={styles.icon} name="map-marker-alt" /> Chiguayante, Chile<br />
                </div>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.formWrapper}>
          <div className={styles.form}>
            <Contact />
          </div>
        </div>
      </div>
    </Section>
  </>
);

export default Content;
