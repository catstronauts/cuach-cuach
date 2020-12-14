import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import useWindowSize from '@hooks/useWindowSize';
import useGetImg from '@hooks/useGetImg';
import { Section } from '@layouts/Section';
import { data as dataValues } from './data';
import { Slides } from './ValuesSlides';
import { Carousel } from './ValuesCarousel';

const ValuesSection = (props) => {
  const { isDesktop } = useWindowSize();
  const staticQuery = useStaticQuery(query);
  const { getImgFluidByFileName } = useGetImg(staticQuery);

  const allData = dataValues.map(d => ({
    ...d,
    ...getImgFluidByFileName(d.imgName),
  }));

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
              tracedSVG
              src
              srcSet
              srcWebp
              srcSetWebp
            }
          }
        }
      }
    }
  }
`;
