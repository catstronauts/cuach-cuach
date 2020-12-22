import React from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import Values from '@ui/pages/home/Values';
import Categories from '@ui/pages/home/Categories';
import HeroSection from '@ui/pages/home/HeroSection';
import Layout from '@layouts';
import Section from '@layouts/Section';
import ArticlePreview from '@components/CardArticle';
import { About } from '@ui/pages/home/About';

const Home = (props) => {
  const posts = get(props, 'data.allContentfulBlogPost.edges');

  return (
    <Layout pageTitle="Home">

      <HeroSection />
      <Categories />
      <About />
      <Values />

      <Section title="Recent articles">
        <ArticlePreview.List>
          {posts.map(({ node }) => (
            <ArticlePreview key={node.slug} article={node} />
          ))}
        </ArticlePreview.List>
      </Section>

    </Layout>
  );
};

export default Home;

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
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
