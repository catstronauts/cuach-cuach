import React from 'react';
import { Helmet as ReactHelmet } from 'react-helmet';
import favicon from '@assets/images/favicon.png';
import '@styles/index.scss';

export const Helmet = ({ pageTitle }) => (
  <ReactHelmet
    title={pageTitle
      ? `${pageTitle} | Cuach-Cuach`
      : 'Cuach-Cuach'}
    meta={[
      { name: 'description', content: 'Taller de artesanias cuach-cuach' },
      { name: 'keywords', content: 'taller, cuachcuach, cuach, textil, manualidades, cuadros' },
    ]}
  >
    <html lang="es" />
    <link rel="icon" type="image/png" href={favicon} />
  </ReactHelmet>
);

export default Helmet;
