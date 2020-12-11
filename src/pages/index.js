import React from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import { Helmet } from 'react-helmet';
// import Hero from '@components/Hero';
import Values from '@ui/pages/home/Values';
import CategoryTile from '@components/CategoryTile';
import HeroSection from '@ui/pages/home/HeroSection';
import Layout from '@layouts';
import Section from '@layouts/Section';
import img from '@assets/images/hero1.png';
import ArticlePreview from '@components/CardArticle';
import styles from './index.module.scss';
import cat1 from '@assets/images/category.jpg';
import cat2 from '@assets/images/category2.jpg';
import cat3 from '@assets/images/category.jpg';

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
        <Section title='Nuestras líneas de trabajo'>
          <div className={styles.categorySection}>
            <CategoryTile
              tag='textil'
              img={cat1}
            />
            <CategoryTile
              tag='pintura'
              img={cat2}
            />
            <CategoryTile
              tag='muebles'
              img={cat3}
            />
          </div>
        </Section>

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
