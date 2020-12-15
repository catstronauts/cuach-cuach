import React from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';
// import Hero from '@components/Hero';
import Values from '@ui/pages/home/Values';
import Categories from '@ui/pages/home/Categories';
import HeroSection from '@ui/pages/home/HeroSection';
import Layout from '@layouts';
import Section from '@layouts/Section';
import ArticlePreview from '@components/CardArticle';
import aboutImg from '@assets/images/cuachcuach.jpg';
import { About } from '@ui/pages/home/About';

const Home = (props) => {
  const posts = get(props, 'data.allContentfulBlogPost.edges');

  return (
    <Layout pageTitle="Home">

      <HeroSection />
      {/* Category section */}
      <Categories />

      {/* About Section */}
      <About
        img={aboutImg}
        title='Taller Cuach Cuach'
        text='Somos una pareja de emprendedores de Chiguayante, ciudad ubicada entre BíoBío y el Cerro Manquimávida. La naturaleza que rodea nuestro taller y nuestro hogar, nos inspira y nos permite transmitirla a través del arte, el diseño y la manufactura.'
        href='www.facebook.com'
      />

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
