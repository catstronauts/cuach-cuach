import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import useGetImg from '@hooks/useGetImg';
import { Section } from '@layouts/Section';
import CategoryTile from '@components/CategoryTile';
import { data as dataValues } from './data';
import styles from './Categories.module.scss';

const ValuesSection = (props) => {
  const staticQuery = useStaticQuery(query);
  const { getImgFluidByFileName } = useGetImg(staticQuery);

  const allData = dataValues.map(d => ({
    ...d,
    ...getImgFluidByFileName(d.imgName),
  }));

  return (
    <Section title='Nuestras líneas de trabajo'>
      <div className={styles.categorySection}>
        {allData.map(d => (
          <CategoryTile
            key={d.id}
            tag={d.title}
            img={d.imgFluid}
          />
        ))}
      </div>
    </Section>
  );
};

export default ValuesSection;

const query = graphql`
  query {
    allFile(filter: {sourceInstanceName: {eq: "images"}, relativeDirectory: {eq: "categories"}}){
      edges {
        node {
          id
          base
          childImageSharp {
            fluid(quality: 60, maxWidth: 350) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;
