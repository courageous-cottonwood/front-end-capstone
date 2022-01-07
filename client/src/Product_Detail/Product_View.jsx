import React, { useState, useEffect } from 'react';
import css from './productdetail.module.css';
import StyleThumbnail from './Style_Thumbnail.jsx'
import arrowLeftWhite from '../related-items/cssModules/arrows/left.png';
import arrowRightWhite from '../related-items/cssModules/arrows/right.png';
import arrowLeftGray from '../related-items/cssModules/arrows/arrow_left.png';
import arrowRightGray from '../related-items/cssModules/arrows/arrow_right.png';
//client/src/related-items/cssModules/arrows

const ProductView = function (props) {
  const [leftArrowEnabled, setLeftArrowEnabled] = useState(false);
  const [rightArrowEnabled, setRightArrowEnabled] = useState(true);

  const handleLeftArrow = () => {
    props.setCurrentStyleIndex(props.currentStyleIndex - 1);
  }

  const handleRightArrow = () => {
    props.setCurrentStyleIndex(props.currentStyleIndex + 1);
  }

  const renderDefaultView = () => {
    if (props.currentStyle.photos[props.currentStyleIndex].url === null || !props.currentStyle.photos[props.currentStyleIndex]) {
      return (
        <img
          className={css.defaultViewImage}
          src="https://www.budget101.com/images/image-not-available.png?14867"
        ></img>
      )
    } else {
      return (
        <img
          className={css.defaultViewImage}
          src={props.currentStyle.photos[props.currentStyleIndex].url}
        ></img>
      )
    }
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
        <img onClick={handleLeftArrow} className={css.arrows} src={arrowLeftWhite}></img> :
        <img className={css.arrowsNonClick} src={arrowLeftWhite}></img>
      }
      {renderDefaultView()}
      {rightArrowEnabled ?
        <img onClick={handleRightArrow} className={css.arrows} src={arrowRightWhite}></img> :
        <img className={css.arrowsNonClick} src={arrowRightWhite}></img>
      }
    </div>
  );
};

export default ProductView;