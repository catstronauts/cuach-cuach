import React from 'react';
import useWindowSize from '@hooks/useWindowSize';
import { Section } from '@layouts/Section';
import { data } from './data';
import { Slides } from './ValuesSlides';
import { Carousel } from './ValuesCarousel';

const ValuesSection = (props) => {
  const { isDesktop } = useWindowSize();

  return (
    <Section title="Values">
      {isDesktop
        ? <Carousel data={data} />
        : <Slides data={data} />
      }
    </Section>
  );
};

export default ValuesSection;
