import React from 'react';
import get from 'lodash/get';
import { graphql, useStaticQuery } from 'gatsby';
import useWindowSize from '@hooks/useWindowSize';
import { Section } from '@layouts/Section';
import { data as dataValues } from './data';
import { Slides } from './ValuesSlides';
import { Carousel } from './ValuesCarousel';

const ValuesSection = (props) => {
  const { isDesktop } = useWindowSize();
  const data = useStaticQuery(query);
  const allImages = get(data, 'allFile.edges', []);

  const allData = dataValues.map(d => {
    const img = allImages.find(i => i.node.base === d.imgName);

    return {
      ...d,
      id: img.node.id,
      imgFluid: img.node.childImageSharp.fluid,
    };
  });

  return (
    <Section title="Values">
      {isDesktop
        ? <Carousel data={allData} />
        : <Slides data={allData} />
      }
    </Section>
  );
};

export default ValuesSection;

const query = graphql`
  query {
    allFile(filter: {sourceInstanceName: {eq: "images"}, relativeDirectory: {eq: "values"}}){
      edges {
        node {
          id
          base
          childImageSharp {
            fluid {
              base64
              aspectRatio
              sizes
              src
              srcSet
            }
          }
        }
      }
    }
  }
`;
