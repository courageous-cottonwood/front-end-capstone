import React, { useState, useEffect } from 'react';
import css from './productdetail.module.css';

const ProductView = function (props) {
  return (
    <div className={css.leftPanel}>
      <div className={css.styleThumbnails}>
        style thumbnails
      </div>
      <img
        className={css.defaultViewImage}
        src={props.currentStyle.photos[0].url}>
      </img>
    </div>
  );
};

export default ProductView;