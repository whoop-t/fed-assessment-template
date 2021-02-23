import React, { useState } from 'react';
import styles from '../styles/ImageCarousel.module.scss';

const chunkedImages = (images = [], chunkSize) => {
  const chunkedArr = [];
  while (images.length) {
    chunkedArr.push([...images.splice(0, chunkSize)]);
  }
  return chunkedArr;
};

const ImageCarousel = ({ images, chunkSize }) => {
  const [current, setCurrent] = useState(0);
  const chunkedImgs = chunkedImages([...images], chunkSize);
  const length = chunkedImgs.length;

  /**
   * onNextClick
   * @desc Set current to next set of images in array, if it hits the end, start at the beginning
   */
  const onNextClick = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  /**
   * onPrevClick
   * @desc Set current to prev set of images in array, if it hits the start, loop back around
   */
  const onPrevClick = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  return (
    <div className={styles.carousel}>
      <img className={styles.carousel__left} src='/icons/left-arrow.svg' alt='' onClick={onPrevClick} />
      {chunkedImgs.map((c, i) => {
        if (i === current) {
          return (
            <div className={i === current ? styles.carousel__slideActive : styles.carousel__slide}>
              {c.map((outlet, i) => (
                <img className={styles.carousel__img} src={outlet.imgPath} alt='' />
              ))}
            </div>
          );
        }
      })}
      <img className={styles.carousel__right} src='/icons/right-arrow.svg' alt='' onClick={onNextClick} />
    </div>
  );
};

export default ImageCarousel;
