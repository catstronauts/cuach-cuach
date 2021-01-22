import React from 'react';
import { LINKS } from '@src/constants';
import { HeroMobile } from './HeroMobile';
import { HeroDesktop } from './HeroDesktop';
import styles from './HeroSection.module.scss';

const content = {
  title: <>Lorem ipsum dolor <strong>Cuach Cuach</strong></>,
  subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nisl dui, aliquet sit amet semper id, rhoncus gravida arcu. Nam eu eros mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
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
