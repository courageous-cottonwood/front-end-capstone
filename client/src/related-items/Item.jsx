/* eslint-disable prefer-template */
/* eslint-disable import/no-cycle */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable spaced-comment */
/* eslint-disable import/extensions */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */

import React from 'react';
import StarRating from './StarRating.jsx';
import RelatedCSS from './cssModules/Related.module.css';

//>
const Item = (props) => {
  console.log(props);
  return (
    <div className={RelatedCSS.card}>
      <h4>{props.category}</h4>
      <h2>{props.name}</h2>
      <h4>Placeholder for image</h4>
      <p>{'$' + props.price}</p>
      <StarRating />
    </div>
  );
};

export default Item;
