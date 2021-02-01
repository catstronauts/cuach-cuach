import React from 'react';

import { Helmet } from '@layouts/Helmet';
import { Footer } from '@layouts/Footer';
import { Navigation } from '@layouts/Navigation';
import { AppProvider } from './Context';
import "@fontsource/roboto"
import "@fontsource/lexend-giga"
import styles from './layout.module.scss';
import '@styles/index.scss';

const Template = ({ children, location }) => (
  <>
    <Helmet />
    <AppProvider>
      <div className={styles.page}>
        <Navigation location={location} />
        <div className={styles.body}>
          {children}
        </div>
        <Footer />
      </div>
    </AppProvider>
  </>
);

export default Template;
