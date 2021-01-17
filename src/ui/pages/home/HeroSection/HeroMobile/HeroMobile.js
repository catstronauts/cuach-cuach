import React from 'react';
import classnames from 'classnames';
import img from '@assets/images/mobile-hero.png';
import { Link } from '@components/Link';
import { Button } from '@components/Button';
import styles from './HeroMobile.module.scss';

const HeroMobile = ({ data, className }) => (
  <div className={classnames(styles.mobile, className)}>
    <div className={styles.img}>
      <div className={styles.shape_1} />
      <div className={styles.shape_2} />
      <img className={styles.image} src={img} alt="Taller cuach cuach" />
    </div>
    <div className={styles.text}>
      <h2 className={styles.title}>{data.title}</h2>
      <p className={styles.paragraph}>{data.subtitle}</p>
      <Link to={data.btnTo}>
        <Button caption={data.btnTxt} block className={styles.btn} />
      </Link>
    </div>
  </div>
);

export default HeroMobile;
