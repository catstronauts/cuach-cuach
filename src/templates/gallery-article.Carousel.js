import React, { useState } from 'react';
import BackgroundImage from 'gatsby-background-image';
import styles from './gallery-article.module.scss';

const ImgSelector = ({ images = [], onChange }) => images.length > 1 ? (
  <div className={styles.thumbnails}>
    {images.map((img, i) => (
      <BackgroundImage
        key={i}
        onClick={() => onChange(i)}
        className={styles.thumbnail}
        fluid={img.fluid}
      />
    ))}
    <div className={styles.thumbnail__filler} />
    <div className={styles.thumbnail__filler} />
    <div className={styles.thumbnail__filler} />
  </div>
) : null;

const Carousel = ({ images = [], title = '' }) => {
  const [img, setImg] = useState(images[0].fluid);

  const handleClick = (i) => {
    const selected = images[i];

    setImg(selected.fluid);
  };

  return (
    <div className={styles.images}>
      <BackgroundImage className={styles.mainImage} fluid={img} imgAlt={title}/>
      <ImgSelector images={images} onChange={handleClick} />
    </div>
  );
};

export default Carousel;
