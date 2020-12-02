import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Icon.module.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';

library.add(faCheckSquare, faCoffee, fab);

const Hero = ({ className }) => (
  <div className={styles.hero}>
    aaabb
    <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
    <FontAwesomeIcon icon="amazon" />
    <FontAwesomeIcon icon="check-square" />
    Your <FontAwesomeIcon icon="coffee" /> is hot and ready!
    bbb
  </div>
);

export default Hero;
