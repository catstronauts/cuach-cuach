import React from 'react';

import { Helmet } from '@layouts/Helmet';
import { Footer } from '@layouts/Footer';
import { Navigation } from '@layouts/Navigation';
import { AppProvider } from './Context';
import styles from './layout.module.scss';
import '@styles/index.scss';

const Template = ({ children }) => (
  <>
    <Helmet />
    <AppProvider>
      <div className={styles.page}>
        <Navigation />
        <div className={styles.body}>
          {children}
        </div>
        <Footer />
      </div>
    </AppProvider>
  </>
);

export default Template;
