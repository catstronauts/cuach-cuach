export const LINKS = {
  HOME: {
    to: '/',
    caption: 'Inicio',
  },
  BLOG: {
    to: '/blog/',
    caption: 'Blog',
  },
  GALLERY: {
    to: '/galeria/',
    caption: 'Galería',
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

export const getProductUrlBySlug = (slug) =>
  `${LINKS.GALLERY.to}${slug}`;
