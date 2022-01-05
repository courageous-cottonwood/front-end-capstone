import React from 'react';
import css from './productdetail.module.css';

const Style = (props) => {
  const handleClick = () => {
    props.setCurrentStyle(props.style);
    props.setCurrentStyleIndex(0);
  }

  const renderStyle = () => {
    if (props.style.photos[0]) {
      return (
        <img
          className={css.styleItem}
          src={props.style.photos[0].thumbnail_url}
          onClick={handleClick}
      ></img>
      )
    } else {
      return (
        <img
          className={css.styleItem}
          src="https://www.budget101.com/images/image-not-available.png?14867"
          onClick={handleClick}
        ></img>
      )
    }
  }

  return (
    <div>
      {renderStyle()}
    </div>
  );
}

export default Style;