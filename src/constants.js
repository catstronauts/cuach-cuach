export const LINKS = {
  HOME: {
    to: '/',
    caption: 'Inicio',
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
    to: '/contacto',
    caption: 'Contacto',
  },
};

export const getArticleUrlBySlug = (slug) =>
  `${LINKS.BLOG.to}${slug}`;
