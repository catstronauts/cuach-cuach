import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import get from 'lodash/get';
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';
import { Container } from '@layouts/Container';
import { SocialLinks } from '@layouts/SocialLinks';
import { Link } from '@components/Link';
import { Button } from '@components/Button';
import styles from './HeroDesktop.module.scss';

const dataIcons = [
  { contentful_id: '4rsBP9P4ivZTUlV9eY3ZwV', bodyClassName: '' },
  { contentful_id: '2VVZOykmb49D1iVZRAAkmO', bodyClassName: 'pink' },
  { contentful_id: '4wrFdVLEjNh9KE2Q6o2k8y', bodyClassName: 'blue' },
];

const ThumbListImg = ({ thumbImg, onClick, active = false }) => (
  <li
    onClick = {onClick}
    className={classnames(
      styles.thumbList,
      active && styles.thumbList_active
    )}>
    <div className={styles.liThumb}>
      <Img
        role="presentation"
        className={styles.thumbImg}
        fluid={thumbImg}
      />
    </div>
    <div className={styles.liIconWrapper}>
      <div className={styles.liIcon} />
    </div>
  </li>
);

const HeroDesktop = ({ data, className }) => {
  const body = document.getElementsByTagName('BODY')[0];
  const [selection, setSeletion] = useState(0);
  const staticQuery = useStaticQuery(query);
  const imgs = get(staticQuery, 'allContentfulAsset.edges', []);
  const _data = dataIcons.map((di, i) => ({
    ...di,
    img: get(
      imgs.find(im => di.contentful_id === im.node.contentful_id),
      'node.fluid',
      null
    ),
  }));

  useEffect(() => {
    handleClick(_data.findIndex(d => d.bodyClassName === body.className));
  }, []);

  const handleClick = (i) => {
    if (i >= 0 && i < _data.length) {
      setSeletion(i);
      body.className = _data[i].bodyClassName;
    }
  };

  return (
    <div className={classnames(styles.hero, className)}>
      <div className={styles.shape_1} />
      <div className={styles.shape_2} />
      <Container className={styles.container}>
        <div className={styles.heroWrapper}>
          <div className={styles.heroSection}>
            <div className={styles.text}>
              <h2 className={styles.title}>{data.title}</h2>
              <p className={styles.paragraph}>{data.subtitle}</p>
              <Link to={data.btnTo}>
                <Button caption={data.btnTxt} className={styles.btn} />
              </Link>
            </div>
            <div className={styles.imgContainer}>
              <Img
                className={styles.img}
                fluid={_data[selection].img}
                role="presentation"
              />
            </div>
          </div>
          <div className={styles.thumbWrapper}>
            <ul className={styles.thumb}>
              {_data.map((d, i) => (
                <ThumbListImg
                  key={i}
                  thumbImg={d.img}
                  active={selection === i}
                  onClick={() => handleClick(i)}
                />
              ))}
            </ul>
          </div>
        </div>
        <SocialLinks
          className={styles.socialMedia}
          itemClassName={styles.socialMedia_item}
        />
      </Container>
    </div>
  );
};

const query = graphql`
  query {
    allContentfulAsset(filter: {
      contentful_id: {in: [
        "4rsBP9P4ivZTUlV9eY3ZwV",
        "2VVZOykmb49D1iVZRAAkmO",
        "4wrFdVLEjNh9KE2Q6o2k8y",
      ]}
    }) {
      edges {
        node {
          contentful_id
          fluid(maxWidth: 500, resizingBehavior: SCALE) {
            ...GatsbyContentfulFluid_tracedSVG
          }
        }
      }
    }
  }
`;

export default HeroDesktop;
