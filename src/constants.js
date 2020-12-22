export const LINKS = {
  HOME: {
    to: '/',
    caption: 'Home',
  },
  BLOG: {
    to: '/blog/',
    caption: 'Blog',
  },
  ABOUT: {
    to: '/about',
    caption: 'About',
  },
  CONTACT_US: {
    to: '/',
    caption: 'Contáctanos',
  },
};

export const getArticleUrlBySlug = (slug) =>
  `${LINKS.BLOG.to}${slug}`;
