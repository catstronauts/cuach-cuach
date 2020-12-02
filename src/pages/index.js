import React from 'react';
import { graphql } from 'gatsby';
// import get from 'lodash/get';
// import { Helmet } from 'react-helmet';
import HeroSection from '@components/HeroSection';
import Layout from '@layouts';
import img from '@assets/images/hero1.png';
// import img1 from '@assets/images/hero1.png';
// import ArticlePreview from '@components/CardArticle';
import styles from './index.module.scss';

const Home = (props) => {

  return (
    <Layout location={props.location}>
      {/* <div className={styles.outerHero}>
        <div className={styles.circle}> */}
          <HeroSection 
            img={img}
            img1={img}
          />
        {/* </div>
      </div> */}
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
