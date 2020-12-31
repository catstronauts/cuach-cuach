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
  GALLERY: {
    to: '/galeria/',
    caption: 'Galería',
  },
  GALLERY_ARTE: {
    to: '/galeria-arte/',
    // caption: 'Galería',
  },
  GALLERY_TEXTIL: {
    to: '/galeria-manufactura/',
    // caption: 'Galería',
  },
  GALLERY_ARQUITECTURA: {
    to: '/galeria-arquitectura/',
    // caption: 'Galería',
  },
};

export const getArticleUrlBySlug = (slug) =>
  `${LINKS.BLOG.to}${slug}`;

export const getProductUrlBySlug = (slug) =>
  `${LINKS.GALLERY.to}${slug}`;
