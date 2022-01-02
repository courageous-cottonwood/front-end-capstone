import React, { useState, useEffect } from 'react';
import css from './productdetail.module.css';
import StyleThumbnail from './Style_Thumbnail.jsx'

const ProductView = function (props) {
  return (
    <div className={css.leftPanel}>
      <div className={css.styleThumbnails}>
        {props.currentStyle.photos.map((photo, index) =>
          <StyleThumbnail
            selectStyleIndex={props.selectStyleIndex}
            photo={photo}
            key={index}
            styleIndex={index}
          />
        )}
      </div>
      <img
        className={css.defaultViewImage}
        src={props.currentStyle.photos[props.currentStyleIndex].url}>
      </img>
    </div>
  );
};

export default ProductView;