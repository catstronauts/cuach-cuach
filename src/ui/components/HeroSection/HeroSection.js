import React from 'react';
import { HeroMobile } from './HeroMobile';
import { HeroDesktop } from './HeroDesktop';
import styles from './HeroSection.module.scss';

const content = [
  {
    title: "Lorem ipsum dolor <br/> <span className={styles.cuach}>Cuach Cuach",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nisl dui, aliquet sit amet semper id, rhoncus gravida arcu. Nam eu eros mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    buttonTxt: "Leer más",
    buttonTo: "/",
  },
];

const HeroSection = () => (
  <>
    <HeroMobile
      options={content}
      className={styles.heroMobile}
    />
    <HeroDesktop
      options={content}
      className={styles.heroDesktop}
    />
  </>
);

export default HeroSection;
