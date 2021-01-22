const Promise = require('bluebird');
const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const galleryArticle = path.resolve('./src/templates/gallery-article.js');

    resolve(
      graphql(
        `
          {
            productsAll: allContentfulProduct(
              limit: 1000
            ) {
              edges {
                node {
                  slug
                }
              }
            }
            productsArt: allContentfulProduct(
              limit: 1000
              filter: {
                type: {eq: "arte"}
              }
            ) {
              edges {
                node {
                  id
                }
              }
            }
            productsArq: allContentfulProduct(
              limit: 1000
              filter: {
                type: {eq: "arquitectura"}
              }
            ) {
              edges {
                node {
                  id
                }
              }
            }
            productsFab: allContentfulProduct(
              limit: 1000
              filter: {
                type: {eq: "manufactura"}
              }
            ) {
              edges {
                node {
                  id
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

        const productsAll = result.data.productsAll.edges;
        const productsArt = result.data.productsArt.edges;
        const productsFab = result.data.productsFab.edges;
        const productsArq = result.data.productsArq.edges;

        productsAll.forEach(post => {
          createPage({
            path: `/galeria/${post.node.slug}/`,
            component: galleryArticle,
            context: {
              slug: post.node.slug,
            },
          });
        });
        const createProductListPages = (products = [], template, url) => {
          const productsPerPage = 3
          const numPages = Math.ceil(products.length / productsPerPage)
          Array.from({ length: numPages }).forEach((_, i) => {
            createPage({
              path: i === 0 ? `/${url}` : `/${url}/${i + 1}`,
              component: template,
              context: {
                limit: productsPerPage,
                skip: i * productsPerPage,
                numPages,
                currentPage: i + 1,
              },
            });
          });
        };

        createProductListPages(
          productsAll,
          path.resolve('./src/templates/galeria/all.js'),
          'galeria'
        );
        createProductListPages(
          productsArt,
          path.resolve('./src/templates/galeria/arte.js'),
          'galeria/arte'
        );
        createProductListPages(
          productsFab,
          path.resolve('./src/templates/galeria/manufactura.js'),
          'galeria/manufactura'
        );
        createProductListPages(
          productsArq,
          path.resolve('./src/templates/galeria/arquitectura.js'),
          'galeria/arquitectura'
        );

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
