import React from 'react';
import useWindowSize from '@hooks/useWindowSize';
import { HeroMobile } from './HeroMobile';
import { HeroDesktop } from './HeroDesktop';

const content = {
  title: <>Lorem ipsum dolor <strong>Cuach Cuach</strong></>,
  subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nisl dui, aliquet sit amet semper id, rhoncus gravida arcu. Nam eu eros mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
  btnTxt: 'Leer más',
  btnTo: '/',
};

const HeroSection = () => {
  const { isTabletAndUp } = useWindowSize();

  return !isTabletAndUp
    ? <HeroMobile data={content} />
    : <HeroDesktop data={content} />;
};

export default HeroSection;
