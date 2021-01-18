import React from 'react';
import Img from 'gatsby-image';
import styles from './Service.module.scss';


const ServiceCard = () => (
  <div class="card">
    <div class="icon"><i class="fas fa-truck"></i></div>
    <div class="text">
      <h5><strong>FREE SHIPPING ON ORDERS OVER €75</strong></h5>
      <p>Deliver only in the Republic of Ireland</p>
    </div>
  </div>
);


const Service = () => (
  <div className={styles.service}>

  </div>
);



export default Service;
