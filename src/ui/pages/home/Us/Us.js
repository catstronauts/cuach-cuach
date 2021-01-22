import React from 'react';
import Img from 'gatsby-image';
import styles from './Us.module.scss';

const UsCard = ({ name, job, description, imgFluid }) => (
  <div className={styles.card}>
    <div className={styles.cardImgWrapper}>
      {imgFluid &&
        <Img className={styles.cardImg} alt={name} fluid={imgFluid} />
      }
    </div>
    <div className={styles.cardText}>
      <div className={styles.name}>
        <h4><strong>{name}</strong></h4>
      </div>
      <div className={styles.job}>
        <h4><strong>{job}</strong></h4>
      </div>
      <div className={styles.description}>
        <p>{description}</p>
      </div>
    </div>
  </div>
);

const Us = ({ title, subtitle, authors = [] }) => (
  <div className={styles.us}>
    <h2 className={styles.title}>{title}</h2>
    <p className={styles.subtitle}>{subtitle}</p>
    <div className={styles.cards}>
      {authors.map((author = {}) => (
        <UsCard
          key={author.id}
          name={author.name}
          job={author.title}
          description={author.shortBio}
          imgFluid={author.imgFluid}
        />
      ))}
    </div>
  </div>
);

export default Us;
