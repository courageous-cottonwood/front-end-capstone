import React from 'react';
import css from './productdetail.module.css';

const Style = (props) => {
  const handleClick = () => {
    props.setCurrentStyle(props.style);
  }

  return (
    <div>
      <img
        className={css.styleItem}
        src={props.style.photos[0].thumbnail_url}
        onClick={handleClick}
      ></img>
    </div>
  );
}

export default Style;