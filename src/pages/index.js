import React from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import { LINKS } from '@src/constants';
import Values from '@ui/pages/home/Values';
import Categories from '@ui/pages/home/Categories';
import HeroSection from '@ui/pages/home/HeroSection';
import Layout from '@layouts';
import Section from '@layouts/Section';
import CardProduct from '@components/CardProduct';
import { About } from '@ui/pages/home/About';

const Home = (props) => {
  const products = get(props, 'data.allContentfulProduct.edges');

  return (
    <Layout pageTitle={LINKS.HOME.caption}>

      <HeroSection />
      <Categories />
      <About />
      <Values />

      <Section title="Nuevos Productos">
        <CardProduct.List>
          {products.map(({ node }) => (
            <CardProduct key={node.slug} article={node} />
          ))}
        </CardProduct.List>
      </Section>

    </Layout>
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
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid
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
