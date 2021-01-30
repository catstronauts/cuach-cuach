import React from 'react';
import get from 'lodash/get';
import { graphql, useStaticQuery } from 'gatsby';
import { LINKS } from '@src/constants';
import { Section } from '@layouts/Section';
import { Link } from '@components/Link';
import { Button } from '@components/Button';
import CategoryTile from '@components/CategoryTile';
import { data as dataValues } from './data';
import styles from './Categories.module.scss';

const ValuesSection = () => {
  const staticQuery = useStaticQuery(query);
  const imgs = get(staticQuery, 'allContentfulAsset.edges', []);

  return (
    <Section title='Nuestras líneas de trabajo'>
      <div className={styles.categorySection}>
        {dataValues.map(d => (
          <CategoryTile
            key={d.id}
            tag={d.title}
            img={get(
              imgs.find(im => d.contentful_id === im.node.contentful_id),
              'node.fluid',
              null
            )}
            linkTo={d.linkTo}
          />
        ))}
      </div>
      <Link to={LINKS.GALLERY.to} className={styles.btnWrapper}>
        <Button caption='Ver Todo' />
      </Link>
    </Section>
  );
};

export default ValuesSection;

const query = graphql`
  query {
    allContentfulAsset(filter: {
      contentful_id: {in: [
        "2spPYJjeEbB1UOqs3sWdjk",
        "2ZsuRBfRSrKWyq0EgYFAAV",
        "716fUmL7CeuiGV025Yxrgx",
      ]}
    }) {
      edges {
        node {
          contentful_id
          fluid(maxWidth: 450, resizingBehavior: SCALE) {
            ...GatsbyContentfulFluid_tracedSVG
          }
        }
      }
    }
  }
`;
