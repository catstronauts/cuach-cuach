const Promise = require('bluebird');
const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve('./src/templates/blog-post.js');
    const galleryArticle = path.resolve('./src/templates/gallery-article.js');

    resolve(
      graphql(
        `
          {
            allContentfulBlogPost {
              edges {
                node {
                  slug
                }
              }
            }
            allContentfulProduct {
              edges {
                node {
                  slug
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }

        const posts = result.data.allContentfulBlogPost.edges;
        const products = result.data.allContentfulProduct.edges;

        posts.forEach(post => {
          createPage({
            path: `/blog/${post.node.slug}/`,
            component: blogPost,
            context: {
              slug: post.node.slug,
            },
          });
        });
        products.forEach(post => {
          createPage({
            path: `/galeria/${post.node.slug}/`,
            component: galleryArticle,
            context: {
              slug: post.node.slug,
            },
          });
        });
      })
    );
  });
};

// Hidde MiniCssExtractPlugin warning message
exports.onCreateWebpackConfig = ({ stage, actions, getConfig }) => {
  if (stage === 'build-javascript') {
    const config = getConfig();
    const miniCssExtractPlugin = config.plugins.find(
      plugin => plugin.constructor.name === 'MiniCssExtractPlugin'
    );
    if (miniCssExtractPlugin) {
      miniCssExtractPlugin.options.ignoreOrder = true;
    }
    actions.replaceWebpackConfig(config);
  }
};
