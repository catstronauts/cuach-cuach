import React from 'react';
import { LINKS } from '@src/constants';
import { HeroMobile } from './HeroMobile';
import { HeroDesktop } from './HeroDesktop';
import styles from './HeroSection.module.scss';

const content = {
  title: <>Arte <strong>Cuach Cuach</strong></>,
  subtitle: 'Nos inspiramos en la cultura e identidad de nuestra Región y en la riqueza de su entorno natural. Creamos cuadros que transmiten respeto hacia la naturaleza y su gente. Nuestros cuadros son pintados a mano con técnicas variadas como Acuarelas, Acrílicos, entre otros.',
  btnTxt: 'Leer más',
  btnTo: LINKS.GALLERY.to,
};

const HeroSection = () => (
  <>
    <HeroMobile data={content} className={styles.mob} />
    <HeroDesktop data={content} className={styles.desk} />
  </>
);

export default HeroSection;
