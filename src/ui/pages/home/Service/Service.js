import React from 'react';
import { Icon } from '@components/Icon';
import { ScrollAnimation, animationStyles } from '@components/ScrollAnimation';
import styles from './Service.module.scss';

const ServiceCard = ({ iconName, title, paragraph }) => (
  <div className={styles.card}>
    <div className={styles.text}>
      <Icon className={styles.icon} name={iconName} />
      <h5 className={styles.title}><strong>{title}</strong></h5>
      <p className={styles.paragraph}>{paragraph}</p>
    </div>
  </div>
);

const Service = () => (
  <div className={styles.service}>
    <div className={styles.serviceContent}>
      <ScrollAnimation animation={animationStyles.fadeIn} className={animationStyles.delay_0}>
        <ServiceCard
          iconName='shopping-basket'
          title='Compras a traves de nuestro correo.'
          paragraph='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
        />
      </ScrollAnimation>
      <ScrollAnimation animation={animationStyles.fadeIn} className={animationStyles.delay_1}>
        <ServiceCard
          iconName='shipping-fast'
          title='Hacemos envíos a todo Chile'
          paragraph='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
        />
      </ScrollAnimation>
      <ScrollAnimation animation={animationStyles.fadeIn} className={animationStyles.delay_2}>
        <ServiceCard
          iconName='hand-holding-heart'
          title='100% hecho a mano'
          paragraph='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
        />
      </ScrollAnimation>
    </div>
  </div>
);

export default Service;
