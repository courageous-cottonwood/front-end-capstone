import React, { useState, useEffect } from 'react';
import css from './productdetail.module.css';
import Style from './Style.jsx';
import Stars from '../Utilities/Stars.jsx'
import axios from 'axios';

const ProductInfo = (props) => {
  const getAverageRating = () => {
    if(props.review_meta !== 0) {
      let totalSum = 0;
      let totalReviews = 0;
      let ratings = props.review_meta.ratings;
      for(let stars in ratings) {
        totalSum += (parseInt(stars) * parseInt(ratings[stars]));
        totalReviews += parseInt(ratings[stars]);
      }
      return totalSum/totalReviews;
    }
    return 0;
  }

  const renderSale = () => {
    if (props.currentStyle.sale_price) {
      return <h3>
        $<strike>{props.currentStyle.original_price}</strike>
        &nbsp;{props.currentStyle.sale_price}
        &nbsp;SALE
      </h3>
    } else {
      return <h3>${props.currentStyle.original_price}</h3>
    }
  }

  return (
    <div className={css.productInfoContainer}>
      <div>{props.product.category}</div>
      <Stars
        rating={getAverageRating()}
        size={20}
        color='yellow'
      />
      <h2>{props.product.name}</h2>
      <div>{props.product.description}</div>
      {renderSale()}
      <div><b>Style > </b>{props.currentStyle.name}</div>
      <div className={css.styleSelector}>
        {
          props.styles.map((style) =>
            <Style
              key={style.style_id}
              style={style}
              setCurrentStyle={props.setCurrentStyle}
              setCurrentStyleIndex={props.setCurrentStyleIndex}
            />
          )
        }
      </div>
    </div>
  );
};

export default ProductInfo;