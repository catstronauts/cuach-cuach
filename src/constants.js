export const LINKS = {
  // EXAMPLE: {
  //   to: 'url name -> this should match with file names at `src/pages/xxxx.js`',
  //   caption: 'Text to show on labels',
  // },
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
  GALLERY: {
    to: '/galeria/',
    caption: 'Galería',
  },
  GALLERY_ARTE: {
    to: '/galeria/arte/',
    caption: 'Galería - arte',
  },
  GALLERY_TEXTIL: {
    to: '/galeria/manufactura/',
    caption: 'Galería - textil',
  },
  GALLERY_ARQUITECTURA: {
    to: '/galeria/arquitectura/',
    caption: 'Galería - arquitectura',
  },
};

export const getArticleUrlBySlug = (slug) =>
  `${LINKS.BLOG.to}${slug}`;

export const getProductUrlBySlug = (slug) =>
  `${LINKS.GALLERY.to}${slug}`;
