import React, { useState } from 'react';
import css from './productdetail.module.css';
import Style from './Style.jsx';

const ProductInfo = (props) => {
  return (
    <div className={css.productInfoContainer}>
      <div>{props.product.category}</div>
      <h2>{props.product.name}</h2>
      <div>{props.product.description}</div>
      <h3>
        ${
          props.currentStyle.sale_price ?
          props.currentStyle.sale_price + " SALE" :
          props.currentStyle.original_price
        }</h3>
      <div><b>Style > </b>{props.currentStyle.name}</div>
      <div className={css.styleSelector}>
        {
          props.styles.map((style) =>
            <Style
              key={style.style_id}
              style={style}
              setCurrentStyle={props.setCurrentStyle}
            />
          )
        }
      </div>
    </div>
  );
};

export default ProductInfo;