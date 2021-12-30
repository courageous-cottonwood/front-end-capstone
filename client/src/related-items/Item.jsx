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

//pass down rating prop
const Item = (props) => {
  //thubnail call
  //GET /products/:product_id/styles
  // --> results [] --> photos [] --> "thumbnail_url"

  
  // useEffect(() => {
  //   console.log('hello useEffect in Item');
  //   //1. axios.get(/id/related)
  //   axios.get('/products/related', { params: { product_id: productId } })
  //     .then((res) => {
  //       //console.log(res.data);
  //       getEachItem(res.data);
  //       //setItems(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     })

  // }, []);



  return (
    <div className={RelatedCSS.card}>
      <div>
        <h4>{props.category || 'Still loading'}</h4>
        <h2>{props.name || 'Still loading'}</h2>
        <h4>Image is loading</h4>
        <p>{'$' + props.price}</p>
        <StarRating />
      </div>
    </div>
  );
};

export default Item;
