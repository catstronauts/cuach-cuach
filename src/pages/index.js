import React from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import { LINKS } from '@src/constants';
// import Values from '@ui/pages/home/Values';
import Categories from '@ui/pages/home/Categories';
import HeroSection from '@ui/pages/home/HeroSection';
import { Helmet } from '@layouts/Helmet';
import { Section } from '@layouts/Section';
import CardProduct from '@components/CardProduct';
import InstagramFeeds from '@components/InstagramFeeds';
import { About } from '@ui/pages/home/About';
import { Service } from '@ui/pages/home/Service';
// import Img from '@assets/images/home-img.jpg'
// import styles from './Home.module.scss';

const Home = (props) => {
  const products = get(props, 'data.allContentfulProduct.edges');

  return (
    <>
      <Helmet pageTitle={LINKS.HOME.caption} />

      <HeroSection />
      <Categories />
      <Service />
      <About />
      {/* <Values /> */}
      {/* <div>
        <img className={styles.bgImg} src={Img} />
      </div> */}
      <Section title="Nuevos Productos">
        <CardProduct.List>
          {products.map(({ node }) => (
            <CardProduct key={node.slug} article={node} />
          ))}
        </CardProduct.List>
      </Section>
      <InstagramFeeds />
    </>
  );
};

export default Home;

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulProduct(limit: 3, sort: { fields: [createdAt], order: DESC }) {
      edges {
        node {
          title
          slug
          price
          images {
            fluid(maxWidth: 450, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`;
