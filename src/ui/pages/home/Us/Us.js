import React from 'react';
// import Img from 'gatsby-image';
import styles from './Us.module.scss';
// import { data as dataValues } from './data';
import pame from '@assets/images/pame.jpg';
import lea from '@assets/images/lea.jpg';
import chelenko from '@assets/images/chelenko.jpg';

const UsCard = ({ img, name, job, description}) => (
  <div className={styles.card}>
    <div className={styles.cardImgWrapper}>
      <img className={styles.cardImg} src={img} />
    </div>
    <div className={styles.cardText}>
      <div className={styles.name}>
        <h4>{name}</h4>
      </div>
      <div className={styles.job}>
        <h4>{job}</h4>
      </div>
      <div className={styles.description}>
        <p>{description}</p>
      </div>
    </div>
  </div>
);

const Us = ({ title, subtitle }) => (
  <div className={styles.us}>
    <h2 className={styles.title}>{title}</h2>
    <p className={styles.subtitle}>{subtitle}</p>
    <div className={styles.cards}>
      <UsCard
        name= 'Pame'
        job='Yo soy Cuach Cuach'
        description= 'We’re united with our community to create a world where anyone can belong anywhere.'
        img= {pame}
      />
      <UsCard
        name= 'Lea'
        job='Yo soy Cuach Cuach'
        description= 'We’re united with our community to create a world where anyone can belong anywhere.'
        img= {lea}
      />
      <UsCard
        name= 'Chelenko'
        job='Modelo y bebé'
        description= 'We’re united with our community to create a world where anyone can belong anywhere.'
        img= {chelenko}
      />
    </div>
  </div>
);
 
export default Us;
