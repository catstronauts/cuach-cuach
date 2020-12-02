import React from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import { Helmet } from 'react-helmet';
import Hero from '@components/Hero';
import Layout from '@layouts';
import ArticlePreview from '@components/CardArticle';
import styles from './index.module.scss';

const RootIndex = (props) => {
  const siteTitle = get(props, 'data.site.siteMetadata.title');
  const posts = get(props, 'data.allContentfulBlogPost.edges');
  const [author = {}] = get(props, 'data.allContentfulPerson.edges');
  const { name, title, shortBio, heroImage } = author.node;

  return (
    <Layout location={props.location}>
      <div style={{ background: '#fff' }}>
        <Helmet title={siteTitle} />
        <Hero img={heroImage.fluid} imgAlt={name}>
          <div className={styles.heroDetails}>
            <h3 className={styles.heroHeadline}>{name}</h3>
            <p className={styles.heroTitle}>{title}</p>
            <p>{shortBio.shortBio}</p>
          </div>
        </Hero>
        <div className="wrapper">
          <h2 className="section-headline">Recent articles</h2>
          <ul className="article-list">
            {posts.map(({ node }) => (
              <li key={node.slug}>
                <ArticlePreview article={node} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default RootIndex;

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
