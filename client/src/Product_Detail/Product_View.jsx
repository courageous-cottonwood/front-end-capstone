import React, { useState, useEffect } from 'react';
import css from './productdetail.module.css';
import StyleThumbnail from './Style_Thumbnail.jsx'

const ProductView = function (props) {
  const [leftArrowEnabled, setLeftArrowEnabled] = useState(false);
  const [rightArrowEnabled, setRightArrowEnabled] = useState(true);

  const handleLeftArrow = () => {
    props.setCurrentStyleIndex(props.currentStyleIndex - 1);
  }

  const handleRightArrow = () => {
    props.setCurrentStyleIndex(props.currentStyleIndex + 1);
  }

  useEffect(() => {
    if (props.currentStyleIndex === 0) {
      setLeftArrowEnabled(false);
    }

    if (props.currentStyleIndex > 0) {
      setLeftArrowEnabled(true);
    }

    if (props.currentStyleIndex === props.styles.length - 1) {
      setRightArrowEnabled(false);
    }

    if (props.currentStyleIndex < props.styles.length - 1) {
      setRightArrowEnabled(true);
    }
  }, [props.currentStyleIndex])

  return (
    <div className={css.leftPanel}>
      <div className={css.styleThumbnails}>
        {props.currentStyle.photos.map((photo, index) =>
          <StyleThumbnail
            setCurrentStyleIndex={props.setCurrentStyleIndex}
            photo={photo}
            key={index}
            styleIndex={index}
          />
        )}
      </div>
      {leftArrowEnabled ?
        <img onClick={handleLeftArrow} className={css.arrows} src="https://img.icons8.com/ios-filled/344/chevron-left.png"></img> :
        <img className={css.arrowsNonClick} src="https://img.icons8.com/ios/344/chevron-left.png"></img>
      }
      <img
        className={css.defaultViewImage}
        src={props.currentStyle.photos[props.currentStyleIndex].url}>
      </img>
      {rightArrowEnabled ?
        <img onClick={handleRightArrow} className={css.arrows} src="https://img.icons8.com/ios-filled/344/chevron-right.png"></img> :
        <img className={css.arrowsNonClick} src="https://img.icons8.com/ios/344/chevron-right.png"></img>
      }
    </div>
  );
};

export default ProductView;