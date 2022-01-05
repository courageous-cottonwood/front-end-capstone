import React, { useState } from 'react';
import css from './productdetail.module.css'

const StyleThumbnail = (props) => {
  const handleClick = () => {
    props.setCurrentStyleIndex(props.styleIndex)
  }

  const renderThumbnail = () => {
    if (props.photo.thumbnail_url) {
      return (
        <img
          onClick={handleClick}
          src={props.photo.thumbnail_url}
          className={css.styleThumbnail}
        ></img>
      )
    } else {
      return (
        <img
          onClick={handleClick}
          src="https://www.budget101.com/images/image-not-available.png?14867"
          className={css.styleThumbnail}
        ></img>
      )
    }
  }

  return (
    <div>
      {renderThumbnail()}
    </div>
  )
}

export default StyleThumbnail