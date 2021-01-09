export const LINKS = {
  // EXAMPLE: {
  //   to: 'url name -> this should match with file names at `src/pages/xxxx.js`',
  //   caption: 'Text to show on labels',
  // },
  HOME: {
    to: '/',
    caption: 'Inicio',
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
    text: 'Todo',
  },
  GALLERY_ARTE: {
    to: '/galeria/arte/',
    caption: 'Galería - arte',
    text: 'Arte'
  },
  GALLERY_TEXTIL: {
    to: '/galeria/manufactura/',
    caption: 'Galería - manufactura',
    text: 'Manufactura',
  },
  GALLERY_ARQUITECTURA: {
    to: '/galeria/arquitectura/',
    caption: 'Galería - arquitectura',
    text: 'Arquitetura'
  },
};

export const getProductUrlBySlug = (slug) =>
  `${LINKS.GALLERY.to}${slug}`;
