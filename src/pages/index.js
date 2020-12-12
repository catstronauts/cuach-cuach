import React from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import { Helmet } from 'react-helmet';
// import Hero from '@components/Hero';
import Values from '@ui/pages/home/Values';
import Categories from '@ui/pages/home/Categories';
import HeroSection from '@ui/pages/home/HeroSection';
import Layout from '@layouts';
import Section from '@layouts/Section';
import img from '@assets/images/hero1.png';
import ArticlePreview from '@components/CardArticle';
import aboutImg from '@assets/images/cuachcuach.jpg';
import { About } from '@ui/pages/home/About';

const Home = (props) => {
  const siteTitle = get(props, 'data.site.siteMetadata.title');
  const posts = get(props, 'data.allContentfulBlogPost.edges');
  // const [author = {}] = get(props, 'data.allContentfulPerson.edges');
  // const { name, title, shortBio, heroImage } = author.node;

  return (
    <Layout location={props.location}>
      <HeroSection
        img={img}
        img1={img}
      />
      <div>
        <Helmet title={siteTitle} />

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

      </div>
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
    allContentfulPerson(
      filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }
    ) {
      edges {
        node {
          name
          shortBio {
            shortBio
          }
          title
          heroImage: image {
            fluid(
              maxWidth: 1180
              maxHeight: 480
              resizingBehavior: PAD
              background: "rgb:000000"
            ) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`;
