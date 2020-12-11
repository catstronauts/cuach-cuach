import React from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import { Helmet } from 'react-helmet';
// import Hero from '@components/Hero';
import Values from '@ui/pages/home/Values';
import ProductTile from '@components/ProductTile';
import Layout from '@layouts';
import Container from '@layouts/Container';
import img from '@assets/images/hero1.png';
import ArticlePreview from '@components/CardArticle';
import styles from './index.module.scss';
import cat1 from '@assets/images/category.jpg';
import cat2 from '@assets/images/category2.jpg';
import HeroSection from '@components/HeroSection';
// import styles from './index.module.scss';

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
      <div style={{ background: '#fff' }}>
        <Helmet title={siteTitle} />

        <div className={styles.categorySection}>
          <ProductTile
            tag='textil'
            img={cat1}
          />
          <ProductTile
            tag='pintura'
            img={cat2}
          />

          <ProductTile
            tag='muebles'
            img={cat1}
          />
        </div>

        <Values />
        <div className="wrapper">
          <Container>
            <h2 className="section-headline">Recent articles</h2>
            <ul className="article-list">
              {posts.map(({ node }) => (
                <li key={node.slug}>
                  <ArticlePreview article={node} />
                </li>
              ))}
            </ul>
          </Container>
        </div>
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
