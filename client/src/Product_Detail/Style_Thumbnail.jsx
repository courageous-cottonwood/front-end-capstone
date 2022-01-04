import React, { useState } from 'react';
import css from './productdetail.module.css'

const StyleThumbnail = (props) => {
  const handleClick = () => {
    props.setCurrentStyleIndex(props.styleIndex)
  }

  return (
    <div>
      <img
        onClick={handleClick}
        src={props.photo.thumbnail_url}
        className={css.styleThumbnail}
      ></img>
    </div>
  )
}

export default StyleThumbnail