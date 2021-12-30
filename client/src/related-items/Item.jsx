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

import React, { useState } from 'react';
import StarRating from './StarRating.jsx';
import RelatedCSS from './cssModules/Related.module.css';

//pass down rating prop
const Item = (props) => {
  //thubnail call
  //GET /products/:product_id/styles

  const [image, setImage] = useState([])

  // useEffect(() => {
  //   console.log('hello useEffect in Item');

  //   axios.get('/products/styles', { params: { product_id: props.key } })
  //     .then((res) => {
  //       //get the item data,find results array and photos
  //       //console.log(res.data);
  //       // --> results [] --> photos [] --> "thumbnail_url"
  //       //setImage()
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
        <p>{'$' + (props.price || 'Still loading')}</p>
        <StarRating id = {props.id}/>
      </div>
    </div>
  );
};

export default Item;
