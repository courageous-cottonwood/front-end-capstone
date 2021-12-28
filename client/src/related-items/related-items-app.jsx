/* eslint-disable react/jsx-equals-spacing */
/* eslint-disable import/order */
/* eslint-disable import/extensions */
/* eslint-disable spaced-comment */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/prop-types */
/* eslint-disable semi */
/* eslint-disable react/destructuring-assignment */

//import ReactDOM from 'react-dom';
//client/src/related-items/dummy_data.js
import RelatedCSS from './cssModules/Related.module.css';
import React from 'react';
import Item from './Item.jsx';

const AppRelated = (props) => (
  <div className = {RelatedCSS.container}>
    {props.items.map((item) => (
      <Item
        name={item.name}
        category={item.category}
        price={item.default_price}
        rating={item.star_rating}
        key={item.id}
      />))}
  </div>
)

export default AppRelated;
