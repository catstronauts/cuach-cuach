import React from 'react';
import Img from 'gatsby-image';
import { HeroSection } from '@components/HeroSection'

import styles from './Home.module.scss';

const Home = ({ children }) => (
  <div className={styles.home}>
    <HeroSection />
  </div>
);

export default Home;
